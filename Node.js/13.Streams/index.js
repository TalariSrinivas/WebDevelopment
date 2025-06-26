import { createReadStream } from "fs";

const stream = createReadStream("./Node.js/13.Streams/data.txt",{encoding:"utf8"});

stream.on("data",(data)=>{
    console.log(data);
});
