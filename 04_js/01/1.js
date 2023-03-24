/* function */

function checkAge1(age) {
  return age > 18 ? true : console.log("보호자의 동의를 받으셨나요?");
}

console.log(checkAge1(20));
function checkAge2(age) {
  return age > 18 || console.log("보호자의 동의를 받으셨나요?");
}

console.log(checkAge2(15));

function min(a, b) {
  return a > b ? b : a;
}

function pow(x, n) {
  if (n >= 1) {
    return x ** n;
  } else console.log("자연수적어라");
}
console.log(pow(2, "ㅇ"));
