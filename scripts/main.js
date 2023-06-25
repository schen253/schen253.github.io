const img = document.querySelector('img');

img.onclick = () => {
    const src = img.getAttribute('src');
    if (src === 'images/test.png') {
        img.setAttribute('src', 'images/test2.jpg');
    } else {
        img.setAttribute('src', 'images/test.png');
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
    
  }
//   localStorage.clear();
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };