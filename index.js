require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('node:dns');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

let urlList = {};


const port = process.env.PORT || 3000;

app.use(cors());
count = 0;
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

/**
 * My implementation of building a shorturl generator
 * Learning about the URL api was very interesting, 
 * didn't realise that it owuld throw an erorr if the 
 * URL is invalid
 */
app.post('/api/shorturl', function(req, res) {
  let url;
  try {
    url = new URL(req.body.url);
    hostname = url.hostname;
    
  }
  catch {
    return res.json({"error": "Invalid URL"});
  }
  
  dns.lookup(hostname, function(err, address, family) {
      if (err) {
        res.json({"error": "Invalid URL"})
      }
      count+= 1;
  urlList[count] = url;
  res.json({"original_url": url, "short_url": count});
      
  });
});

app.get('/api/shorturl/:id', function(req, res) {
  
  const id = req.params.id
  redirectedUrl = urlList[id];
  if (!redirectedUrl) {
    return res.json({"error": "Invalid ID"})
  }
  
  res.redirect(redirectedUrl);
  
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
