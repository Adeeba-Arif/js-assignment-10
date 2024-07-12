// smallest number in array

// var array = [5, 6, 7, 3, 2]
// var smallest = array[0]

// for(var i = 0; i < array.length; i++){
//     if(array[i] < smallest){
//       smallest =array[i]
//     }
    
// }
// console.log(smallest)
// average of array

// var array = []
// var average = 0
// var sum = 0
// for (var i = 0; i < 5; i++){
//     var input = +prompt("Enter your numbers :") 
//     array.push(input)
    
// }
// console.log(array)
// for (var i = 0; i < array.length; i++){
//     sum += array[i]
// }
// console.log(sum)
// average = sum / 5
// console.log(average)

// celcius to farenheit

// var userinput = +prompt("Enter the value of temperture")
// var celciusToFarenheit = (9/5 * userinput) + 32.
// console.log(celciusToFarenheit)

// farenheit to celcius

// var userinput = +prompt("Enter the value of temperture")
// var farenheitToCelcius = (userinput - 32) * 5/9
// console.log(farenheitToCelcius)

// reverse the array

var array = []
var rev = []
for (var i = 0; i < 5; i++){
    var userinput = +prompt("Enter the numbers :")
    array.push(userinput)
}

for (var i = array.length-1; i>= 0; i--){
        rev = rev + array[i]
    
    }
    console.log(array, rev)









