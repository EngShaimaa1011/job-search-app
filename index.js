require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleware');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const app = express();

// security
app.use(helmet());

connectDB();
// body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

// error handler
app.use(errorHandler);

// start server
const PORT = process.env.PORT;

app.listen(PORT, () =>
console.log(`Server running on port ${PORT}`)
);
