const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");
const userRouter = require("./routes/userRoutes");
const messageRouter = require("./routes/usermessagesRoutes");
const swaggerDocumentations =  require("./utils/documentation")
const cors = require ("cors")
const bodyParser = require("body-parser")

const dotenv = require('dotenv')

// swagger dependencies import
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

dotenv.config()

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());

app.use(express.json())

app.use("/api/blogs", blogRouter);
app.use("/api/auth", userRouter);
app.use("/api/userMessages", messageRouter );    
const mongoose = require("mongoose");

// swagger documentation
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocumentations))

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error(error);
    });

    module.exports= app;