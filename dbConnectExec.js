const sql = require("mssql");

const kerrConfig = require("./config.js");

const config = {
  user: kerrConfig.DB.user,
  password: kerrConfig.DB.password,
  server: kerrConfig.DB.server, // You can use 'localhost\\instance' to connect to named instance
  database: kerrConfig.DB.database,
};

// let myGame;

async function executeQuery(aQuery) {
  let connection = await sql.connect(config);
  let result = await connection.query(aQuery);

  //   console.log(result);
  return result.recordset;
}

// executeQuery(`SELECT *
// From Game1
// LEFT Join genre
// on genre.GenrePK = Game1.GenreFK`);

module.exports = { executeQuery: executeQuery };
