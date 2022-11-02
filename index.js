import express from 'express';
import * as dotenv from 'dotenv';
import { encodeMessage } from './helpers/encodeMessage.js';
import { decodeMessage } from './helpers/decodeMessage.js';
import { Rot } from './database/rot.js';
import { getDatabase } from './database/getDatabase.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const database = getDatabase();

const main = async () => {
  await database.sync();

  app.post('/encode', async (request, response) => {
    try {
      const { message, rot } = request.body;

      if (!message || !rot) {
        response.status(500).send('internal server error');
        return;
      }

      const savedRot = await Rot.findOne({ where: { rot } });

      if (savedRot) {
        await Rot.update({
          rot,
          usage: savedRot.usage + 1,
        }, {
          where: {
            rot,
          },
        });
      } else {
        await Rot.create({
          rot,
          usage: 1,
        });
      }

      response.status(200).json({
        message: encodeMessage(message, rot),
      });
    } catch {
      response.status(500).send('internal server error');
    }
  });

  app.get('/decode', (request, response) => {
    try {
      const { message, rot } = request.query;

      if (!message || !rot) {
        response.status(500).send('internal server error');
        return;
      }

      response.status(200).json({
        message: decodeMessage(message, rot),
      });
    } catch {
      response.status(500).send('internal server error');
    }
  });

  app.get('/stats', async (request, response) => {
    try {
      const rots = await Rot.findAll({ raw: true });
      response.status(200).json(rots);
    } catch {
      response.status(500).send('internal server error');
    }
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main();
