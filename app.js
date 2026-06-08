const http = require('http')

http.createServer((req,res) => res.end('CI/CD Working!')).listen(3000)
