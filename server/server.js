const app = require('./app');
const {logger }= require('../server/src/middlewares/logger');
const PORT = 8001;

app.listen(PORT, () => {
    logger.info(`Backend Service Startes at: ${PORT}`);
});
