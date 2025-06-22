function mincost(arr)
{ 
let cost = 0 ;
while(arr.length > 1){
    arr.sort((a,b)=> a-b);

  let first = arr.shift();
  let second = arr.shift();


  let newRope = first + second;
  cost += newRope;


  arr.push(newRope);

  
}

return cost;

}


document.writeln(mincost(arr));
module.exports=mincost;
