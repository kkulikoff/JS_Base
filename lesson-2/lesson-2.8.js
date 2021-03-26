// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.
//1
function power(val, pow) {
	if (pow != 1) {
        return val *= power(val,pow - 1);
      } 
    else {
        return val;
      }
}

console.log(power(3, 3));  // 27



//2
function power_1(val, pow) {
    return (pow == 1) ? val : (val * power_1(val, pow - 1));
  }

console.log(power_1(3, 3));  // 27