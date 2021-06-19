import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    data:[]
  },
  mutations: {
    GET_CATEGORIES(state,data){
       state.data = data;
    }
  },
  actions: {
    getCategories({commit}){
      return axios.get('https://api.chucknorris.io/jokes/categories')
            .then(res => {
                // this.data = res.data
                commit('GET_CATEGORIES', res.data);
            })
            .catch(err=> console.error(err))
    }
  },
  modules: {
  }
})
