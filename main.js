const http = require('http');
const fs = require('fs');
const port = 4200;

const server = http.createServer((req, res) => {
    let content;
    if (req.url == '/') {
        content = fs.readFileSync('home.html', 'utf-8');
        res.write(content);
        res.write('<br>This is the home page');
        res.end();
    } else if (req.url == '/services') {
        content = fs.readFileSync('services.html', 'utf-8');
        res.write(content);
        res.write('<br>This is the services page');
        res.end();  
    } else if (req.url == '/contact') {
        content = fs.readFileSync('contact.html', 'utf-8');
        res.write(content);
        res.write('<br>This is the contact page');
        res.end();
    } else {
        res.writeHead(404);
        res.write('Error, page not found');
        res.end();
    }
});

server.listen(port, () => console.log(`Listening on port ${port}`));