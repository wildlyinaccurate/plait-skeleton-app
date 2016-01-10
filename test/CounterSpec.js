import { State } from 'plait'
import * as Counter from '../src/Counter'

describe('Counter', () => {

  it('should increase the count by 1 on an INCREMENT action', () => {
    var state = new State({ count: 0 })
    const action = { type: 'INCREMENT' }

    state = Counter.update(state, action)
    expect(state.get('count')).toBe(1)

    state = Counter.update(state, action)
    expect(state.get('count')).toBe(2)
  })

  it('should decrease the count by 1 on a DECREMENT action', () => {
    var state = new State(Counter.init())
    const action = { type: 'DECREMENT' }

    state = Counter.update(state, action)
    expect(state.get('count')).toBe(-1)

    state = Counter.update(state, action)
    expect(state.get('count')).toBe(-2)
  })

})
