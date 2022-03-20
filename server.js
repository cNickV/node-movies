const { app } = require('./app');

// Utils
const { sequelize } = require('./util/database');

sequelize
  .authenticate()
  .then(() => console.log('Database Authentication'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => {
  console.log('Movie Api Running!!');
});
