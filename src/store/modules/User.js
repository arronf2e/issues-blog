import Cookies from 'js-cookie'
const state = {
  name: 'arron',
  userInfo: '',
  loginFailed: ''
}

const mutations = {
  update_login_state(state, result) {
    if(result.code == 101) {
      state.loginFailed = new Date() // 只是为了组件中watch该值有变化
      return
    }
    state.userInfo = result
    Cookies.set('id', result.objectId)
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
        context.commit('update_login_state', JSON.parse(result))
      },
      error: function(error) {
        context.commit('update_login_state', JSON.parse(error))
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