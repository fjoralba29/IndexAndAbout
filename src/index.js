import fsp from 'fs/promises'; 
import express from 'express'; 

const app = express();

app.get('/uniques', async (request, response) => {
    const content = await fsp.readFile('./data.csv', 'utf8');
    const data = content.split('\r\n');
    const uniqueValues = data.filter((value, index, array) => array.indexOf(value) === index);
    response.send(uniqueValues);
});

app.get('/sum', async (request, response) => {
    const content = await fsp.readFile('./data.csv', 'utf8');
    const data = content.split('\r\n');
    let sum; 
    for (let number of data) {
        sum += (Number(number)); 
    }    
    response.send(sum);
});

const port = 3000; 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});




// const app = express();

// app.get('/', async (request, respond) => {
//     const content = await fsp.readFile('./index.html', 'utf8');
//     respond.send(content);
// });

// app.get('/about', async (request, respond) => {
//     const content = await fsp.readFile('./about.html', 'utf8');
//     respond.send(content);
// });

// const port = 3000; 
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// });


// const server = http.createServer(async (request, respond) => {
//     if (request.url === '/') {
//         const content = await fsp.readFile('./index.html', 'utf8');
//         respond.statusCode = 200;
//         respond.setHeader('Content-Type', 'text/html');
//         respond.end(content);
//     }
//     else if (request.url === '/about') {
//         const content = await fsp.readFile('./about.html', 'utf8');
//         respond.statusCode = 200;
//         respond.setHeader('Content-Type', 'text/html');
//         respond.end(content);
//     }
//     else {
//         respond.statusCode = 404;
//         respond.setHeader('Content-Type', 'text/plain');
//         respond.end('Not found!');
//     }
// })

// const hostname = '127.0.0.1';
// const port = 3000;

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
//   });