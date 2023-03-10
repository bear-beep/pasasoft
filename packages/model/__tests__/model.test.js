'use strict';

const model = require('..');
const assert = require('assert').strict;

assert.strictEqual(model(), 'Hello from model');
console.info('model tests passed');
