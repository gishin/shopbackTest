var prog = require('commander');

/*
When there's a new action, simply do the following:
1. Add a new JS file named <new_action>.js under "action" directory
2. Export the default function in the <new_action>.js without specific naming
*/
prog
  .arguments('<myaction>')
  .action((myaction) => {
     var subAction =  require('./action/'+myaction+'.js');
     subAction(process.argv);
   })
  .parse(process.argv);


