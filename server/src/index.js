const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const multipartMiddleware = multipart({ uploadDir: './uploads'});
app.post('/upload', multipartMiddleware, (req, resp) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});

app.use((err, req, resp, next) => resp.json({ error: err.message }));

app.listen(8000, () => {
  console.log('Servidor escutando na porta 8000')
})
