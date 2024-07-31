# Excel Viewer with React and Node.js

This project provides a web-based application for uploading and viewing Excel files. The backend, built with Node.js and Express, processes the Excel files, while the frontend, built with React and styled using Tailwind CSS, renders the data using `@fortune-sheet/react`.

## Features

- **File Upload**: Upload Excel files (`.xlsx`) via a user-friendly interface.
- **Data Preservation**: The following features from the Excel files are preserved:
  - Merged Cells
  - Background Colors
  - Dropdown Data
  - Text Formats (bold, italic, strikethrough, left-aligned, right-aligned)
- **Responsive UI**: The application is designed to be fully responsive and visually appealing.

## Tech Stack

- **Frontend**: React, Tailwind CSS, `@fortune-sheet/react`
- **Backend**: Node.js, Express, ExcelJS
- **Language**: JavaScript

## Folder Structure

.
├── server
│ ├── node_modules
│ ├── server.js
│ └── package.json
├── client
│ ├── node_modules
│ ├── public
│ │ └── index.html
│ ├── src
│ │ ├── components
│ │ │ └── ExcelSheet.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── App.css
│ └── package.json
└── README.md


## Getting Started

cd server
npm start

cd client
npm start


### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/excel-reader.git

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

