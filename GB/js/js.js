// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): Результат сложения чисел 5 и 2 равен 7.

// const num1 = Number.parseFloat(prompt("Введите первое число"));
// const num2 = Number.parseFloat(prompt("Введите второе число"));
// alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`);  

// function sum(number1, number2) {
//     return number1 + number2;
// }


//Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя по имени в консоль. Проверить работоспособность функции.

// const userName = prompt("Введите ваше имя");
// printHello(userName);
// function printHello(name) {
//     console.log(`Привет ${name}`);
// } 

// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.- При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

// const agree = confirm("Вам хорошо живется?");

// if (agree) {
//     alert("Тогда идем к вам!");
// } else {
//     alert("Ну вы дежитесь там!");
// }


// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
 
{/* <script>
let product = "Бананы";
 
if (product == "Мандарины") {
  alert('Мандарины стоят 100 руб/кг.');
} else if (product == "Бананы") {
  alert('Бананы и груши стоят 70 руб/кг.');
} else if (product == "Груши") {
  alert('Бананы и груши стоят 70 руб/кг.');
} else {
  alert('Нет такого продукта.');
}
</script> */}

const product = prompt("Введите фрукты").toLowerCase();

switch (product) {
    case "мандарины":
        alert('Мандарины стоят 100 руб/кг.');
        break;
    case "бананы":
    case "груши":
        alert('Бананы и груши стоят 70 руб/кг.');
        break;
    default:
        alert("Нет такого продукта");
}

