// Parallax Set-Up
let sky = document.getElementById('sky');
  let moon = document.getElementById('moon');
  let back_buildings = document.getElementById('back_buildings');
  let front_buildings = document.getElementById('front_buildings');
  let text = document.getElementById('text');
  let head = document.querySelector('header');

window.addEventListener('scroll', function(){

let value = window.scrollY;
sky.style.left = value * 0.5 + 'px';
moon.style.top = value * 2 + 'px';
back_buildings.style.top = value * 0 + 'px';
front_buildings.style.top = value * 0 + 'px';
text.style.marginLeft = value * 3 + 'px';
head.style.top = - value * 2 + 'px';

})


// Form Set Up


// Quotes
document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#button")) return;

  /*
  Here we send a request to the Joke API
  Then process the response into JSON
  Then pass the data to our renderJoke function.
  */
  fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
    .then((response) => response.json())
    .then((data) => renderJoke(data))
    .catch(() => renderError());
});

function renderJoke(data) {
  // Get text elements
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");
  const error = document.getElementById("error");

  // Hide error and render jokes
  error.innerHTML = "";
  setup.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
}

function renderError() {
  const error = document.getElementById("error");
  error.innerHTML = "Whoops, something went wrong. Please try again later!";
}
