function beepBoop(num)
{
  let result=[]
  for (var i=0 ; i <= num ; i++){
    console.log("num"+num);
    console.log("i" +i);
  
   
    if (i === 1){
      result.push("Beep!");
      //console.log ("result1"+result);
    }
    else if (i === 2){
      result.push("Boop!");
      //console.log ("result1"+result);
    }
    else if (i === 3){
      result.push("Won't you be my neighbor?");
      //console.log ("result1"+result);
    }
    else if(i.toString().includes(3))
    {
      result.push("Won't you be my neighbor?");
    }
    else if(i.toString().includes(2))
    {
      result.push("Boop!");
    }
    else if(i.toString().includes(1))
    {
      result.push("Beep!");
    }
    else{
      result.push(i.toString());
      //console.log ("result0"+result);

    }

  }
  console.log ("result3"+result);

  return result.join();
}
let input =15;
let greet= beepBoop(input);
console.log ("greet"+greet);
