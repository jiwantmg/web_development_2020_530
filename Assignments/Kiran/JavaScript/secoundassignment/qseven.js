export default function quesSeven(){
    let arr= [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    console.log(arr);
    let maxFreq = 1;
    let iteam;
    for(let i = 0; i < arr.length-1; i++)
    {
        let count = 0;
        for(let j = i; j < arr.length; j++)
        {
            if(arr[i] == arr[j])
            {
                count ++;
            }
            if(count > maxFreq)
            {
                maxFreq = count;
                iteam = arr[i];
            }
        }
    }
    console.log(iteam +" ( " + maxFreq + " times)");
}