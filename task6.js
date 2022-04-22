function findNumber(numArray) {
    var finder = 0;
    var newArray = [];

    for(i in numArray) {
        finder++;
        if (numArray[i] == finder) {
            continue;
        } else {
            newArray.push(finder)
        }
        finder++;
    }
    console.log(newArray)
}

findNumber([1,2,3,4,5,6,7,8,9,10,11,13,15,17]) //[12,14,16]


/*
function findNumber(numArray) {
    var finder = 0;
    var newArray = [];
    var max = 0
    for(j in numArray) {
        if(numArray[j] > max) {
            max = numArray[j]
        }
    }
    var min = max;
    for(n in numArray) {
        if(min > numArray[n]) {
            min = numArray[n];
        }
    }

    for(var i=min; i<=max; i++) {
        if (numArray[i] == finder) {
            continue;
        } else {
            newArray.push(finder)
        }
        finder++;
    }
    console.log(newArray)
    console.log(min)
    console.log(max)
}

findNumber([1,2,3,4,5,6,7,8,9,10,11,13,15]) //12
*/