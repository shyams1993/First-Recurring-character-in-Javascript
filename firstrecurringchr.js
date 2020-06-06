function firstOccurrence(arr)
{
    const d = {};
    for (let i=0; i < arr.length ; i++) 
    {
        if(arr[i] in d)
        {
            return arr[i];
            break;
        }
        d[i] = i;
    }
}

arr = [2,1,9,3,3,4,5,6];
console.log(firstOccurrence(arr));