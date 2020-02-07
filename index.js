function getImage() {
  const name = document.querySelector("#dogname").value;
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then(function(res) {
      return res.json();
    })
    .then(function(res) {
      if (res.code == 404) {
        document.querySelector("#error").style.visibility = "visible";
      } else {
        document.querySelector(
          "#image"
        ).style.backgroundImage = `url(${res.message})`;
        document.querySelector("#error").style.visibility = "hidden";
      }
    });
}

function getRandomImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(res) {
      return res.json();
    })
    .then(function(res) {
      document.querySelector(
        "#image"
      ).style.backgroundImage = `url(${res.message})`;
      document.querySelector("#error").style.visibility = "hidden";
    });
}
