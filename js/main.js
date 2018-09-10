document.addEventListener('DOMContentLoaded', function(e){
  var signinButton = document.querySelector(".signin");
  var modal = document.querySelector(".modal");
  var closeButton = document.querySelector(".close");
  var submitButton = document.querySelector(".submit");
  var inputs = document.querySelectorAll("input");

  signinButton.addEventListener("click", function() {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function() {
    this.style.display = "none";
  });

  submitButton.addEventListener("click", function() {
    inputs.forEach(function(input) {
      input.classList.add("error");
    });
  });

  inputs.forEach(function(input) {
    input.addEventListener("mouseover", function() {
      input.classList.remove("error");
    });
  });

  modal.childNodes.forEach(function(child) {
    child.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  });
});