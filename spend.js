var printf = require('printf');
module.exports = function(argv){
   var amountList = [];
   var amount;
   // check if length of argv >=3
   if (argv.length < 3){ 
      console.log("error ! incorrect number of arguments");
      return ;
   } else {
     // remove all non-number and minus-amount items
      for (var i = 3; i <= argv.length; i++){
         amount = parseFloat(argv[i]);
         if ((typeof amount === "number") && (amount >= 0)){
            amountList.push(amount);
         }
      } 
   }
   var rate = findCashbackRate(amountList);
   var highest = Math.max(...amountList);
  // console.log(printf('rate is %.2f , highest amount is %d',rate, highest));
   if (highest <= 0){
      console.log('No cashback');
   } else { 
      var cashback = Math.round(highest*rate*100)/100;
      console.log('Award cashback: %s', printf('%.2f', cashback));
   }
}



function findCashbackRate(paidlist){
   var lowest = Math.min(...paidlist);
   if (lowest >= 50){ 
      return 0.2;
   } else if (lowest >= 20){
      return 0.15;
   } else if (lowest >= 10){
      return 0.1;
   } else {
      return 0.05;
   }
}
