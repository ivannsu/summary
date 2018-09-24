```
// Dispatch
this.$store.dispatch('commitToken', data.token)
this.$store.dispatch('commitUserId', data.userId)

// store.js
export default new Vuex.Store({
  state: {
    token: '',
    userId: ''
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    },
    setUserId (state, payload) {
      state.userId = payload
    }
  },
  actions: {
    commitToken ({ commit }, payload) {
      commit('setToken', payload)
    },
    commitUserId ({ commit }, payload) {
      commit('setUserId', payload)
    }
  }
})

// Want to get vuex state
// 1. Technique
computed: {
  token (state) {
    return this.$store.state.token
  },
  userId (state) {
    return this.$store.state.userId
  }
}

// 2. Technique
import {mapState} from 'vuex'

computed: {
  ...mapState({
    token: state => state.token,
    userId: state => state.userId
  })
}
```
