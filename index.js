"use strict";

const __hasTaskRunner__ = require("has-task-runner");

const isGulp = path => {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error("No path specified."));
    }

    __hasTaskRunner__("gulp", { path }).then(({ runnerExists }) => {
      resolve(runnerExists);
    });
  });
};

module.exports = { isGulp };
