

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
// const ObjectId = require('mongodb').ObjectId;

const findOneCategories = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('categories');
  const recordset = await db.findOne(parameter);
  return recordset;
};

const findAllCategoriess = async (parameter) => {
  parameter = {$and:[parameter]};
  const db = new Mongo(config.getDevelopmentDB());
  db.setCollection('categories');
  const recordset = await db.findMany();
  return recordset;
};


module.exports = {
  findOneCategories: findOneCategories,
  findAllCategoriess: findAllCategoriess
};
