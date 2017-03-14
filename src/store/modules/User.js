const state = {
  name: 'arron',
  loginState: ''
}

const mutations = {
  update_login_state(state, result) {
    state.loginState = result
  }
}
const actions = {
  signUp(state, res) {
    Bmob.Cloud.run('SignUp', res, {
      success: function(result) {
        
      },
      error: function(error) {
        
      }
    })
  },
  signIn(context, res) {
    Bmob.Cloud.run('SignIn', res, {
      success: function(result) {
        context.commit('update_login_state', result)
      },
      error: function(error) {
        context.commit('update_login_state', error)
      }
    })
  }
}

const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}