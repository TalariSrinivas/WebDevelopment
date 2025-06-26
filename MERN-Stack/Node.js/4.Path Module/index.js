import path from "path";

console.log(path.basename("c:\\nodejs\\app.html"));
console.log(path.basename("c:\\nodejs\\app.js",".js"));
console.log(path.dirname("c:\\nodejs\\app.js"));
console.log(path.extname("c:\\nodejs\\index.js"));
console.log(path.join("c:","nodejs","index.js"));
console.log(path.join("c:","nodejs","index.js",".."));
console.log(path.join("c:","nodejs","index.js","..",".."));
console.log(path.normalize("c:\\courses\\redu\\store\\features"));
console.log(path.parse("c:\\nodejs\\course\\index.js"));
console.log(path.parse("c:\\nodejs\\course\\index.js").base);

