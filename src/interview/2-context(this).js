/**
 * Ключевое слово this в JS по сути реализация динамической области видимости
 * this ссылается на значение объекта который в данный момент вызывает(выполняет) функцию
 */

const carDetails = {
  name: 'Ford Mustang',
  yearBought: 2005,
  getName() {
    return this.name
  },
  isRegistered: true,
}
// В данном случае метод getName возвращает this.name, а this ссылается на carDetails, объект, в котором выполняется getName, который является ее «владельцем».
console.log(carDetails.getName()) // Ford Mustang

var name = 'Ford Ranger'
var getCarName = carDetails.getName

/**
 * Второй console.log выдает Ford Ranger, и это странно.
 * Причина такого поведения заключается в том, что «владельцем» getCarName является объект window.
 * Переменные, объявленные с помощью ключевого слова «var»
 * в глобальной области видимости, записываются в свойства объекта window.
 * this в глобальной области видимости ссылается на объект window (если речь не идет о строгом режиме).
 */

console.log(getCarName()) // Ford Ranger

// Для чего используется метод Function.prototype.apply?
// Apply используется для привязки определенного объекта к значению this вызываемой функции.
const person = {
  name: 'Marko Polo',
}

function greeting(greetingMessage) {
  return `${greetingMessage} ${this.name}`
}

// Этот метод похож на Function.prototype.call. Единственное отличие состоит в том,
// что в apply аргументы передаются в виде массива.
greeting.apply(person, ['Hello']) // Hello Marko Polo

const details = {
  message: 'Hello World!',
}

function getMessage() {
  return this.message
}

getMessage.apply(details) // Hello World!

// Для чего используется метод Function.prototype.call?
// Call используется для привязки определенного объекта к значению this вызываемой функции.
const details = {
  message: 'Hello World!',
}

function getMessage() {
  return this.message
}
// Этот метод похож на Function.prototype.apply. Отличие состоит в том, что в call аргументы передаются через запятую.
getMessage.call(details) // Hello World!

/**
 * В чем разница между методами call и apply?
 * Отличие между call и apply состоит в том, как мы передаем аргументы в вызываемой функции.
 * В apply аргументы передаются в виде массива, в call — через запятую.
 */
