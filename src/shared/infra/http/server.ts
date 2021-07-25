import express, { Router } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333, () => {
  console.log('Server started!');
});

app.get('/teste', (req, res) => {
  return res.json({ message: 'testando servidor' });
});
