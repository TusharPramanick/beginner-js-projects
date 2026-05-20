let Lists = document.getElementsByClassName("list");
let leftBox = document.querySelector(".left-box");
let rightBox = document.querySelector(".right-box");
let selectedElement = null;

for (let list of Lists) {
  list.addEventListener("dragstart", function () {
    selectedElement = this;
  });
}

// Right Box

rightBox.addEventListener("dragover", function (event) {
  event.preventDefault();
});

rightBox.addEventListener("drop", function () {
  if (selectedElement) {
    rightBox.appendChild(selectedElement);
    selectedElement = null;
  }
});

// Left Box

leftBox.addEventListener("dragover", function (event) {
  event.preventDefault();
});

leftBox.addEventListener("drop", function () {
  if (selectedElement) {
    leftBox.appendChild(selectedElement);
    selectedElement = null;
  }
});
