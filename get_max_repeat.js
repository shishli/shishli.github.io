var arr = [1,2,3,3,3,4,4,5,5,5,5,5,5,6,6,6,6,45,43,3,2,2,3,23];
getRepeatMax(arr);


/**
 * 获取数组中重复最多的元素
 */
function getRepeatMax(params){
  let result = params.reduce((allObj,currentValue)=>{
    allObj[currentValue] ? allObj[currentValue]++ : allObj[currentValue]=1;
    return allObj;
  },{});
  //对其中元素按次数进行排序（升序或者降序）
  let resArr = [];
  Object.keys(result).map(item=>{
    resArr.push({key:item,value:result[item]});
  })
  console.log(resArr);
  resArr.sort((cur,next)=>{
    return next.value -cur.value;
  })


  //找出其中的最多的元素
  // let dd = new Date().getTime();
  // let value = Object.values(result)
  // let key  = Object.keys(result)
  // let idx = value.indexOf(Math.max(...value))
  // let maxRepeatValue = key[idx]

  
  // return maxRepeatValue
}