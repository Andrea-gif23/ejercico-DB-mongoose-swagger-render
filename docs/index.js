const basicInfo = require("./basicInfo");
const components = require("./components");
const tasks = require("./tasks");

module.exports = {
    openapi: "3.0.0",
    info: basicInfo,
    paths: tasks,
    components: components
};