import md5 from 'md5';

const hashGravatar = (email) => {
   let hash = md5(email);
   let hashUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
   return hashUrl;
}

export default hashGravatar;
