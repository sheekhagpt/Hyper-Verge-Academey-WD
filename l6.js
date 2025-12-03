// Write a while loop that prints numbers from 1 to 5, but skips 2 using continue.

let i = 1
while(i<=5){
  if(i===2){
    i++
    continue;
  }
  console.log(i)
  i++
}