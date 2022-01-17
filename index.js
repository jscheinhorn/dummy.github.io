let header1 = document.getElementsByTagName("h1");
console.log(header1[0].tagName)
header1[0].addEventListener("click", changeColor)

function changeColor() {
console.log(header1[0].style.color)
  header1[0].style.color = header1[0].style.color === "blue" ? "purple" : "blue"
}
