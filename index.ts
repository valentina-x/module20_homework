// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> =
  document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeBtn: HTMLCollectionOf<Element> =
  document.getElementsByClassName("close");
for (let i = 0; i < closeBtn.length; i++) {
	closeBtn[i].addEventListener("click", (event) => {
    let target: HTMLElement = event.target as HTMLElement;
    let div: HTMLElement = target.parentElement as HTMLElement;
    div.style.display = "none";
  });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLElement = document.querySelector("ul") as HTMLUListElement;
list.addEventListener(
  "click",
  function (ev) {
    let target: HTMLElement = ev.target as HTMLElement;
    if (target.tagName === "LI") {
      target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement(): void {
  const li: HTMLElement = document.createElement("li");
  const inputValue: string = (
    document.getElementById("myInput") as HTMLInputElement
  ).value;
  const t: Text = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    (document.getElementById("myUL") as HTMLUListElement).appendChild(li);
  }
  (document.getElementById("myInput") as HTMLInputElement).value = "";

  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", (event) => {
		let target: HTMLElement = event.target as HTMLElement;
		let div: HTMLElement = target.parentElement as HTMLElement;
		div.style.display = "none";
    });
  }
}
