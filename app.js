const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");


//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);
const mongoose = require("mongoose");
//configure mongoose

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

mongoose.connect(`mongodb+srv://kaweranelly:Nelly2021@cluster0.wiepnix.mongodb.net/?retryWrites=true&w=majority`, {
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

