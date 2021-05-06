module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'petlovers',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
