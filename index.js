const express = require("express");
const dbConnectExec = require("./dbConnectExec.js");

const db = require("./dbConnectExec.js");
const app = express();

app.listen(5001, () => {
  console.log(`app is running on port 5001`);
});

app.get("/hi", (req, res) => {
  res.send("hello good sir");
});

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/games", (req, res) => {
  db.executeQuery(
    `SELECT *
    From Game1
    LEFT Join genre
    on genre.GenrePK = Game1.GenreFK`
  )
    .then((theResults) => {
      res.status(200).send(theResults);
    })

    .catch((myError) => {
      console.log(myError);
      res.status(500).send();
    });
});

app.get("/games/:pk", (req, res) => {
  let pk = req.params.pk;
  //   console.log(pk);
  let myQuery = `SELECT *
From Game1
LEFT Join genre
on genre.GenrePK = Game1.GenreFK
where GamePK = ${pk}`;

  db.executeQuery(myQuery)
    .then((result) => {
      console.log(result);
      if (result[0]) {
        res.send(result[0]);
      } else {
        res.status(404).send(`bad request`);
      }
    })
    .catch((err) => {
      console.log("Error somthing went worng", err);
      res.status(500).send();
    });
});
