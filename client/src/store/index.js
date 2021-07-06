import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    photo: [],
    albums: [],
    album: []
  },
  mutations,
  getters: {
    filteredAlbums: (state) => (val) => {
      return state.photos.filter(photos => {return val.toLowerCase().split(' ').every(v => photos.title.toLowerCase().includes(v))})
    }
  },
  actions,
  modules: {
  }
})
