// Smooth scroll nav
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({behavior:'smooth'});
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

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 6000);

		const weatherBox = document.getElementById('weather-box');
		async function loadWeather() {
		  const apiKey = 'API-KEY';
		  const lat = -33.951;
		  const lon = 18.377;
		  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

		  try {
			const res = await fetch(url);
			const data = await res.json();
			const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
			const { speed, deg } = data.wind;
			const desc = data.weather[0].description;
			const icon = data.weather[0].icon;

			weatherBox.innerHTML = `
			  <h3><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}"> ${Math.round(temp)}°C – ${desc}</h3>
			  <ul>
				<li><strong>Feels like:</strong> ${Math.round(feels_like)}°C</li>
				<li><strong>High / Low:</strong> ${Math.round(temp_max)}°C / ${Math.round(temp_min)}°C</li>
				<li><strong>Humidity:</strong> ${humidity}%</li>
				<li><strong>Wind:</strong> ${Math.round(speed * 3.6)} km/h (${deg}°)</li>
			  </ul>
			`;
		  } catch (err) {
			weatherBox.textContent = 'Weather data unavailable.';
		  }
		}

		loadWeather();
		
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});
