// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { connectDB } from './Database/config.js';
// import authRoute from './Routes/authRouter.js';
// import artRoute from  './Routes/artRouter.js';
// import cartRoute from './Routes/cartRoute.js';
// import orderRoute from './Routes/orderRouter.js';

// //initalization
// dotenv.config()
// const app=express()

// //middlewares
// app.use(express.json())
// app.use(cors({
//     origin:"*",
//     Credentials:true
// }))


// //connecting DB
// connectDB()


// //routers
// app.use('/api/user',authRoute)
// app.use('/api/arts',artRoute)
// app.use("/images", express.static("Uploads"));
// app.use('/api/cart',cartRoute)
// app.use('/api/order',orderRoute)


// app.get('/',(req,res)=>{
//     res.status(200).send("Welcome to the App")
// })
// //running port
// app.listen(process.env.PORT,()=>{
//     console.log("Server is running on the port")
// })


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './Database/config.js';
import authRoute from './Routes/authRouter.js';
import artRoute from './Routes/artRouter.js';
import cartRoute from './Routes/cartRoute.js';
import orderRoute from './Routes/orderRouter.js';

// Initialization
dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "*",
    Credentials: true
}));

// Connecting DB and starting the server
const startServer = async () => {
    try {
        await connectDB();  // Wait for DB connection
        console.log('Database connected, starting server...');

        // Routes
        app.use('/api/user', authRoute);
        app.use('/api/arts', artRoute);
        app.use("/images", express.static("Uploads"));
        app.use('/api/cart', cartRoute);
        app.use('/api/order', orderRoute);

        app.get('/', (req, res) => {
            res.status(200).send("Welcome to the App");
        });

        // Running server on the port
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on the port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
    }
};

startServer();  // Call the async function to start the server
