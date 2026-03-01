/* ================================================
   EVENTS PAGE — events.js
   ================================================ */

const LOGO = 'https://cdn.discordapp.com/icons/984293547261980672/d703dbd71738bb66a9094845344f2e28.webp?size=128';

async function loadEvents() {
  const res  = await fetch('../data/events.json');
  const data = await res.json();
  return data;
}

function buildCard(ev) {
  return `
    <div class="card ev-full-card fi" data-cat="${ev.short}" data-type="${ev.type}">
      <div class="top">
        <div>
          <div class="nm">${ev.name}</div>
          <div class="cat">${ev.category}</div>
        </div>
        <div class="ico">${ev.icon}</div>
      </div>
      <div class="desc">${ev.desc}</div>
      <div><span class="tag tag-${ev.type}">${ev.type}</span></div>
    </div>`;
}

function buildFilters(events) {
  const cats = ['All', ...new Set(events.map(e => e.short))];
  return cats.map(c =>
    `<button class="filt${c === 'All' ? ' on' : ''}" data-f="${c}">${c}</button>`
  ).join('');
}

async function init() {
  const events = await loadEvents();
  const grid    = document.getElementById('evGrid');
  const filters = document.getElementById('filters');

  filters.innerHTML = buildFilters(events);
  grid.innerHTML = events.map(buildCard).join('');

  // Re-run fade-in observer on new elements
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('vis'), i * 40);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  grid.querySelectorAll('.fi').forEach(el => io.observe(el));

  // Filter logic
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filt');
    if (!btn) return;
    filters.querySelectorAll('.filt').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.f;
    grid.querySelectorAll('.ev-full-card').forEach(card => {
      card.classList.toggle('hidden', f !== 'All' && card.dataset.cat !== f);
    });
  });

  // Stats
  document.getElementById('evCount').textContent = events.length;
}

init();
