import Vue from 'vue'
import Vuex from 'vuex'
//import app from './modules/app'
import user from './modules/user'
import {SpatiaData} from '../api/Spatia'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  state:{
    pageNum: 1,
    pageSize: 10,

    chooseData:{
      chooseScale: null,
      chooseHours: null,
      chooseDay: null,
    }
  },
  getters:{
    setMeanData(state, dat) {
      state.chooseData = dat;
    },
  },
mutations:{
    setDefaultData(state,data){
      state.chooseData.chooseDay=data.chooseDay;
      state.chooseData.chooseScale=data.chooseScale;
      state.chooseData.chooseHours=data.chooseHours;
    }
},
  actions: {
    defaultmeanData({commit}, loginForm) {
      return new Promise((resolve, reject) => {
        SpatiaData().then(response => {
          resolve()
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    }
  }
})

export default store
