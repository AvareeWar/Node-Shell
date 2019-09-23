const fs = require('fs');//can't find fs

module.exports = function lesser(){
    fs.readdir('./', 'utf8', (err, files) =>{
        if(err){
            throw err;
        }
        else{
            process.stdout.write('\n');
            process.stdout.write(files + '\n');
            process.stdout.write("\n\nprompt > ");
        }
    })
}

