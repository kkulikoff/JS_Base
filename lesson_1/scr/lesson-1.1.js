let tempC = +prompt('Введите температуру в градусах Цельсия: ');
let tempF = (9 / 5) * tempC + 32;
tempF = tempF.toFixed(1);
alert('Конвертация температуры:\n' + tempC + ' °C = ' + tempF + ' F');
document.getElementById("tempC").innerHTML = tempC;
document.getElementById("tempF").innerHTML = tempF;