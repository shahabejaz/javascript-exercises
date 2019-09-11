const ftoc = function(fahrenheit) {
  let temp = Math.round(5/9 * (fahrenheit - 32) * 10)/10;
  return temp;
}

const ctof = function(centigrade) {
  let temp = Math.round(((centigrade * 9/5) + 32) * 10)/10;
  return temp;
}

module.exports = {
  ftoc,
  ctof
}
