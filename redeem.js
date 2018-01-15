const site = {
   'www.shopback.sg' : 'https://www.shopback.sg',
   'www.shopback.my' : 'https://www.shopback.my',
   'www.shopback.co.id' : 'https://www.shopback.co.id',
   'www.shopback.com.tw' :  'https://www.shopback.com.tw',
   'www.myshopback.co.th' : 'https://www.myshopback.co.th',
   'www.shopback.com' :  'https://www.shopback.com'
}
module.exports = function(argv){
   var domain = argv[3];
   if (!domain){
      console.log("error! incorrect argument length");
      return ;
   } else if (!site[domain]){
      console.log("no such domain: %s", domain);
   } else {
      console.log("Visit %s to start earning cashback!", site[domain]);
   }
}
