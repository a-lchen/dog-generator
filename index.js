function getImage() {
  const name = document.querySelector("#dogname").value;
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then(function(res) {
      return res.json();
    })
    .then(function(res) {
      if (res.code == 404) {
        alert("Woof woof, we couldn't find that dog! Please try again.");
      } else {
        document.querySelector("#image").src = res.message;
      }
    });
}

function getRandomImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(res) {
      return res.json();
    })
    .then(function(res) {
      document.querySelector("#image").src = res.message;
    });
}
