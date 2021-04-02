import { hasOwnProperty } from './index'

test('check if object has property name', () => {
  const testObj = { test: 'test' }
  expect(hasOwnProperty(testObj, 'test')).toBe(true)
  expect(hasOwnProperty(testObj, 'any')).toBe(false)
})
