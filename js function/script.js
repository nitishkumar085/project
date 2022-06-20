const arr1 =[1,3,7,6,8,45,61,8]

function check(arr,val)
{
    var arr2=[];
 console.log(arr)
 var flag = false;
  for(let i = 0;i<arr.length;i++)
    {
   
      if(arr[i]==val)
      {
          flag = true;
           arr2.push(i+1)
      }
    
    }
    
    if(flag==false){
     return -1;
    }

  return arr2;
}


var n= check(arr1,2)

console.log(n)