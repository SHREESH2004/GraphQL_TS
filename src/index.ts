import express from 'express';
import mainRoutes from './routers/main.routes.js'; 

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/data', mainRoutes);

app.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});
