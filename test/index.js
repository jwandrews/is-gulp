'use strict';

import { resolve } from 'path';
import test from 'ava';
import { isGulp } from '../index.js';

test( 'empty path given', t => {
  t.plan( 1 );
  return isGulp( '' )
    .catch( e => t.is( e.message, 'No path specified.' ));
});

test( 'gulpfile found', t => {
  t.plan( 1 );
  return isGulp( resolve( __dirname, 'fixtures/gulpfile' ))
    .then( gulpfileExists => t.true( gulpfileExists ));
});

test( 'no gulpfile found', t => {
  t.plan( 1 );
  return isGulp( resolve( __dirname, 'fixtures/no-gulpfile' ))
    .then( gulpfileExists => t.false( gulpfileExists ));
});
