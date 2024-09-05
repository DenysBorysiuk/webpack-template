# Webpack template

This project is configured with Webpack 5 to bundle JavaScript, SCSS, Pug templates, and handle
assets like fonts and SVGs. Below is a brief overview of the setup.

## Features

- Webpack 5
- Babel
- SCSS
- Pug

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd webpack-scss-pug-project
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Start the development server with live reloading:

```bash
npm run dev
```

### Production

Generate a production build:

```bash
npm run build
```

## Overview of Configuration

### Entry and Output

- **Entry**: The entry point is `src/index.js`.
- **Output**: The bundled files will be output to the `build` directory, with hashed filenames for
  cache busting.

### Loaders

- **JavaScript**: Transpiles ES6+ code using `babel-loader`.
- **Pug**: Compiles Pug templates to HTML using `pug-loader`.
- **SCSS**: Transforms SCSS to CSS, applies vendor prefixes, and extracts the CSS into a separate
  file using `MiniCssExtractPlugin`.
- **Assets**: Handles image, font, and SVG files via Webpack's asset modules.

### Plugins

- **HtmlWebpackPlugin**: Generates an `index.html` from a Pug template.
- **MiniCssExtractPlugin**: Extracts CSS into separate files.
- **CleanWebpackPlugin**: Cleans the `build` folder before each build.
- **CopyPlugin**: Copies assets (e.g., favicons and icons) from `src/assets` to the `build`
  directory.

### Dev Server

The development server serves files from the `build` directory on `localhost:9000`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production build.
