import request from '@/utils/request'
export function SpatiaData(day,scale,hours) {
  return request({
    url:'/spatial/hourly',
    method:'get',
    //params:params  //和Data得区别
    data:{
      day,
      scale,
      hours
    }
  })
}
export function MainHome(day,scale,hours) {
  return request({
    url:'/home',
    method:'get',
    //params:params  //和Data得区别
    data:{
      day,
      scale,
      hours
    }
  })
}


/*export const getAdminInfo = () => fetch('/admin/info');*/


