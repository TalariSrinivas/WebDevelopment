import fs from 'fs';

for(let i=0;i<10;i++){
    fs.writeFileSync("./Node.js/13.Streams/data.txt",`${i}\n`,{flag:"a"});
}