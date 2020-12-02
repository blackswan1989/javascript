var numbers = [2, 4, 6, 8, 10];
showArray(numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(numbers[0] + numbers[1]);

numbers.push(sum);
showArray(numbers);

function showArray(arr) {
  var str = "<table><tr>";
  for (var i = 0; i < arr.length; i++) {
    str += "<td>" + arr[i] + "</td>";
  }
  str += "</tr></table>";
  document.write(str);
}
