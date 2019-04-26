var el = document.getElementById("image-modal");
var dialog;

if (el) {
  dialog = new A11yDialog(el);
}

var elements = document.querySelectorAll("[data-dialog-trigger]");
elements.forEach(function(item, index) {
  item.addEventListener("click", function(event) {
    event.preventDefault();
    var target = event.currentTarget;

    var image = el.querySelector(".dialog__image");
    image.src = "";
    image.src = target.getAttribute("href");
    image.setAttribute("alt", target.getAttribute("data-alt"));

    var caption = el.querySelector(".dialog__title");
    caption.textContent = target.getAttribute("data-title");

    dialog.show();
  });
});
