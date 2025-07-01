import greet from "./greet.js"
import {p1,p2,p3} from "./peoples.js"
//.js is necessary

greet(p1);
greet(p2);
greet(p3);

//use npm init 
//then go to package.json and add the below code
/*{
  "name": "3.es6-imports",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}*/