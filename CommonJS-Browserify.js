----------CommonJS+Browserify-----------

//JS1
module.exports = function add(a, b){
  return a+b;
}

//JS2
var add = require("./add");

----------ES6+Webpack2---------- //React????

//js1 exports multiple functions from same file
export const add = (a, b) => a + b;
//js2
import { add } from './add';


//or1 only export one thing. Don't need brackets
export default function add() {
  return a + b;
}
//or2
import add from './add';

//configure webpack like this.
module.exports = {
  entry: './app/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  }
}
