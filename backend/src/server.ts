import 'express-async-errors';
import 'reflect-metadata';

import createConnection from './database';
import app from './app';

createConnection();

app.listen(3333, () => console.log('🔥️ Server started...'));
