// const os = require('os');

// System Architecture
// console.log(os.arch())

// Free memeory
// console.log(os.freemem())
// const freememory = os.freemem()
// console.log(freememory/1024/1024/1024)

// const totalmemory = os.totalmem()
// console.log(totalmemory/1024/1024/1024)

// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.tmpdir())
// console.log(os.type())






const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]
    const product = products.find(p=>p.id===(+id))
    console.log(product)
    res.setHeader('Content-Type', 'text/html');
          let modifiedIndex = index.replace('**title**', product.title)
          .replace('**url**', product.thumbnail)
          .replace('**price**', product.price)
          .replace('**rating**', product.rating)
          res.end(modifiedIndex);
          return;
  }  
  //   res.setHeader('Dummy', 'DummyValue');
});

server.listen(8080);

