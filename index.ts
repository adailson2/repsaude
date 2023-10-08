import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './server';
import usersRouter from './routes/users';
import leadsRouter from './routes/leads';

const port = process.env.PORT || 3000;

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (mongoURI) {
  mongoose.connect(mongoURI);
}

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Erro na conexão com o MongoDB:', error);
});

db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Montar as rotas do usuário em /users
app.use('/users', usersRouter);

// Montar as rotas da lead em /leads
app.use('/leads', leadsRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
