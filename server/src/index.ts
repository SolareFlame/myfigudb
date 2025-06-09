import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import figureRoutes from "./routes/figureRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not set in environment variables');
}


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/figures', figureRoutes)
app.use('/api/users', userRoutes);
app.use('/api/auth/', authRoutes);

app.use('/uploads', express.static('uploads'));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});