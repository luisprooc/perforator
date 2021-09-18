const { createHmac } = require('crypto');

const encryptPassword = ( password: string, secret: string ): string => {

  if(!/\d{3}\w{7}/.test(secret)) throw new Error(`Secret must be`);

  const hash = createHmac('sha512', secret)
    .update(password)
    .digest('hex')
  return hash;
}


module.exports = encryptPassword;