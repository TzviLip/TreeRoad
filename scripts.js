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
form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  document.getElementById('thanks').style.display = 'block';
});
