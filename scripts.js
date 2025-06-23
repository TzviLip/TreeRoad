// Smooth scroll nav
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({behavior:'smooth'});
  });
});

// Collapse mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.remove('show');
    document.body.style.overflow = ''; // re-enable scroll
  });
});

// FAQ accordion
document.querySelectorAll('.accordion button').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    const panel = btn.nextElementSibling;
    panel.style.maxHeight = expanded ? null : panel.scrollHeight + 'px';
  });
});

// Feedback form
const form = document.getElementById('feedback-form');
  form.addEventListener("submit", async e => {
	for (let [k, v] of new FormData(e.target)) console.log(`${k}: ${v}`);
    e.preventDefault();
    const res = await fetch(e.target.action, {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      e.target.reset();
      document.getElementById("thanks").style.display = "block";
    } else {
	console.log(await res.text());
      alert("There was a problem.");
    }
  });
  
  const hero = document.querySelector('.hero');
const images = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpg',
  'images/hero4.jpg'
];

// Create slide layers
images.forEach((src, i) => {
  const slide = document.createElement('div');
  slide.classList.add('hero-slide');
  if (i === 0) slide.classList.add('active');
  slide.style.backgroundImage = `url('${src}')`;
  hero.appendChild(slide);
});

let current = 0;
const slides = document.querySelectorAll('.hero-slide');

//Weather
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s); js.id=id;
    js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');	

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('show');
  document.body.style.overflow = links.classList.contains('show') ? 'hidden' : '';
});


// Map
function initLeafletMap() {
  const map = L.map('leaflet-map').setView([-33.951, 18.377], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const locations = [
    { name: 'Your Airbnb', lat: -33.951, lng: 18.377 },
    { name: 'Camps Bay Beach', lat: -33.953, lng: 18.377 },
    { name: 'Café Caprice', lat: -33.956, lng: 18.403 },
    { name: 'Table Mountain Cable Car', lat: -33.948, lng: 18.403 },
    { name: 'Theatre on the Bay', lat: -33.9518, lng: 18.378 },
    { name: 'Zeitz MOCAA', lat: -33.907, lng: 18.420 }
  ];

  locations.forEach(loc => {
    L.marker([loc.lat, loc.lng])
      .addTo(map)
      .bindPopup(`<strong>${loc.name}</strong>`);
  });
}

// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', initLeafletMap);