import zeppo from 'zeppo';

function main(){
  let myNum: number = 21;
  console.log(zeppo.decToBin(myNum));
  // Should output 21.
  console.log(zeppo.binToDec(decToBin(myNum)));
}

main();
