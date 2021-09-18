import { createHmac } from 'crypto';

export const encryptPassword = ( password: string, secret:string ): string => {
  const hash = createHmac('sha512', secret)
    .update(password)
    .digest('hex')
  return hash;
}

console.log(encryptPassword('I love you', 'mysecret'));