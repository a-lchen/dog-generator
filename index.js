document
  .querySelector("#image")
  .addEventListener("animationend", resetAnimation);

function resetAnimation() {
  document.querySelector("#image").classList.remove("animated");
  document.querySelector("#image").classList.remove("fadeIn");
}

function getImage() {
  const name = document.querySelector("#dogname").value;
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((res) => res.json())
    .then(function(res) {
      if (res.code == 404) {
        document.querySelector("#error").style.visibility = "visible";
      } else {
        document.querySelector("#image").style.backgroundImage = `url(${res.message})`;
        document.querySelector("#image").classList.add("animated");
        document.querySelector("#image").classList.add("fadeIn");
        document.querySelector("#image").classList.add("delay-1s");
        document.querySelector("#error").style.visibility = "hidden";
      }
    });
}

function getRandomImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(function(res) {
      document.querySelector("#image").style.backgroundImage = `url(${res.message})`;
      document.querySelector("#image").classList.add("animated");
      document.querySelector("#image").classList.add("fadeIn");
      document.querySelector("#image").classList.add("delay-1s");
      document.querySelector("#error").style.visibility = "hidden";
    });
}
