import { futurama } from './module(closure)'

describe('JS closure', () => {
  it('Closure name', () => {
    expect(futurama.message).toEqual('Welcome to the world of tomorrow, Philip J. Fry!')
  })
})
