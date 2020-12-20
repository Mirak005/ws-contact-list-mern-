const mongoose = require("mongoose");

//2-CONNECT THE DB
//3-SETUP YOUR ENV VARIABLES
function connectDB() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  mongoose.connect(process.env.MONGO_URL, opts, (err) => {
    if (err) return err;
    console.log("💽 :  The DATABASE IS RUNNING....");
  });
}

module.exports = connectDB;
