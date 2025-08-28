const app = require('./app');
const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
