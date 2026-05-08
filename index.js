import express from "express";
import axios from "axios";

const app = express();

const port = process.env.PORT || 3000;

const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {

    const result = await axios.get(API_URL);

    res.render("index", {
      secret: result.data.secret,
      user: result.data.username,
    });

  } catch (error) {

    console.log(error.message);

    res.status(500).send("Failed to fetch secret.");

  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
