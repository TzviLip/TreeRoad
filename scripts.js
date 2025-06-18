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