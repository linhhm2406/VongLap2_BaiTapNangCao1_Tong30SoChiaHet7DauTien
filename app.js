let i=1;
let sum=0;
let count=0;

while (count!==30) {
    if (i%7===0){
        sum+=i;
        count++;
    }
    i++
}
document.write('Tong cua 30 chia het cho 7 dau tien la ' + sum);