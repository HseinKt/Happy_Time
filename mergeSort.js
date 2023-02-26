const smallBox = document.getElementById("smallBox");

function merge_Arrays(left_sub_array, right_sub_array) {
    let array = []
    while (left_sub_array.length && right_sub_array.length) {
       if (left_sub_array[0] < right_sub_array[0]) {
          array.push(left_sub_array.shift())
       } else {
          array.push(right_sub_array.shift())
       }
    }
    return [ ...array, ...left_sub_array, ...right_sub_array ]
}

function merge_sort(Array) {
    const middle_index = Array.length / 2
    if(Array.length < 2) {
       return Array
    }
    const left_sub_array = Array.splice(0, middle_index)
    return merge_Arrays(merge_sort(left_sub_array),merge_sort(Array))
}

var Val = prompt("please add 10 numbers  : ", "39 28 44 4 10 83 11");
var Array = Val.split(" ").map(function(item) {
    return parseInt(item, 10);
});
smallBox.innerHTML =  merge_sort(Array)

console.log("You entered : " + merge_sort(Array));