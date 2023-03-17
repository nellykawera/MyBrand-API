const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");
const userRouter = require("./routes/userRoutes")
const dotenv = require('dotenv')

// swagger dependencies import
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

dotenv.config()

app.use(express.json())

app.use("/api/blogs", blogRouter);
app.use("/api/auth", userRouter);
const mongoose = require("mongoose");

// swagger documentation
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'MyBrand_API Documentation',
            description: 'MyBrand_API Documentation',
            contact: {
                name: 'Callback-Pirates'
            },
            server: `http://localhost:3001`
        }
    },

    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

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

module.exports = app;

