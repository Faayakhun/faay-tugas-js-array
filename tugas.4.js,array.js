let array1 = ["Math", "English", "Programming"];
let array2 = ["Geography", "Spanish", "Programming"];

for (var i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
        document.write(true + " ") 
    } else {
        document.write(false + " ")
    }
}
