// EDIT HERE: This is the main content file for your portfolio.
// Projects with a `paper` field link to the published paper on their detail page.
const PROJECTS = [
  {slug:'gripper',title:'Tendon-driven Gripper Optimization',category:'Robot Design',categoryId:'design',subtitle:'Searching for robotic hand designs that can grasp across a wider range of object sizes and positions.',description:'Designed a simulation workflow in MuJoCo to evaluate graspable workspace and optimize tendon-driven finger geometry.',tags:['MuJoCo','CMA-ES','Python'],status:'Ongoing research',year:'2026',role:'Modeling · Experiment design · Optimization',overview:'How can we design an underactuated tendon-driven gripper that successfully grasps objects across different sizes and initial positions? This project explores the relationship between finger geometry, joint properties, and graspability.',methods:['Parameterized two-finger MJCF models with tendon actuation','Graspable Workspace Map over object radius and surface offset','Design variables including finger link lengths, opening angles, gap, and joint stiffness','Sensitivity studies and CMA-ES-based parameter search'],results:'The evaluation framework maps successful and unsuccessful grasps and supports comparisons between candidate designs. Quantitative results and visualizations can be added here when finalized.',next:'Compare optimized candidates on consistent test sets, improve robustness, and investigate transfer from a standalone hand model to a robot arm.'},
  {slug:'navigation',title:'Evaluating Robot Navigation with LLMs',category:'Robot Intelligence',categoryId:'ai',subtitle:'Understanding when language-guided navigation decisions succeed — and why they fail.',description:'Worked on evaluating LLM/VLM navigation behavior and organizing success criteria and failure patterns.',tags:['LLM / VLM','Navigation','Evaluation'],status:'Published paper',year:'2026',role:'Evaluation · Analysis',
   paper:{venue:'Proceedings of the AAAI Symposium Series',short:'AAAI Symposium Series',url:'https://ojs.aaai.org/index.php/AAAI-SS/article/view/42905',
    // DRAFT: written from this site's own project description. Replace with the official abstract from the AAAI page.
    abstract:'Large language models are increasingly used to turn natural-language instructions into robot navigation decisions, but a plausible-looking plan is not the same as a reliable one. This work evaluates LLM- and VLM-based robot navigation using map-based task representations, explicit success criteria for generated action sequences, and a structured categorization of recurring failure modes. Rather than reporting a single accuracy number, it examines when language-guided navigation succeeds, where it breaks down, and what these failure patterns imply for building more reliable robot autonomy.'},
   overview:'Reliable robotic autonomy needs more than a plausible plan. This work focused on evaluating language-model-based navigation behavior using clear success criteria and a structured analysis of failure cases.',methods:['Navigation experiments with map-based task representations','Success/failure criteria for generated action sequences','Categorization of recurrent errors','Qualitative analysis of robustness and reliability'],results:'The project emphasized rigorous evaluation and interpretable error analysis rather than reporting a single accuracy number.',next:'Continue exploring how planning, physical feasibility, and real-world robot constraints can be evaluated together.'},
  {slug:'pendulum',title:'Learning to Balance an Inverted Pendulum',category:'Control Systems',categoryId:'control',subtitle:'A side-by-side study of classical and learning-based control.',description:'Built a simulation-based study comparing PID, LQR and reinforcement learning on an inverted pendulum.',tags:['PID / LQR','PPO','Control'],status:'Ongoing study',year:'2026',role:'Simulation · Control · Evaluation',overview:'Inverted pendulum stabilization is a compact testbed for comparing how feedback control and reinforcement learning handle the same dynamics and constraints.',methods:['Consistent plant model and initial conditions','PID and LQR controller tuning','PPO training and evaluation','Comparative metrics for angle error, settling time, failure rate, and control effort'],results:'A PPO training baseline has been established. A controlled comparison with PID and LQR is planned as the next evaluation stage.',next:'Run repeated tests under matched disturbances and report controller performance with consistent metrics.'},
  {slug:'driving',title:'Autonomous Driving with ROS 2 & CARLA',category:'Autonomous Systems',categoryId:'ai',subtitle:'Connecting sensing, planning and vehicle control.',description:'Explored autonomous driving integration using ROS 2, CARLA and perception/control pipelines.',tags:['ROS 2','CARLA','Planning'],status:'Project experience',year:'2026',role:'Integration · Planning · Control',overview:'Autonomous driving combines perception, decision-making and low-level control into a single working loop. This project explored these system-level connections.',methods:['ROS 2-based robotics workflows','CARLA driving simulation','Sensor inputs including camera, LiDAR and IMU','Path tracking and behavior planning experiments'],results:'The work provided practical experience with the challenges of integrating multiple robotic software components.',next:'Explore systematic evaluation of path tracking and navigation safety across varied scenarios.'}
];

// EDIT HERE: background music. Paste the song link from Spotify
// (song → ··· → Share → Copy Song Link), e.g. 'https://open.spotify.com/track/XXXXXXXXXXXXXXXXXXXXXX'
const MUSIC = {
  title: 'Strawberry Rush',
  artist: 'CHUU',
  spotifyUrl: 'https://open.spotify.com/track/1gq1gf44tZ9cyTdlcyoJd1'
};

const root = document.getElementById('site-content');

/* ---------- Projects ---------- */
function card(p){
  return `<a class="project-card" href="project.html?slug=${p.slug}" aria-label="Read ${p.title}"><div class="project-info"><div class="project-topline"><span class="tag">${p.category}</span><span class="status${p.paper?' published':''}">${p.status}</span></div><h3>${p.title}</h3><p>${p.description}</p><div class="project-foot"><div class="chips">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div><span class="card-go" aria-hidden="true">↗</span></div></div></a>`;
}
function mountProjects(){
  const el=document.getElementById('project-grid');if(!el)return;
  const filters=document.querySelectorAll('[data-filter]');const count=document.getElementById('project-count');
  function display(which){
    const shown=which==='all'?PROJECTS:PROJECTS.filter(x=>x.categoryId===which);
    el.innerHTML=shown.map(card).join('');
    if(count)count.textContent=`Showing ${shown.length} project${shown.length===1?'':'s'}`;
    filters.forEach(b=>{const on=b.dataset.filter===which;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')});
  }
  filters.forEach(b=>b.addEventListener('click',()=>display(b.dataset.filter)));
  display('all');
}
function mountFeatured(){const el=document.getElementById('featured-projects');if(el)el.innerHTML=PROJECTS.slice(0,4).map(card).join('')}
function paperBlock(p){
  if(!p.paper)return '';
  return `<section class="paper-box"><div class="paper-venue">Published in ${p.paper.venue}</div><h2>Abstract</h2><p>${p.paper.abstract}</p><a class="button" href="${p.paper.url}" target="_blank" rel="noopener noreferrer">Read the paper <span class="arrow">↗</span></a></section>`;
}
function mountDetail(){
  if(!root||document.body.dataset.page!=='detail')return;
  const slug=new URLSearchParams(location.search).get('slug')||'gripper';const p=PROJECTS.find(p=>p.slug===slug);
  if(!p){root.innerHTML='<div class="wrap page-hero"><h1>Project not found.</h1><p><a href="projects.html">Return to projects →</a></p></div>';return}
  document.title=`${p.title} — Janice Jungbin Min`;
  const paperSide=p.paper?`<div class="item"><small>Publication</small><b><a class="side-link" href="${p.paper.url}" target="_blank" rel="noopener noreferrer">${p.paper.short} ↗</a></b></div>`:'';
  root.innerHTML=`<div class="wrap"><a class="detail-back" href="projects.html">← All projects</a><div class="detail-header"><div class="eyebrow">${p.category} · ${p.year}</div><h1>${p.title}</h1><p>${p.subtitle}</p></div><div class="detail-layout"><div class="detail-body">${paperBlock(p)}<section><h2>Overview</h2><p>${p.overview}</p></section><section><h2>Approach & methods</h2><ul>${p.methods.map(m=>`<li>${m}</li>`).join('')}</ul></section><section><h2>Current results</h2><p>${p.results}</p><div class="notice">Portfolio draft: replace this section with your own plots, photos or videos when ready. Avoid reporting unverified metrics.</div></section><section><h2>What's next</h2><p>${p.next}</p></section><a href="projects.html" class="button secondary">← Back to all projects</a></div><aside class="detail-side"><div class="item"><small>Year</small><b>${p.year}</b></div><div class="item"><small>Status</small><b>${p.status}</b></div>${paperSide}<div class="item"><small>My contribution</small><b>${p.role}</b></div><div class="item"><small>Tools / Topics</small><b>${p.tags.join(' · ')}</b></div></aside></div></div>`;
}
function markActiveNav(){
  const active=(location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.nav a').forEach(a=>{
    const on=a.getAttribute('href')===active||(active==='project.html'&&a.getAttribute('href')==='projects.html');
    a.classList.toggle('active',on);
    if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
}
function renderPage(){mountFeatured();mountProjects();mountDetail();markActiveNav();mountHeroRecord()}

/* ---------- Music player (official Spotify embed) ---------- */
const ICON={
  play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>',
  hide:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9.5l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  show:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14.5l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};
// state: idle (no player) | open (player shown) | mini (player hidden, still playing)
const music={state:'idle',controller:null,token:0,playing:false,loading:false,heroVisible:false,observer:null,ui:null};
function spotifyTrackId(){const m=String(MUSIC.spotifyUrl||'').match(/track[\/:]([A-Za-z0-9]{22})/);return m?m[1]:null}
function openSpotifySearch(){window.open('https://open.spotify.com/search/'+encodeURIComponent(`${MUSIC.artist} ${MUSIC.title}`),'_blank','noopener')}
function loadSpotifyApi(){
  if(window.__spotifyApi)return Promise.resolve(window.__spotifyApi);
  if(music.apiPromise)return music.apiPromise;
  music.apiPromise=new Promise((resolve,reject)=>{
    window.onSpotifyIframeApiReady=api=>{window.__spotifyApi=api;resolve(api)};
    const s=document.createElement('script');s.src='https://open.spotify.com/embed/iframe-api/v1';s.async=true;
    s.onerror=()=>reject(new Error('Spotify API blocked'));document.head.appendChild(s);
    setTimeout(()=>reject(new Error('Spotify API timeout')),6000);
  }).catch(err=>{music.apiPromise=null;throw err});
  return music.apiPromise;
}
function plainEmbed(id){
  return `<iframe title="Spotify player: ${MUSIC.title} by ${MUSIC.artist}" src="https://open.spotify.com/embed/track/${id}?utm_source=generator" width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}
function startPlayer(id,area){
  const token=++music.token;
  music.loading=true;music.playing=false;syncMusicUI();
  area.innerHTML='<div class="music-host"></div>';
  loadSpotifyApi().then(api=>{
    if(token!==music.token)return;
    api.createController(area.firstElementChild,{uri:`spotify:track:${id}`,width:'100%',height:152},ctrl=>{
      if(token!==music.token){ctrl.destroy();return}
      music.controller=ctrl;
      ctrl.addListener('ready',()=>ctrl.play());
      ctrl.addListener('playback_update',e=>{
        if(token!==music.token||!e||!e.data)return;
        music.loading=false;music.playing=!e.data.isPaused;syncMusicUI();
        // Started from the record: once it is really playing, fold the player into the mini bar.
        if(music.autoMini&&music.playing){music.autoMini=false;setTimeout(()=>{if(music.state==='open'&&music.playing)setMusicState('mini')},1500)}
      });
    });
  }).catch(()=>{
    if(token!==music.token)return;
    // Fallback embed: playback state is not reported, so assume it plays.
    area.innerHTML=plainEmbed(id);music.loading=false;music.playing=true;syncMusicUI();
  });
}
function setMusicState(s){
  const {card,btn,close}=music.ui;
  music.state=s;card.dataset.state=s;close.hidden=s==='idle';
  const label={idle:`Play ${MUSIC.title} by ${MUSIC.artist}`,open:'Hide player (music keeps playing)',mini:'Show player'}[s];
  btn.innerHTML=ICON[{idle:'play',open:'hide',mini:'show'}[s]];btn.setAttribute('aria-label',label);btn.title=label;
  btn.setAttribute('aria-expanded',String(s==='open'));
  syncMusicUI();
}
function musicStart(){
  const id=spotifyTrackId();
  if(!id){openSpotifySearch();return}
  setMusicState('open');startPlayer(id,music.ui.area);
}
function musicStop(){
  music.token++;music.autoMini=false;
  if(music.controller){try{music.controller.destroy()}catch(e){}music.controller=null}
  music.ui.area.innerHTML='';music.playing=false;music.loading=false;setMusicState('idle');
}
// The record on the home page: first tap starts the song, later taps pause and resume.
function toggleFromRecord(){
  if(music.state==='idle'){music.autoMini=true;return musicStart()}
  const c=music.controller;
  if(c&&typeof c.togglePlay==='function')c.togglePlay();
  else setMusicState('open');
}
function syncMusicUI(){
  if(!music.ui)return;
  document.body.dataset.music=music.state;
  document.body.dataset.playing=music.playing?'1':'0';
  // Keep the floating card out of the way while the record on the home page is on screen and nothing is playing.
  music.ui.card.classList.toggle('is-tucked',music.state==='idle'&&music.heroVisible);
  const hint=document.querySelector('[data-music-hint]');
  const record=document.querySelector('[data-music-toggle]');
  let text,label;
  if(music.state==='idle'){
    const hasTrack=!!spotifyTrackId();
    text=hasTrack?'Tap the record to play':'Tap the record to find it on Spotify';
    label=hasTrack?`Play ${MUSIC.title} by ${MUSIC.artist}`:`Find ${MUSIC.title} by ${MUSIC.artist} on Spotify`;
  }else if(music.loading){text='Starting…';label=`Starting ${MUSIC.title}`}
  else if(music.playing){text='Now playing. Tap to pause';label=`Pause ${MUSIC.title}`}
  else{text='Paused. Tap to play';label=`Play ${MUSIC.title}`}
  if(hint)hint.textContent=text;
  if(record)record.setAttribute('aria-label',label);
}
function mountHeroRecord(){
  document.querySelectorAll('[data-music-title]').forEach(el=>el.textContent=MUSIC.title);
  document.querySelectorAll('[data-music-artist]').forEach(el=>el.textContent=MUSIC.artist);
  const record=document.querySelector('[data-music-toggle]');
  if(record)record.addEventListener('click',toggleFromRecord);
  if(music.observer){music.observer.disconnect();music.observer=null}
  const hero=document.querySelector('.hero-art');
  music.heroVisible=!!hero;
  if(hero&&'IntersectionObserver' in window){
    music.observer=new IntersectionObserver(([e])=>{music.heroVisible=e.isIntersecting;syncMusicUI()},{threshold:.2});
    music.observer.observe(hero);
  }
  syncMusicUI();
}
function mountMusic(){
  const card=document.createElement('section');
  card.className='music-card';card.dataset.state='idle';card.setAttribute('aria-label','Music player');
  card.innerHTML=`<div class="music-row"><div class="music-cover" aria-hidden="true"><img src="assets/strawberry.svg" alt=""></div><div class="music-text"><small>Now playing ♡</small><b>${MUSIC.title}</b><span>${MUSIC.artist}</span></div><button class="music-close" type="button" aria-label="Stop music and close player" hidden>×</button><button class="music-btn" type="button"></button></div><div class="music-player"></div>`;
  if(document.querySelector('.hero-art'))card.classList.add('is-tucked');
  document.body.appendChild(card);document.body.classList.add('has-music');
  music.ui={card,btn:card.querySelector('.music-btn'),close:card.querySelector('.music-close'),area:card.querySelector('.music-player')};
  music.ui.btn.addEventListener('click',()=>{
    if(music.state==='idle')musicStart();
    else setMusicState(music.state==='open'?'mini':'open');
  });
  music.ui.close.addEventListener('click',()=>{musicStop();music.ui.btn.focus()});
  setMusicState('idle');
}

/* ---------- Keep music playing while moving between pages ---------- */
// Only while the player is open: internal links swap the page content instead of reloading,
// so the Spotify player is never torn down. Otherwise, links behave normally.
async function goTo(href,push){
  try{
    const res=await fetch(href);if(!res.ok)throw new Error(res.status);
    const doc=new DOMParser().parseFromString(await res.text(),'text/html');
    const next=doc.getElementById('site-content');if(!next)throw new Error('no content');
    if(push)history.pushState({soft:true},'',href);
    document.title=doc.title;document.body.dataset.page=doc.body.dataset.page||'';
    root.innerHTML=next.innerHTML;
    const nav=document.querySelector('.nav'),toggle=document.querySelector('.mobile-toggle');
    if(nav)nav.classList.remove('open');if(toggle)toggle.setAttribute('aria-expanded','false');
    renderPage();
    const hash=new URL(href).hash;const target=hash&&document.getElementById(hash.slice(1));
    if(target)target.scrollIntoView();else window.scrollTo(0,0);
    root.focus({preventScroll:true});
  }catch(err){location.href=href}
}
function mountSoftNavigation(){
  root.setAttribute('tabindex','-1');
  history.replaceState({soft:true},'',location.href);
  document.addEventListener('click',e=>{
    if(music.state==='idle'||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    const a=e.target.closest('a[href]');if(!a||a.target||a.hasAttribute('download'))return;
    const url=new URL(a.href,location.href);
    if(url.origin!==location.origin||!/(\.html|\/)$/.test(url.pathname))return;
    if(url.pathname===location.pathname&&url.search===location.search&&url.hash)return;
    e.preventDefault();goTo(url.href,true);
  });
  window.addEventListener('popstate',e=>{if(e.state&&e.state.soft)goTo(location.href,false)});
}

/* ---------- Init ---------- */
function init(){
  mountMusic();
  renderPage();
  const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.nav');
  if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  const penguin=document.getElementById('penguin-float');const bubble=document.getElementById('penguin-bubble');
  if(penguin&&bubble){penguin.addEventListener('click',()=>{const open=bubble.classList.toggle('show');penguin.setAttribute('aria-expanded',String(open))})}
  if(root&&window.fetch&&window.history.pushState)mountSoftNavigation();
}
document.addEventListener('DOMContentLoaded',init);
