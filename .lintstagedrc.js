module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) =>
    filenames.map((filename) =>
      `yarn eslint --fix --ext js,jsx,ts,tsx '${filename}'`),
}