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
