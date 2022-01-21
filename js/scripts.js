function beepBoop(num)
{
  let result=[]
  for (var i=0 ; i <= num ; i++){
    console.log("num"+num);
    console.log("i" +i);
  
    if(i === 0){
        i.toString();
      //result.concat(i.toString());
      result.push(i.toString());
      console.log ("result0"+result);

    }
    if (i === 1){
      //result.concat("beep");
      //result =result +"beep";
      result.push("beep");
      console.log ("result1"+result);
    }
  }
  console.log ("result3"+result);

  return result.join();
}
let input =1;
let greet= beepBoop(input);
console.log ("greet"+greet);
