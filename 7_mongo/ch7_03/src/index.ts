import { createServer } from 'http';
import { createExpressApp } from './express';
import { connectAndUseDB, type MongoDB } from './mongodb';

const connectCb = (db: MongoDB) => {
  const hostname = 'localhost';
  const port = 4000;
  const app = createExpressApp(db);

  createServer(app).listen(port, () =>
    console.log(`connect http://${hostname}:${port}`)
  );
};

connectAndUseDB(connectCb, 'ch07');
