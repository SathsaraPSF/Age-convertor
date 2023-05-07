console.log("Hi");
const heading = document.querySelectorAll(".topic");

for (var i = 0; i < heading.length; i++) {
  heading[i].style.fontSize = "15px";
  heading[i].style.fontFamily = "Arial";
  heading[i].style.fontWeight = "bold";
}

document.querySelector("#calculate").addEventListener("click", function () {
  const current_year = parseInt(document.querySelector("#current-year").value);
  const birth_year = parseInt(document.querySelector("#birth-year").value);

  if (current_year > 0 && birth_year > 0) {
    const year = current_year - birth_year;
    if (year > 0) {
      document.querySelector(".result").innerHTML =
        "You are " + year + " years old";
      document.querySelector(".result-area").style.backgroundColor = "green";
    } else {
      document.querySelector(".result").innerHTML = "Invalid input";
      document.querySelector(".result-area").style.backgroundColor = "red";
    }

    console.log(current_year);
    console.log(birth_year);
  } else {
    document.querySelector(".result").innerHTML = "Invalid input";
    document.querySelector(".result-area").style.backgroundColor = "red";
  }
});

document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector("#current-year").value = "";
  document.querySelector("#birth-year").value = "";
  document.querySelector(".result").innerHTML = "";
  document.querySelector(".result-area").style.backgroundColor = "white";
});
