import fs from 'fs'

const fs = require('fs');
const path = require('path');

fs.writeFile("create.txt","This is a New file to handle the New error",(err)=>{
    if(err){
        console.log("File Created failed");
        return
    }
    console.log("File Created Successfully done");
})

fs.appendFile('create.txt', '\nThis is new content', (err) => {
    if (err) throw err;
    console.log('File updated successfully');
});

fs.readFile('create.txt','utf8',(err, data) =>{
    if(err) throw err;
    console.log(data);
} )

// fs.unlink('create.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully');
// });