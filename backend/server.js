import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './connectDB.js'
import authRouter from './routes/authRoute.js'
import todoRouter from './routes/todoRoute.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://todo-app-c41w.onrender.com', 
  methods: 'GET,POST,PUT,DELETE',
}));
dotenv.config()

app.use('/api', authRouter)
app.use('/api/todos',todoRouter)

const port = process.env.PORT || 4000

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server listening on port", port);
  });
});
