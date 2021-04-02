/**
 * Проверяет наличие свойства объекта
 * @param obj объект
 * @param prop проверяемое название свойства объекта
 * @returns boolean
 */

export function hasOwnProperty<X extends {}, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> {
  return {}.hasOwnProperty.call(obj, prop)
}

/**
 * Создаем новую строку (компилятор TS видит возвращаемое значение как String Literal Types)
 * @param namespace
 * @param name
 * @returns составная шаблонная строка namespace-name
 */

export function makeKey<NS extends string, N extends string>(namespace: NS, name: N): `${NS}-${N}` {
  return `${namespace}-${name}` as `${NS}-${N}`
}
