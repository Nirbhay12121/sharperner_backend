const express = require("express");
const app = express();

const productsRouter = require("./router/products");
const categoriesRouter = require("./router/categories");

const PORT = 4000;

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});


app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});