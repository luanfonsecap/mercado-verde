import 'express-async-errors';
import 'reflect-metadata';
import './database';

import app from './app';

app.listen(3333, () => console.log('🔥️ Server started...'));
