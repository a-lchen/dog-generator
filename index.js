function getSpecificImage() {
  const name = document.querySelector("#dog-name").value;
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((res) => res.json())
    .then(function(res) {
      if (res.status === "error") {
        document.querySelector("#error").style.visibility = "visible";
      } else {
        document.querySelector("#dog-image").style.backgroundImage = `url(${res.message})`;
        document.querySelector("#error").style.visibility = "hidden";
      }
    });
}

function getRandomImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(function(res) {
      document.querySelector("#dog-image").style.backgroundImage = `url(${res.message})`;
      document.querySelector("#error").style.visibility = "hidden";
    });
}
