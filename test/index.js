"use strict";

const { resolve } = require("path");
const test = require("ava");
const { isGulp } = require("../");

test("empty path given", async t => {
  t.plan(1);
  return isGulp("").catch(e => t.is(e.message, "No path specified."));
});

test("gulpfile found", async t => {
  t.plan(1);
  return isGulp(resolve(__dirname, "fixtures/gulpfile")).then(gulpfileExists =>
    t.true(gulpfileExists)
  );
});

test("no gulpfile found", async t => {
  t.plan(1);
  return isGulp(
    resolve(__dirname, "fixtures/no-gulpfile")
  ).then(gulpfileExists => t.false(gulpfileExists));
});
