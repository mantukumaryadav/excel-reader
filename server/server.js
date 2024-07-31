const express = require('express');
const multer = require('multer');
const ExcelJS = require('exceljs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint to handle file upload and read Excel
app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');

    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(req.file.buffer);

        const sheet = workbook.worksheets[0];
        const data = {
            cells: [],
            mergedCells: [],
            columns: [],
        };

        // Extract cell data and formatting
        sheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
            row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
                data.cells.push({
                    row: rowNumber,
                    col: colNumber,
                    value: cell.value,
                    style: {
                        fill: cell.style.fill,
                        font: cell.style.font,
                        alignment: cell.style.alignment,
                        border: cell.style.border,
                    },
                });
            });
        });

        // Extract merged cells if they exist
        if (sheet.mergedCells) {
            sheet.mergedCells.forEach(mergedCell => {
                data.mergedCells.push(mergedCell);
            });
        }

        // Extract column widths if they exist
        if (sheet.columns) {
            sheet.columns.forEach(col => {
                data.columns.push({
                    width: col.width,
                    style: col.style,
                });
            });
        }

        res.json(data);
    } catch (error) {
        console.error('Error processing file:', error.stack); // Detailed error logging
        res.status(500).send('Error processing file.');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

