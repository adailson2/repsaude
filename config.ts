import dotenv from 'dotenv';
import mongoose from 'mongoose';

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

export default db;
