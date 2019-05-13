import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
//import SpatiaData from '../api/Spatia'
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
    /*
        async defaultmeanData(context,listData){
          let response = await Axios.get("/home", listData);
          if (response.data.success == true) {
            context.commit("setDefaultData", response.data);
          }
          /!*return new Promise((resolve, reject) => {
            SpatiaData(listData.chooseDay,listData.chooseScale,listData.chooseHours).then(response => {

            }).catch(error => {
              reject(error)
            })
          })*!/


        }*/
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
