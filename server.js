const express = require("express");
const connectToMongo = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const contactUs = require("./routes/contactUs.js");
const app = express();
const bodyparser = require("body-parser");
const port = 3000;
const cors = require("cors");
const fileUpload = require("express-fileupload");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
connectToMongo();
app.use(
  cors({
    origin: "http://localhost:3001",
    optionsSuccessStatus: 200,
  })
  );
  app.use(
    fileUpload({
      useTempFiles: true,
    })
  );
app.listen(port, () => {
  console.log("working");
});
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "worked  fine",
  });
});

app.use("/api", userRoutes, adminRoutes,contactUs, (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});


// app.get("/api/config/paypal", (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// );

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running.....");
//   });
// }

