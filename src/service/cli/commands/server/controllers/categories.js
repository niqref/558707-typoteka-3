"use strict";

const {join} = require(`path`);

const handlers = require(`../utils`);
const {HttpCode} = require(`../../../../../constants`);
const pinoLogger = require(`../../../../../pino-logger`);

const FILE_PATH = join(__dirname, `..`, `..`, `..`, `..`, `..`, `..`, `data`, `categories.txt`);

const getIndex = async (req, res) => {
  try {
    const fileContent = await handlers.getContent(FILE_PATH, false);
    const categories = fileContent.split(`\n`).slice(0, -1);

    res.status(HttpCode.OK).json(categories);
  } catch (err) {
    res.status(HttpCode.BAD_REQUEST).send(err.message);
    pinoLogger.error(`Error: ${err.message}`);
  }
};

module.exports = getIndex;
