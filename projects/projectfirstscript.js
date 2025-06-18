const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

function changebackground(colorname, text){
  body.style.backgroundColor=colorname;
  document.getElementById("para").innerHTML=text;
}
button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    switch (e.target.id) {
      case "red":
        changebackground("red", "red")
        break;
      case "blue":
               changebackground("blue", "blue")

        break;
      case "green":
                changebackground("green", "green")

        break;
      case "yellow":
                changebackground("yellow", "yellow")

        break;
      default:
        console.log("No matching color");
    }
  });
});
