Math.round
let temperature = parseInt(prompt("Введите температуру в Цельсиях"));
alert(`Цельсия: ${temperature} \Фаренгейт: ${Math.round((9 / 5) * temperature + 32)}`);