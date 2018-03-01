const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--,
  setcrement: state => {
    state.count = 0
  }
}

export default mutations
