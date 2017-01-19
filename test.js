import path from 'path';
import test from 'ava';
import { isGulp } from './index.js';

test( 'empty path given', async t => {
  const error = await t.throws(
    () => {
      isGulp( '' );
    },
    Error
  );

  t.is( error.message, 'No path specified.' );
});

test( 'gulpfile found', async t => {
  t.true( await isGulp( path.resolve( 'fixtures/gulpfile' )));
});

test( 'no gulpfile found', async t => {
  t.false( await isGulp( path.resolve( 'fixtures/no-gulpfile' )));
});
