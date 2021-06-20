import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    data:[],
    currentIndex:0,
    currentCategoryName: 'animal',
    categoriesToShow: 6,
    jokes:[]
  },
  // getters: {
  //   jokeCategories: state => {
  //     return state.jokes.map(result => {
  //        console.log(result.categories)
  //     })
  //   }
  // },
  mutations: {
    GET_CATEGORIES(state,data){
       state.data = data; 
    },
    GET_JOKE(state,jokes){
      state.jokes = jokes
    },
    CURRENT_CATEGORY_INDEX(state,index) {
      state.currentIndex = index;
      state.currentCategoryName = state.data[index] 
    },
   
  },
  actions: {
    getCategories({commit}){
      return axios.get('https://api.chucknorris.io/jokes/categories')
            .then(res => {
                // this.data = res.data
                commit('GET_CATEGORIES', res.data);
            })
            .catch(err=> console.error(err))
    },
    get__current__category({commit},index){
       commit('CURRENT_CATEGORY_INDEX',index)
    },
    getJoke({commit}){
      return axios.get(`https://api.chucknorris.io/jokes/search?query=all`)
            .then(res => {
                // this.data = res.data
                commit('GET_JOKE', res.data.result);
            })
            .catch(err=> console.error(err))
    }
  },
  modules: {
  }
})
