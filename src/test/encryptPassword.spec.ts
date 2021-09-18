const encryptPassword = require('../index');


test('adds 1 + 2 to equal 3', () => {
  expect(encryptPassword('I love', '123golaaaw')).toMatch(/\w/);
});