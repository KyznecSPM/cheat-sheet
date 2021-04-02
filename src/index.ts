/**
 *
 * @param obj объект
 * @param prop проверяемое название свойства объекта
 * @returns
 */

export function hasOwnProperty<X extends {}, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> {
  return {}.hasOwnProperty.call(obj, prop)
}
