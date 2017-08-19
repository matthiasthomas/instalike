const mongoose = require('mongoose');
const Promise = require('bluebird');

module.exports = class DBConfig {
    static init() {
        const URL = "mongodb://" + process.env.APP_MONGO_HOST + (process.env.APP_MONGO_PORT ? (":" + process.env.APP_MONGO_PORT) : "") + "/instalike";

        mongoose.Promise = Promise;
        mongoose.connect(URL);
        mongoose.connection.on("error", (err) => {
            console.log('An error ocurred with the DB connection => ' + err);
            process.exit(1);
        });
    }
};
