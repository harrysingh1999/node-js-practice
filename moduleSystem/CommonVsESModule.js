// Common JS Module.................................

// Commons JS modules sometimes uses cjs extension but it is not mandatory, it is just a convention to add cjs in the file extension........
// Synchronous file Loading, file Module Load will be synchronous or Blocking in Nature
// File extension optional
// If we give full file path the we can load any file using cjs
// It is a convention to add cjs in the file extension
// It is optional to set "type": "commonjs" in package.json because
// In cjs THIS keyword points to module.exports by default
// Imports are not Hoised, to run them in priority we have to put them at the top of the file


// ES6 Modules //..............................................

// ES6 modules sometimes uses mjs/esm extension but it is not mandatory, it is just a convention to add mjs in the file extension........
// Asynchronous file loading, Only module loading will be Async but the code will run synchronously on main thread.
// File extension mandatory
// We can not load any file, only js and mjs files are allowed
// It is a convention to add mjs in the file extension
// We have to set "type": "module" in package.json
// In mjs THIS keyword is undefined
// Imports are Hoisted, your import line will run in priority regardless of where it is in the file sequuence wise, but it is a good practice to keep all imports at the top of the file.

 