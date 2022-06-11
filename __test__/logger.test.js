'use strict';

const logger = require('../src/middleware/logger');

describe('Logger middleware check', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });
  test('Should log the request', () => {
    req.method = 'GET';
    req.path = '/student';
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
});
