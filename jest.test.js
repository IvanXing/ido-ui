test('test add', () => {
  expect(2+2).toBe(4)
  expect(2+2).not.toBe(5)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  expect(4).toBeGreaterThan(2)
  expect(5).toBeLessThan(6)
})

test('test object', () => {
  expect({ name: 'paul' }).toEqual( {name: 'paul'} )
})