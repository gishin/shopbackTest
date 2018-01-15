var Money = require('../Money.js');
var printf = require('printf');
const signupBonus = {};

signupBonus['www.shopback.sg'] = new Money({currency : 'SGD', amount: 5});
signupBonus['www.shopback.my'] = new Money({currency : 'MYR', amount: 10});
signupBonus['www.shopback.co.id'] = new Money({currency : 'IDR', amount: 25});
signupBonus['www.shopback.com.tw'] = new Money({currency : 'TWD', amount: 1000});
signupBonus['www.myshopback.co.th'] = new Money({currency : 'THB', amount: 500});
signupBonus['www.myshopback.com'] = new Money({currency : 'USD', amount: 5});


module.exports= function(argv){
   var domain = argv[0];
   var result;
   if (!domain){
      result="error! incorrect argument length";
      return;
   } else if (!signupBonus[domain]){
      result=printf('no such domain: %s', domain);
   } else {
      result=printf('Award bonus: %s', signupBonus[domain].toString());
   }
   console.log(result);
   return result;
}

