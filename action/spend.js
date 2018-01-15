var printf = require('printf');
module.exports = function(argv){
   var amountList = [];
   var amount;
   // check if length of argv >= 1
   if (argv.length < 1){ 
      console.log("error ! incorrect number of arguments");
      return ;
   } else {
     // remove all non-number and minus-amount items
      for (var i = 0; i < argv.length; i++){
         amount = parseFloat(argv[i]);
         if ((typeof amount === "number") && (amount >= 0)){
            amountList.push(amount);
         }
      } 
   }
   var rate = findCashbackRate(amountList);
   var highest = Math.max(...amountList);
//   console.log(printf('rate is %.2f , highest amount is %d',rate, highest));
   var result;
   if (highest <= 0){
      result='No cashback';
   } else { 
      var cashback = Math.round(highest*rate*100)/100;
      result=printf('Award cashback: %.2f', cashback);
   }
   console.log(result);
   return result;
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
