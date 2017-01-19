'use strict';

const __hasTaskRunner__ = require( 'has-task-runner' );

const isGulp = path => {
  if ( !path ) {
    throw new Error( 'No path specified.' );
  }

  return __hasTaskRunner__( 'gulp', { path })
    .then(({ runnerExists }) => {
      return runnerExists;
    });
};

module.exports = { isGulp };
