const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', routes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
