const { Sequelize } = require( "sequelize");
const fs = require( "fs");
const path = require( "path");

const basename = path.basename(__filename);

const db = {};
let sequelize;

const conexionDB = async () => {
  sequelize = new Sequelize("na_hospital", "postgres", "test", {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false,
    define:{
      timestamps: false
    },
    pool: {
      max: 15,
      min: 5,
      idle: 20000,
      evict: 15000,
      acquire: 30000,
    },
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", JSON.stringify(error));
  }
  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize);
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
};
setTimeout(() => conexionDB(), 2000);

module.exports = db
