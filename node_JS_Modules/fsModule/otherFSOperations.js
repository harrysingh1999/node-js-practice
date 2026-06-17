import fs from 'fs/promises'


// Rename method is used to both move/cut and rename files and folders........................
// fs.rename("script.js", "app.js");
// fs.rename("app.js", "C:\\Users\\anura\\OneDrive\\Desktop\\script.js

fs.rename('node_JS_Modules/fsModule/OtherFSOperations.js', 'node_JS_Modules/fsModule/otherFSOperations.js')

// fs.rename('Modules', 'modules')

// fs.mkdir('moduleSystem/commonJSModule', { recursive: true }) // recursive is used to create all the parent folders if they are not present,
//  otherwise it will throw error if parent folder is not present...........


// fs.mkdir('moduleSystem')

// copyFile("backend.png", "C:\\Users\\anura\\OneDrive\\Desktop\\no

// cp("./src", "C:\\Users\\anura\\OneDrive\\Desktop\\src", { recursive: true }) // to copy a folder/directory with all its content recursively...............

// fs.unlink('backend.png') // to delete a file................

// fs.rm("src", { recursive: true }); // to delete a folder/directory with all its content recursively...........

// appendFile('styles.css', '')