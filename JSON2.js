let arr1 = ["car", "bike", "train"]
let arr2 = ["plane", "ship"]

function modifyAndMerge(){
  let res = arr1.splice(1,1,"Bus","Scooter")
  console.log(res)
  console.log(arr1)

  let res2 = arr1 + " " +arr2;
  console.log(res2)
}

modifyAndMerge(arr1);