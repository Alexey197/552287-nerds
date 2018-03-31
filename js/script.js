
  var link = document.querySelector(".button-write");
  var popup = document.querySelector(" .feedback-modal");
  var close = document.querySelector(".feedback-close");

  link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show")
  });
