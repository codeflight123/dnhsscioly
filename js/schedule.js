/* ================================================
   SCHEDULE PAGE — schedule.js
   ================================================ */

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

async function loadSchedule() {
  const res  = await fetch('../data/schedule.json');
  return res.json();
}

function formatDate(str) {
  const d = new Date(str + 'T12:00:00');
  return { day: d.getDate(), mon: MONTHS[d.getMonth()], year: d.getFullYear() };
}

function badgeClass(type) {
  return `sbadge sbadge-${type}`;
}

function row(ev) {
  const { day, mon, year } = formatDate(ev.date);
  const past = new Date(ev.date) < new Date();
  return `
    <div class="sf-row fi ${past ? 'past' : ''}">
      <div class="dt">
        <span class="d">${day}</span>
        ${mon}<br>${year}
      </div>
      <div class="sf-info">
        <div class="nm">${ev.name}</div>
        <div class="loc">📍 ${ev.where}</div>
        <div class="note">${ev.note}</div>
      </div>
      <span class="${badgeClass(ev.type)}">${ev.type}</span>
    </div>`;
}

async function init() {
  const events = await loadSchedule();
  const list   = document.getElementById('schedList');
  list.innerHTML = events.map(row).join('');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('vis'), i * 45);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  list.querySelectorAll('.fi').forEach(el => io.observe(el));
}

init();
