import http from "http";

http
  .createServer((req, res) => {
    console.log("hola mundoooooo!!");
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("id,name\n");
    res.write("1,jhamilex");
    res.write("id,name");
    res.write("id,name");
    // const persona = {
    //   name: "jhamilex",
    //   age: 23,
    // };
    // res.write(JSON.stringify(persona));
    res.end();
  })
  .listen("8080");
