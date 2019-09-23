const fs = require('fs');

module.exports = function cat(filename){
    fs.readFile(filename, 'utf8', (err, file) =>{
        if(err){
            throw err;
        }
        else{
            process.stdout.write('\n');
            process.stdout.write(file);
            process.stdout.write("\nprompt > ");
        }
    })
    
}