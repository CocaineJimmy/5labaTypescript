// src/common/config.ts
import * as dotenv from 'dotenv';

dotenv.config();

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development';

// application
const PORT: number = Number(process.env.PORT) || 4000;

// JWT
const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || 'secret-key';

// database
const MONGO_CONNECTION_STRING: string =
  process.env.MONGO_CONNECTION_STRING || 'your-mongo-db-connection-string';

export { PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY };
