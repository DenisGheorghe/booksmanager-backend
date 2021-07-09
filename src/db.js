const { connect } = require("mongoose");

const Logger = require("./logger");
const DB_CONNECTION_STRING = "mongodb://localhost:27017/BooksManager";

(async () => {
    try {
        await connect(DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        Logger.info('Succesfully connected to the database');
    }
    catch (error) {
        Logger.error("Error while connecting to db:", error);
    }
})();
