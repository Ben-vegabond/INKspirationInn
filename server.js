const express = require('express');
const htmlRoutes = require('./routes/html-routes')
const apiRoutes = require('./routes/api-routes')
const PORT = process.env.PORT || 3002;
// dynamically set the port
const app = express();

// Express middleware will always run the operation in the order from top to bottom "order matters"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes)
app.use(apiRoutes)






app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
