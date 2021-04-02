import { hasOwnProperty, makeKey } from './index'

test('check object has key', () => {
  const testObj = { test: 'test' }
  expect(hasOwnProperty(testObj, 'test')).toBe(true)
  expect(hasOwnProperty(testObj, 'any')).toBe(false)
})

test('check addition string', () => {
  const stringA = `namespace` as const
  const stringB = `moduleName` as const
  expect(makeKey(stringA, stringB)).toBe(`namespace-moduleName`)
})
