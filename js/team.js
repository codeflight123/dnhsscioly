/* ================================================
   TEAM PAGE — team.js
   ================================================ */

async function loadTeam() {
  const res  = await fetch('../data/team.json');
  const data = await res.json();
  return data;
}

function initials(name) {
  return name.split(' ').map(p => p[0]).join('').slice(0,2).toUpperCase();
}

function memberCard(m, color) {
  return `
    <div class="tf-member">
      <div class="tf-av" style="background:${color}">${initials(m.name)}</div>
      <div class="tf-info">
        <div class="name">${m.name} ${m.role === 'Captain' ? '<span class="tag tag-Build" style="font-size:.6rem">Cap</span>' : ''}</div>
        <div class="meta">Grade ${m.grade} · ${m.events[0]}</div>
      </div>
    </div>`;
}

function teamCard(t) {
  return `
    <div class="card tf-card fi">
      <div class="tf-head">
        <div class="tf-dot" style="background:${t.color}"></div>
        <div class="tf-name" style="color:${t.color}">${t.name}</div>
      </div>
      <div class="tf-members">
        ${t.members.map(m => memberCard(m, t.color)).join('')}
      </div>
    </div>`;
}

async function init() {
  const { teams } = await loadTeam();
  const grid = document.getElementById('teamsGrid');
  grid.innerHTML = teams.map(teamCard).join('');

  // Stats
  const totalMembers = teams.reduce((a, t) => a + t.members.length, 0);
  document.getElementById('statTeams').textContent   = teams.length;
  document.getElementById('statMembers').textContent = totalMembers;
  document.getElementById('statEvents').textContent  = 23;
  document.getElementById('statSeason').textContent  = 2026;

  // Fade-in
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('vis'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  grid.querySelectorAll('.fi').forEach(el => io.observe(el));
}

init();
