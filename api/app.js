const express = require("express");

const app = express();
app.get('/api/v1/status', (req, res) => {
    res.status(200).send({
        message: 'OK'
    });
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
