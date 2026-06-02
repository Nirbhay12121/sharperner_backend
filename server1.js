const express = require('express');
const app = express();
const PORT = 4001;

app.get("/welcome/:username", (req, res) => {
    const username = req.params.username;
    const role = req.query.role || "User"; // default fallback
    res.send(`Welcome ${username}, your role is ${role}`);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})