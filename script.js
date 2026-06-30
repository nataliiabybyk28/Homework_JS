/*1. Запросите у пользователя firstName и lastName. Выведите через alert строку: Full name: <firstName> <lastName> (используйте шаблонную строку).*/

const firstName = prompt("Please enter your name");
const lastName = prompt("Please enter your last name");
alert(`Your full name: ${firstName} ${lastName}`);

/*2. Запросите у пользователя birthYear. Задайте в коде константу CURRENT_YEAR. Посчитайте возраст и выведите через alert: Age: <age> */

const birthYear = Number(prompt("Please enter your birth year"));
const CURRENT_YEAR = 2026;
const age = CURRENT_YEAR - birthYear;
alert(`Your age: ${age}`);

/*3. Запросите у пользователя a и b. Выведите через alert:
результат a + b (без преобразования)
результат Number(a) + Number(b) (с преобразованием) */

const a = prompt("Please enter first number");
const b = prompt("Please enter second number");
alert(`Your enter a + b like String: ${a + b} `);
alert(`Your enter a + b like Number : ${Number(a) + Number(b)}`);

/*4. Запросите у пользователя n. Выведите через alert true, если n чётное, иначе false. Используйте % и строгое сравнение === */

const n = Number(prompt("Please enter any number "));
alert(`Is this number even (%2)? - answer: ${n % 2 === 0}`);

/*5. Запросите у пользователя n. Выведите через alert true, если n делится на 3 без остатка, иначе false. Используйте % и ===. */

const yourAnyNumber = Number(prompt("Please enter any number"));
alert(
  `Is this number divisible(/) by 3? - answer:  ${yourAnyNumber % 3 === 0}`,
);

/*6. Запросите у пользователя price и discountPercent. Посчитайте цену со скидкой и выведите через alert итоговую сумму. (Например, скидка 15 означает минус 15%.) */

const price = Number(prompt("Please enter the price"));
const discountPercent = Number(prompt("Please enter the discount percent(%)"));
const discount = (price * discountPercent) / 100;
const finalPrice = price - discount;
alert(`Discount: ${discount}`);
alert(`Final price: ${finalPrice}`);

/*7. Запросите у пользователя radius. Задайте константу PI. Посчитайте длину окружности L = 2 * PI * radius и выведите через alert. */

const radius = Number(prompt("Please enter radius"));
const PI = 3.14;
const L = 2 * PI * radius;
alert(`L circle =${L}`);

/*8. Запросите у пользователя width и height. Посчитайте площадь прямоугольника и выведите через alert. Затем выведите через alert true, если площадь больше 100, иначе false (используйте >)*/

const width = Number(prompt("Please enter width"));
const height = Number(prompt("Please enter height"));
const area = width * height;
alert(`Area: ${area}`);
alert(`Area > 100: ${area > 100}`);

/*9. Запросите у пользователя целое число n (трёхзначное). Выведите через alert сумму его цифр. Используйте % и деление /. */

const threeDigitNumber = Number(
  prompt("Enter a three-digit number ( example: 123) "),
);
const Hunders = Math.floor(n / 100);
const Tens = Math.floor((n % 100) / 10);
const Ones = n % 10;
alert(`Sum : ${Hunders + Tens + Ones}`);

/*10. Запросите у пользователя целое число n (трёхзначное). Выведите через alert число, записанное задом наперёд. Используйте % и деление, строки не используйте. */
const threeNumber = Number(prompt("Please enter a three-digit number "));
const ones = n % 10;
const tens = Math.floor((n % 100) / 10);
const hunders = Math.floor(n / 100);
const reversed = ones * 100 + tens * 10 + hunders;
alert(`reversed: ${reversed}`);
