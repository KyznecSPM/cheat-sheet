/**
 * Пример замыкания в JS или паттерна модуль.
 * @param name
 * @returns
 */

export const moduleFuturama = (name: string) => {
  const message = `Welcome to the world of tomorrow, ${name}!`
  return {
    message,
    greeting: () => console.log(message),
  }
}

export const futurama = moduleFuturama('Philip J. Fry')

// ф-я futurama имеет доступ к лексической области видимости функции moduleFuturama
// futurama.greeting()
