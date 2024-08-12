let overLay = document.querySelector(".overlay");
let popupBox = document.querySelector(".popupbox");
let bookname = document.getElementById("book");
let authorname = document.getElementById("author");
let description = document.getElementById("des");
let actualbox = document.querySelector(".actual-box");

function submitting() {
  let bookBox = document.createElement("div");
  bookBox.setAttribute("id", "bookbox");

  let head1 = document.createElement("h1");
  head1.innerHTML = bookname.value;
  bookBox.append(head1);

  let head6 = document.createElement("h6");
  head6.innerHTML = authorname.value;
  bookBox.append(head6);

  let para = document.createElement("p");
  para.innerHTML = description.value;
  bookBox.append(para);

  let delbtn = document.createElement("button");
  delbtn.innerHTML = "Delete";
  delbtn.addEventListener("click", deletingbox);
  bookBox.append(delbtn);

  overLay.style.display = "none";
  popupBox.style.display = "none";
  actualbox.append(bookBox);
  document.body.append(actualbox);

  bookname.value = " ";
  authorname.value = " ";
  description.value = " ";
}
function deletingbox(event) {
  event.target.parentElement.remove();
}

function add() {
  overLay.style.display = "block";
  popupBox.style.display = "block";
}
