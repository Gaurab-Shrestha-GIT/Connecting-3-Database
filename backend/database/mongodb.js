const mongoose = require("mongoose");
const uri =
  "mongodb+srv://portpro_test:portpro_test@cluster0.6q6fckx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
  uri,
  {
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Mongo DB Connected");
    }
  }
);
