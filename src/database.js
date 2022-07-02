const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://manchitas:KzkNm0BXbTvlQ9MK@cluster0.wgrva.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Conexión correcta a MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
dbConnect();