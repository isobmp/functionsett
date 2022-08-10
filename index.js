/*
███ █ █ █ █ ███ ███ ███ ███ █ █ ███ ███ ███ ███
█   █ █ ███ █    █   █  █ █ ███ █▄  █▄   █   █
██  █ █ █ █ █    █   █  █ █ █ █   █ █    █   █
█   ███ █ █ ███  █  ███ ███ █ █ █▀  ███  █   █
                                    made by bmp
*/
const pi = Math.PI
const isNumber = negate(isNaN); // checks if variable is not a number, uses `negate()` function; line 46
const colors = {               // some very basic colors, i did not code this
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  // foreground, text colors
  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    crimson: "\x1b[38m"
  },
  // background colors
  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    crimson: "\x1b[48m"
  }
};
function findCircularArea(rad){   // finds the area of a circle
  return pi * rad * rad
}
function negate(f) {         // negate. duh
    return function (i) {
        return !f(i);
    };
}
var isPrime = function (number) {
    var divisor = parseInt(number / 2, 10);  /* isPrime(10) // => true */
    var prime = true;                        /* isPrime(3) // => false */
    while (divisor > 1) {
        if (number % divisor === 0) {
            prime = false;
            divisor = 0;
        } else {
            divisor -= 1;
        }
    }
    return prime === true;
};
function add(n,d) {
  if (isNumber(n,d)){
    return n+d
  } else {
    console.log(colors.fg.red + "%cError: Input for function `add()` is not a number.", "color: #eee" + '\n')
  }
}
function multiply(n,d){
  if (isNumber(n,d)){
    return n*d
  } else {
    console.log(colors.fg.red + "%cError: Input for function `multiply()` is not a number.", "color: #eee" + '\n')
  }
}
function divide(n,d) {
  if (isNumber(n,d)){
    return n/d
  } else {
    console.log(colors.fg.red + "%cError: Input for function `divide()` is not a number.", "color: #eee" + '\n')
  }
}
