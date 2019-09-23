const ls = require('./ls');
const cat = require('./cat');

module.exports = function processing() {
    process.stdout.write('prompt > ');

    //The stdin 'data' fires after a user types in a line
    process.stdin.on('data', (data) =>{
        const cmd = data.toString().trim();
        if(cmd === 'pwd'){
            process.stdout.write(process.cwd());
        }
        else if(cmd === 'ls'){
            ls();
        }
        else if(cmd.includes('cat ')){
            let second = cmd.split(' ');
            let sec = second[1];
            cat(sec);
        }
        else{
            process.stdout.write('You typed: ' + cmd);
        }
        process.stdout.write('\nprompt > ');
    })
}