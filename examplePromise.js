function getTempCallBack(location,callBack) {


  callBack(undefined,78);
  callBack('City Not Found');



}


getTempCallBack('Philadelphia',function (err,temp) {

  if (err) {
    console.log('error',err);
  }else{
    console.log('success',temp);
  }

});

function getTempPromise(location) {
  return new Promise(function(resolve,reject){
    resolve(79);
    reject('City not found');
  });

}

getTempPromise('Philadelphia').then(function(temp){
  console.log('promise success',temp);

},function(err){

  console.log('promise',err);

})
