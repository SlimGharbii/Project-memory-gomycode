
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import connect from './config/db.js'
import postRoutes from './routes/posts.js';

const app = express();
//connect ()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

 const CONNECTION_URL = 'mongodb+srv://bamboutcha:26347584SELIM@cluster0.fvnn6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 const PORT = process.env.PORT|| 5000;

 mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
   .catch((error) => console.log(`${error} did not connect`));
