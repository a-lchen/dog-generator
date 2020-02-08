document.querySelector("#dog-name").addEventListener("keydown", onKeyPress);

function onKeyPress(event) {
  if (event.key === "Enter") {
    getImage();
  }
}

function getSpecificImage() {
  const name = document.querySelector("#dog-name").value;
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((res) => res.json())
    .then(function(res) {
      if (res.status === "error") {
        alert("Woof woof, we couldn't find that dog! Please try again.");
      } else {
        document.querySelector("#dog-image").style.backgroundImage = `url(${res.message})`;
      }
    });
}

function getRandomImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(function(res) {
      document.querySelector("#dog-image").style.backgroundImage = `url(${res.message})`;
    });
}
