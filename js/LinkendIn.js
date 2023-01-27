var button = document.querySelector("nav button");
var list = document.querySelector("nav ul");

button.addEventListener("click", function() {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
