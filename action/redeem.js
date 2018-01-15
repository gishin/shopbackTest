var printf = require('printf');
const site = {
   'www.shopback.sg' : 'https://www.shopback.sg',
   'www.shopback.my' : 'https://www.shopback.my',
   'www.shopback.co.id' : 'https://www.shopback.co.id',
   'www.shopback.com.tw' :  'https://www.shopback.com.tw',
   'www.myshopback.co.th' : 'https://www.myshopback.co.th',
   'www.shopback.com' :  'https://www.shopback.com'
}
module.exports = function(argv){
   var domain = argv[0];
   var result;
   if (!domain){
      result="error! incorrect argument length";
   } else if (!site[domain]){
      result=printf('no such domain: %s', domain);
   } else {
      result=printf('Visit %s to start earning cashback!', site[domain]);
   }
   console.log(result);
   return result;
}
