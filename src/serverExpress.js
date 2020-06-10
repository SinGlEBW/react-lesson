const express = require('express'),
         path = require('path'),
         fs = require('fs');

let pathFile = path.join(__dirname);

let app = express();

app.listen(8080);
app.use(express.static(pathFile))
app.get('/new', (req, res) => {

   res.set({
      //'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'origin, content-type, accept'
   })
   res.status(200)
   //  let body = fs.readFileSync(`${pathFile}/component/element.html`).toString()
   //  res.json(body);
    res.sendFile(`${pathFile}/component/element.html`)
   
   
   
})



// Accept-Ranges: bytes
// Cache-Control: public, max-age=0

// Access-Control-Allow-Headers: origin, content-type, accept
// Access-Control-Allow-Origin: *
// Content-Length: 340
// Content-Type: application/json; charset=utf-8
// Date: Sun, 07 Jun 2020 00:17:20 GMT
// ETag: W/"154-172882e063d"
// Last-Modified: Sat, 06 Jun 2020 05:50:17 GMT
// X-Powered-By: Express
