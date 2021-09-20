const jt = require('jest');
const encryptPassword = require('../index.ts');

jt.test('adds 1 + 2 to equal 3', () => {
  jt.expect(encryptPassword('I love', '123golaaaw')).toMatch(/\w/);
});
