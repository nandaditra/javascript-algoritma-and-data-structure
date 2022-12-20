// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const a = [1,3, 2, 7,8, 5]

//pointer from right ke left
for(let i=a.length;i > 0;i--) {
    let Noswap = false
    
    //pointer dari left to right 
    for(let j =0;j<i-1;j++) {
        if(a[j] > a[j+1]) {
            let temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp
            swap = false
        }
        
    }
    
    if(Noswap) break;
}
