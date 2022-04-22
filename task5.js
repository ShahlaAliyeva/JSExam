function isEqual (arr, num) {
    var newArray = [];
    for(var i=0; i<arr.length; i++) {
        for (var j=arr.length-1; j>=0; j--) {
            if((arr[i] + arr[j] == num) && (arr[i] != arr[j])) {
                newArray.push(arr[i])
            }
        }
    }
    console.log(newArray)
}

var arr = [1,2,3,4,5,6,7];
var num = 13;

isEqual(arr, num)