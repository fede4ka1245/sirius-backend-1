import express from 'express';
import { encodeMessage } from './helpers/encodeMessage.js';
import { decodeMessage } from './helpers/decodeMessage.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/encode', (request, response) => {
  const { message, rot } = request.body;

  response.status(200).json({
    message: encodeMessage(message, rot),
  });
});

app.get('/decode', (request, response) => {
  const { message, rot } = request.query;

  response.status(200).json({
    message: decodeMessage(message, rot),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
