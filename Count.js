let str="MOHAMMEDHARISH";
let count=0;
for (let ch of str){
    if("aeiouAEIOU".includes(ch))
    {
        count++;
    }
        
}
console.log(count);