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
        d[arr[i]] = arr[i];
    }
}

arr = [333,341,356,333];
console.log(firstOccurrence(arr));
