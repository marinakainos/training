// Import fs module
const fs = require('fs');

// Present Working Directory: pwd command
// Making a new directory called ./myFolder:

fs.mkdir('./myFolder', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder Created Successfully');
    }
})


const data = "Hi,this is newFile.txt";

fs.writeFile('./myFolder/myFile.txt', data, (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Writen to file successfully!');
    }
})

fs.readFile('./myFolder/myFile.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('File read successfully! Here is the data');
        console.log(data);
    }
})


try{
    // Write to file synchronously
    fs.writeFileSync('./myFolder/myFileSync.txt', 'myFileSync says Hi');
    console.log('Write operation successful');

    // Read file synchronously
    const fileData = fs.readFileSync('./myFolder/myFileSync.txt', 'utf-8');
    console.log('Read operation successful. Here is the data:');
    console.log(fileData);
} catch(err) {
    console.log('Error occurred!');
    console.log(err);
}