var printf = require('printf');
function Money(obj){
   this.currency = obj.currency;
   this.amount = obj.amount;
}

Money.prototype.toString=function(){
   return printf("%.2f %s", this.amount, this.currency);
}

module.exports = Money;
