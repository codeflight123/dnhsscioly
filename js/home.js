/* ================================================
   HOME PAGE — home.js
   ================================================ */

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/* ── Events preview (6 cards) ── */
async function loadEventsPreview() {
  const res  = await fetch('data/events.json');
  const data = await res.json();
  const grid = document.getElementById('evPreview');
  if (!grid) return;
  grid.innerHTML = data.slice(0, 6).map(ev => `
    <div class="card ev-card fi fi-d${(data.indexOf(ev) % 5) + 1}">
      <div class="ico">${ev.icon}</div>
      <div class="nm">${ev.name}</div>
      <div class="cat">${ev.category}</div>
      <span class="tag tag-${ev.type}" style="margin-top:auto">${ev.type}</span>
    </div>`
  ).join('');
  reObserve(grid);
}

/* ── Team preview ── */
async function loadTeamPreview() {
  const res  = await fetch('data/team.json');
  const { teams } = await res.json();
  const grid = document.getElementById('teamPreview');
  if (!grid) return;
  grid.innerHTML = teams.map(t => `
    <div class="card t-card fi">
      <div class="t-card-top">
        <div class="t-dot" style="background:${t.color}"></div>
        <div class="t-name" style="color:${t.color}">${t.name}</div>
      </div>
      <div class="t-members">
        ${t.members.map(m => `
          <div class="t-member">
            <div class="t-avatar" style="background:${t.color}">${initials(m.name)}</div>
            <span class="t-member-name">${m.name}</span>
            <span class="t-member-grade">G${m.grade}</span>
          </div>`).join('')}
      </div>
    </div>`
  ).join('');
  reObserve(grid);
}

/* ── Schedule preview (5 upcoming) ── */
async function loadSchedulePreview() {
  const res  = await fetch('data/schedule.json');
  const data = await res.json();
  const list = document.getElementById('schedPreview');
  if (!list) return;
  const upcoming = data.filter(e => new Date(e.date) >= new Date()).slice(0, 5);
  list.innerHTML = upcoming.map(ev => {
    const d = new Date(ev.date + 'T12:00:00');
    return `
      <div class="sched-row fi">
        <div class="sched-date"><span class="dd">${d.getDate()}</span>${MONTHS[d.getMonth()]}<br>${d.getFullYear()}</div>
        <div class="sched-info">
          <div class="ev-nm">${ev.name}</div>
          <div class="ev-loc">📍 ${ev.where}</div>
        </div>
        <span class="sbadge sbadge-${ev.type}">${ev.type}</span>
      </div>`;
  }).join('');
  reObserve(list);
}

function initials(name) {
  return name.split(' ').map(p => p[0]).join('').slice(0,2).toUpperCase();
}

function reObserve(parent) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('vis'), i * 55);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  parent.querySelectorAll('.fi').forEach(el => io.observe(el));
}

/* ── Init ── */
loadEventsPreview();
loadTeamPreview();
loadSchedulePreview();
