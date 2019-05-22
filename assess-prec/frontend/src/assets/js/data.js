//获取240条数组的数组
exports.newarr=function () {
  var newarr1 = [];
  function getRandom(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return (Math.random() * minNum).toFixed(3);
        break;
      case 2:
        return (Math.random() * (maxNum - minNum + 1) + minNum).toFixed(3);
        break;
      default:
        return 0;
        break;
    }
  }
  for (var i = 0; i <240; i++) {
    xx=getRandom(0, 1)
    newarr1.push(xx);
  }
  return newarr1;
}
//要做减法的两个数组，第二个参数是作为标准的数组,长度240
exports.subarr=function (arr1,starr) {
var subarr=[];
  for(var i=0;i<arr1.length;i++){
    subarr.push((arr1[i]-starr[i]).toFixed(3))
  };
  //console.log("subarr"+subarr)
  return subarr;
}
exports.sumarr=function (sub) {
  var sumarr=[];
  var j=0;
  for(var i=0;i<=sub.length;i++){
    j++;
    if(i%24 == 0){
      sumarr =sub.slice(i-24,j-1);//0-23截取一次
    }
  }
  return sumarr
}


//将做完减法的数组（subarr)作为参数，求每24个数的平均数生成一个新的数组,长度为10
exports.avgarr=function (sub) {
  var avgarr=[];
  var j=0;
  for(var i=0;i<=sub.length;i++){
    j++;
    if(i%24 == 0){
      var sum =sub.slice(i-24,j-1);//0-23截取一次
      var newsum=eval(sum.join("+"))
      if(newsum==null){
        newsum=0;
        console.log(newsum)
      }

      avgarr.push(newsum)
    }
  }
  return avgarr
}
//求一个数组中所有数的平均数
//var sum = eval(averages.join("+"));
//截取一个数组n-x位置为一个新数组
/*  var sum =newm2.slice(0,10)
  var sum2 =newm2.slice(10,20)*/
// 一个数组长度是240，对数组中的数每10个求一次均值，将求出的平均值放到一个新数组里，输出新数组
//方法里加参数，参数为原数组，以及每多少个为一个新数组
// function getNewAvgArr(原数组,截取个数){





