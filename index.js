 const http = require('http');

 const homePage = require('./home');
 const siteCSS = require('./styles/site');

  const server = http.createServer((req, res) => {
    if (req.url == '/styles/site.css')  {
        console.log('get css');
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        res.write(siteCSS);
   
        
    } else {
        
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(homePage);
    }
   // res.write(siteCSS);
    
    res.end();
  });

  server.listen(5000, () => console.log('Server is listening on port 5000...'));