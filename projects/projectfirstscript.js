const button = document.querySelectorAll(".button");
const body = document.querySelector("body");


button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    switch (e.target.id) {
      case "red":
        body.style.backgroundColor = "grey";
        document.getElementById("para").innerHTML="Grey"
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        document.getElementById("para").innerHTML="blue"

        break;
      case "green":
        body.style.backgroundColor = "green";
        document.getElementById("para").innerHTML="green"

        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        document.getElementById("para").innerHTML="yellow"

        break;
      default:
        console.log("No matching color");
    }
  });
});
