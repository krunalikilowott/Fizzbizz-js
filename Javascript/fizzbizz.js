
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById("output").innerHTML += "FizzBuzz<br>";
    } else if (i % 3 === 0) {
        document.getElementById("output").innerHTML += "Fizz<br>";
    } else if (i % 5 === 0) {
        document.getElementById("output").innerHTML += "Buzz<br>";
    } else {
        document.getElementById("output").innerHTML += i + "<br>";
    }
}

        


