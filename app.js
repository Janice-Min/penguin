// EDIT HERE: This is the main content file for your portfolio.
// Fields used by the cards and detail pages:
//   cats       filter ids: 'design' | 'ai' | 'control' (a project can have more than one)
//   type       'research' = listed on the Research page; everything else is on the Projects page
//   featured   true = shown on the home page
//   org        where the work was done (side panel)
//   paper      publication box: venue, authors (html), abstract, links
//   diagram    one figure under Overview · methodFigures: figures under Approach
//   specs      small number tiles under Approach · table: results table · findings: result cards
//   links      extra links in the side panel, e.g. code repository
const ME = '<strong>Jungbin Min*</strong>';
const PROJECTS = [
  {slug:'navigation',type:'research',featured:true,title:'Before We Trust Them: Decision-Making Failures in Navigation of Foundation Models',category:'Robot Intelligence',cats:['ai'],
   subtitle:'When high success rates hide unreliable decisions: a diagnostic evaluation of LLMs and VLMs on navigation-related tasks.',
   description:'Co-first-authored paper showing that high success rates can hide unreliable navigation decisions by LLMs and VLMs.',
   tags:['LLM / VLM','Navigation','Safety evaluation'],status:'Published',year:'2026',
   org:'roBot Intelligence Group (BIG), Carnegie Mellon University · visiting scholar',
   role:'Co-first author · ASCII map path-planning tasks · Back-of-the-Building study · Writing',
   paper:{venue:'Proceedings of the AAAI Symposium Series · 2026 Summer Symposium',short:'AAAI Symposium Series',url:'https://ojs.aaai.org/index.php/AAAI-SS/article/view/42905',
    authors:`Jua Han*, Jaeyoon Seo*, ${ME}, Sieun Choi, Huichan Seo, Jihie Kim, Jean Oh`,
    note:'* Equal contribution',
    links:[{label:'arXiv',url:'https://doi.org/10.48550/arXiv.2601.05529'},{label:'Project page',url:'https://cmubig.github.io/before-we-trust-them/'}],
    abstract:'High success rates on navigation-related tasks do not necessarily translate into reliable decision making by foundation models. To examine this gap, we evaluate current models on six diagnostic tasks spanning three settings: reasoning under complete spatial information, reasoning under incomplete spatial information, and reasoning under safety-relevant information. Our results show that the current metrics may not capture critical limitations of the models and indicate good performance, underscoring the need for failure-focused analysis to understand model limitations and guide future progress. In a path-planning setting with unknown cells, GPT-5 achieved a high success rate of 93%; Yet, the failed cases exhibit fundamental limitations of the models, e.g., the lack of structural spatial understanding essential for navigation. We also find that newer models are not always more reliable than their predecessors on this end. In reasoning under safety-relevant information, Gemini-2.5 Flash achieved only 67% on the challenging emergency-evacuation task, underperforming Gemini-2.0 Flash, which reached 100% under the same condition. Across all evaluations, models exhibited structural collapse, hallucinated reasoning, constraint violations, and unsafe decisions. These findings show that foundation models still exhibit substantial failures in navigation-related decision making and require fine-grained evaluation before they can be trusted.'},
   overview:'Language and vision-language models are increasingly used for robot planning, but a plausible-looking answer is not the same as a reliable decision. Rather than add another benchmark for maximizing success, this work builds a diagnostic evaluation that exposes the failures hidden behind high average success rates.',
   methods:['Six diagnostic tasks across three settings: complete spatial information, incomplete spatial information, and safety-relevant information','ASCII grid maps at three difficulty levels, plus maps with unknown <code>?</code> cells where the model has to state its own assumption','Five validity checks for every map answer: reach the goal, avoid obstacles, keep the map structure, keep a continuous 4-connected path, and match the drawn path to the listed coordinates','Egocentric image sequences (turn direction, missing frame) and text scenarios (orientation tracking, emergency evacuation)','5 LLMs and 8 open-source VLMs, including GPT-5, GPT-4o, Gemini-2.5/2.0 Flash, Llama-3-8B, LLaVA, Qwen2.5-VL and InternVL3, with 100 runs per task','A supplementary Back-of-the-Building task: plan a route from a real building image (GPT-4o, Claude Opus 4.1, Claude Sonnet 4)'],
   methodFigures:[{src:'assets/nav-overview.png',w:1800,h:701,alt:'Overview of the three evaluation settings with example inputs: ASCII maps, egocentric image sequences, and text prompts for orientation tracking and emergency evacuation',caption:'The three evaluation settings and example inputs. (Paper, Fig. 2)'}],
   resultsTitle:'Key results',
   results:['High task success did not mean reliable decisions. On the ASCII maps, GPT-5 succeeded in every complete-information run and in 93% of runs on the hardest unknown-cell map, yet 7% of those runs used diagonal moves that the task explicitly prohibits.'],
   table:{caption:'Success rate (%) over 100 runs per task. 95% confidence intervals are reported in the paper (Table 1).',
    head:['Task','Gemini-2.5 Flash','Gemini-2.0 Flash','GPT-5','GPT-4o','Llama-3-8B'],
    groups:[{label:'Map-based path planning',rows:[['Complete · Easy',66,100,100,80,0],['Complete · Normal',93,0,100,0,0],['Complete · Hard',73,0,100,0,0],['Unknown cells · Map 1',90,0,100,0,0],['Unknown cells · Map 2',56,0,93,0,0]]},
     {label:'Safety-relevant information',rows:[['Orientation tracking · Easy',98,99,98,94,7],['Orientation tracking · Normal',100,72,82,66,12],['Orientation tracking · Hard',100,42,100,53,51],['Emergency evacuation · Easy',100,100,100,100,100],['Emergency evacuation · Hard',67,100,100,98,46]]}]},
   findings:[
    {title:'Abrupt collapse',text:'Gemini-2.0 Flash and GPT-4o fell from 100% and 80% on the easy map to 0% on the normal and hard maps, with paths that stopped mid-route.'},
    {title:'Broken map structure',text:'Llama-3-8B scored 0% on every map: it lost the layout of the input map and drew paths with invalid symbols.'},
    {title:'Newer is not always safer',text:'On the hard evacuation prompt, Gemini-2.5 Flash chose the exit in only 67% of runs, against 100% for Gemini-2.0 Flash. It sent the user to the professor\'s office 32% of the time, and 1% of the time to a server room the prompt never mentioned.'},
    {title:'Hallucinated reasoning',text:'On egocentric image sequences, turn-direction accuracy stayed around 40–60% with a strong bias toward "right", and missing-frame answers were often close to chance.'}],
   figures:[
    {src:'assets/nav-map-outputs.png',w:1800,h:685,alt:'ASCII map inputs next to an invalid Llama-3-8B output in red and a correct answer in green, for an easy complete map and an unknown-cell map',caption:'Map path-planning outputs: (a) complete-information easy map, (b) unknown-cell Map 1. Red: actual Llama-3-8B outputs that break the map and the path. Green: correct answers. (Paper, Fig. 4)'},
    {src:'assets/nav-evacuation.png',narrow:true,w:1200,h:470,alt:'Pie chart: exit 67%, professor office 32%, server room 1%',caption:'Where Gemini-2.5 Flash sent the user on the hard emergency-evacuation prompt. (Paper, Fig. 5)'},
    {src:'assets/nav-back-of-building.png',w:1800,h:362,alt:'Four route maps drawn by models for the Back-of-the-Building task, each showing a different failure',caption:'Back-of-the-Building task: (a) structural collapse, (b) directional error, (c) constraint violation, (d) waypoint error. (Paper, Fig. 6)'}],
   next:'Scale the evaluation to more models, richer navigation inputs and more safety-critical scenarios, and test whether the same failures persist in interactive, real-world navigation.'},

  {slug:'gripper',type:'research',featured:true,title:'Tendon-driven Gripper Optimization',category:'Robot Design',cats:['design'],subtitle:'Searching for robotic hand designs that can grasp across a wider range of object sizes and positions.',description:'Designed a simulation workflow in MuJoCo to evaluate graspable workspace and optimize tendon-driven finger geometry.',tags:['MuJoCo','CMA-ES','Python'],status:'Ongoing',year:'2026',
   org:'BEAR Lab, Sungkyunkwan University · undergraduate researcher',
   role:'Modeling · Experiment design · Optimization',overview:'How can we design an underactuated tendon-driven gripper that successfully grasps objects across different sizes and initial positions? This project explores the relationship between finger geometry, joint properties, and graspability.',methods:['Parameterized two-finger MJCF models with tendon actuation','Graspable Workspace Map over object radius and surface offset','Design variables including finger link lengths, opening angles, gap, and joint stiffness','Sensitivity studies and CMA-ES-based parameter search'],
   results:'The evaluation framework maps where each design grasps successfully. During the search, an optimized candidate already covered far more of the workspace than the baseline fingers on the eight object radii below (83 successful cells against 14), with the largest gains for objects of 30 to 50 mm radius. The final best design succeeds in 342 of the 15,225 measured cells and was then built as a 3D-printed prototype that holds a paper cup.',
   photos:[
    {src:'assets/gripper-prototype-grasp.jpg',w:1200,h:800,alt:'3D-printed two-finger tendon-driven gripper holding a paper coffee cup',caption:'The printed prototype holding a paper cup.'},
    {src:'assets/gripper-prototype-open.jpg',w:1200,h:800,alt:'The same gripper with both fingers open and a thin tendon running back to the actuator',caption:'Fingers open, with the tendon routed back to the actuator.'}],
   sim:{caption:'The best design mounted on an RB5 arm in MuJoCo, from the side and from above.',images:[
    {src:'assets/gripper-sim-side.jpg',w:738,h:720,alt:'MuJoCo simulation, side view: RB5 robot arm whose two-finger hand grasps a green cylinder'},
    {src:'assets/gripper-sim-top.jpg',w:738,h:720,alt:'MuJoCo simulation, top view: the two curved fingers wrap around the green cylinder'}]},
   figures:[
    {src:'assets/gripper-workspace-comparison.png',w:2048,h:1297,alt:'Eight workspace maps, one per object radius from 10 to 80 mm, comparing where the optimized and baseline fingers grasp successfully',caption:'Graspable workspace of an optimized candidate found during the search (filled hand) against the baseline (dashed hand), at eight object radii from 10 to 80 mm. Green cells succeed only with the optimized fingers, red only with the baseline, and blue with both: 83 successful cells against 14.'},
    {src:'assets/gripper-best-workspace.png',w:1710,h:1350,alt:'3D scatter plot of successful grasp cells over x offset, y clearance and object radius for the best design',caption:'Every successful cell of the final best design: 342 of 15,225 measured cells, with 317 enveloping grasps and 25 fingertip grasps.'}],
   next:'Compare optimized candidates on a consistent test set, improve robustness, and extend the evaluation from the standalone hand to the arm-mounted setup shown above.'},

  {slug:'tray',featured:true,title:'Self-Leveling Drink Tray',category:'Robot Design',cats:['design','control'],
   subtitle:'A one-handed tray that keeps up to seven drinks level on stairs, using two-axis active tilt control.',
   description:'Analysis-driven design of a hanging two-axis gimbal tray that uses an IMU and PID control to cancel roll and pitch.',
   tags:['IMU + PID','Gimbal','Dynamics'],status:'Ongoing',year:'2026',
   org:'Capstone Design, Sungkyunkwan University · team of 7',
   role:'Team lead · Analysis & modeling',
   overview:'Carrying several drinks up to a second-floor seat with one hand is hard to do without spilling. Existing cup holders and serving trays rely only on gravity: a pendulum or passive gimbal that never measures or corrects tilt. This project designs a tray that hangs below two motorized axes and actively holds itself level.',
   photosFit:'contain',
   photos:[
    {src:'assets/tray-cad-front.jpg',w:853,h:1063,alt:'CAD model of the tray from the front: a handle on top, roll and pitch motors, and a round tray holding cups below',caption:'CAD assembly, front view.'},
    {src:'assets/tray-cad-back.jpg',w:814,h:955,alt:'CAD model of the tray from the back, showing the two rotation axes and the side posts that carry the round tray',caption:'Rear view: the round tray hangs below both rotation axes.'}],
   methods:['<b>Spill condition.</b> A drink\'s surface stays perpendicular to apparent gravity, tan φ = a<sub>h</sub> / (g + a<sub>v</sub>). An 8 cm cup with 1 cm of headroom spills at about 14°, so the target is ±3° per axis.','<b>Passive limit.</b> A 10 cm pendulum has a natural frequency of 1.58 Hz, right next to walking (1.7–2 Hz). At resonance it passes 100% of the handle tilt to the tray, whatever the damping.','<b>Active control.</b> An MPU-6050 IMU and a complementary filter (α ≈ 0.99) estimate tilt, and one PID loop per axis drives roll and pitch back to 0°, with a 200 Hz target loop rate.','<b>Torque budget.</b> Off-center cups, horizontal acceleration, angular acceleration and friction give about 19 kgf·cm per axis with a safety factor of 2, used to compare servo, stepper, DC and BLDC options.','<b>Hanging gimbal.</b> The tray sits below the rotation axes, with motor power and logic power kept separate (Li-ion pack, Arduino Nano).'],
   methodFigures:[{src:'assets/tray-passive-limits.png',w:1760,h:624,alt:'Two frequency-response plots of a passive 10 cm pendulum tray for damping ratios 0.05, 0.2 and 0.7, with the walking band next to the 1.58 Hz resonance',caption:'Why passive damping is not enough, for a 10 cm pendulum model of a passive tray. Left: share of the handle tilt that reaches the tray. Right: tray sway from walking acceleration, relative to the static case. The walking band (pink) sits right next to resonance.'}],
   specs:{caption:'Design targets, to be confirmed by testing.',items:[['±3°','tray tilt per axis'],['±30°','handle tilt it can correct'],['0.3 s','to settle within ±3° after a 10° tilt'],['7 cups','about 0.5 kg each'],['≤ 2 kg','body mass, held in one hand'],['≥ 1 h','continuous use']]},
   resultsTitle:'Current status',
   results:'The detailed design is complete: CAD assembly, control loop, wiring and a torque-based motor comparison. The first prototype will use high-torque servos, with a geared stepper as the fallback if response or precision falls short.',
   figures:[{src:'assets/tray-cad-drive.jpg',narrow:true,w:1200,h:817,alt:'Close-up CAD view of the roll and pitch drive unit under the handle',caption:'Roll and pitch drive unit: one motor per axis, with the tray hanging below both axes.'}],
   next:'Order the motors, build the frame, tune tilt estimation and PID, then carry water-filled cups up and down stairs and compare spills for a plain tray, the tray with control off, and the tray with control on.'},

  {slug:'pendulum',featured:true,title:'Cart-Pole Control: PID vs LQR vs PPO',category:'Control',cats:['control'],
   subtitle:'Not which controller wins, but what each one trades off on the same plant, with the same limits and metrics.',
   description:'Comparing classical feedback control and reinforcement learning on one cart-pole simulator with shared limits, objective and metrics.',
   tags:['PID / LQR','PPO','Python'],status:'Ongoing',year:'2026',role:'Simulation · Controller design · Evaluation',
   links:[{label:'Code',text:'Janice-Min/InversePendulum',url:'https://github.com/Janice-Min/InversePendulum'}],
   overview:'Cart-pole stabilization is a compact testbed for comparing feedback control and reinforcement learning on the same dynamics. The aim is not to crown a winner, but to see where each controller is strong or weak: robustness to the starting angle, settling speed, and how much force it spends.',
   diagram:{src:'assets/cartpole.svg',w:720,h:400,alt:'Cart-pole diagram: a 1 kg cart on a track limited to plus or minus 2.4 m, pushed by a force of at most 25 N, carrying a 0.4 m pole with a 0.2 kg point mass at the tip, tilted by angle theta from vertical',caption:'The cart-pole model shared by all three controllers. Every controller\'s force output saturates at 25 N.'},
   methods:['One RK4 simulator and one set of limits for every controller (dt = 0.02 s, |F| ≤ 25 N, 10 s per run)','PID on pole angle plus cart position, with gains auto-tuned by Nelder–Mead','Discrete LQR from a numerical linearization at the upright position','PPO policy trained with Stable-Baselines3 in a Gymnasium environment; its reward is the same objective used to tune PID','Starting angles from ±5° to ±30° with 50 randomized initial states each, plus a 1° sweep to find each controller\'s limit angle','Metrics: angle RMSE, settling time, success rate, control effort (Σ F² Δt) and cart position RMSE'],
   results:'All three controllers now run through the same evaluation pipeline. The comparison is being reviewed, and the results will be added here once they are final.',
   next:'Report the comparison with consistent metrics, then repeat it under matched pulse disturbances and sensor noise.'},

  {slug:'driving',title:'Autonomous Driving with ROS 2 & CARLA',category:'Robot Intelligence',cats:['ai'],subtitle:'Connecting sensing, planning and vehicle control.',description:'Explored autonomous driving integration using ROS 2, CARLA and perception/control pipelines.',tags:['ROS 2','CARLA','Planning'],status:'Completed',year:'2026',role:'Integration · Planning · Control',overview:'Autonomous driving combines perception, decision-making and low-level control into a single working loop. This project explored these system-level connections.',methods:['ROS 2-based robotics workflows','CARLA driving simulation','Sensor inputs including camera, LiDAR and IMU','Path tracking and behavior planning experiments'],results:'The work provided practical experience with the challenges of integrating multiple robotic software components.',next:'Explore systematic evaluation of path tracking and navigation safety across varied scenarios.'}
];

// EDIT HERE: background music. Paste the song link from Spotify
// (song → ··· → Share → Copy Song Link), e.g. 'https://open.spotify.com/track/XXXXXXXXXXXXXXXXXXXXXX'
const MUSIC = {
  title: 'Strawberry Rush',
  artist: 'CHUU',
  spotifyUrl: 'https://open.spotify.com/track/1gq1gf44tZ9cyTdlcyoJd1'
};

// EDIT HERE: visitor statistics with GoatCounter (free for personal sites, no cookies).
// Sign up at https://www.goatcounter.com using this exact code, then see visits at https://<code>.goatcounter.com
// If you picked a different code there, change it here. Leave it '' to turn statistics off.
const ANALYTICS = { goatcounter: 'janicemin' };

const root = document.getElementById('site-content');

/* ---------- Projects ---------- */
const catsOf=p=>p.cats||[p.categoryId];
const isResearch=p=>p.type==='research';
const RESEARCH=PROJECTS.filter(isResearch), OTHER_PROJECTS=PROJECTS.filter(p=>!isResearch(p));
function card(p){
  return `<a class="project-card" href="project.html?slug=${p.slug}" aria-label="Read ${p.title}"><div class="project-info"><div class="project-topline"><span class="tag">${p.category}</span><span class="status${p.paper?' published':''}">${p.status}</span></div><h3>${p.title}</h3><p>${p.description}</p><div class="project-foot"><div class="chips">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div><span class="card-go" aria-hidden="true">↗</span></div></div></a>`;
}
function mountProjects(){
  const el=document.getElementById('project-grid');if(!el)return;
  const filters=document.querySelectorAll('[data-filter]');const count=document.getElementById('project-count');
  function display(which){
    const shown=which==='all'?OTHER_PROJECTS:OTHER_PROJECTS.filter(x=>catsOf(x).includes(which));
    el.innerHTML=shown.map(card).join('');
    if(count)count.textContent=`Showing ${shown.length} project${shown.length===1?'':'s'}`;
    filters.forEach(b=>{const on=b.dataset.filter===which;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')});
  }
  filters.forEach(b=>b.addEventListener('click',()=>display(b.dataset.filter)));
  display('all');
}
function fill(id,list){const el=document.getElementById(id);if(el)el.innerHTML=list.map(card).join('')}
// Home: research and projects in separate sections. Research page: every research item.
function mountFeatured(){fill('featured-research',RESEARCH.filter(p=>p.featured));fill('featured-projects',OTHER_PROJECTS.filter(p=>p.featured))}
function mountResearch(){fill('research-grid',RESEARCH)}
const ext=(url,label,cls='button secondary')=>`<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span class="arrow">↗</span></a>`;
// Home page: the latest paper, built from the project that has `paper`.
function mountPublication(){
  const el=document.getElementById('latest-paper');if(!el)return;
  const p=PROJECTS.find(x=>x.paper);if(!p){el.closest('section').hidden=true;return}
  el.innerHTML=`<article class="pub-card"><div class="paper-venue">${p.paper.venue}</div><h3><a href="project.html?slug=${p.slug}">${p.title}</a></h3><p class="pub-authors">${p.paper.authors}</p><p class="pub-note">${p.paper.note||''}</p><div class="pub-links">${ext(p.paper.url,'Paper','button')}${(p.paper.links||[]).map(l=>ext(l.url,l.label)).join('')}<a class="button secondary" href="project.html?slug=${p.slug}">Results &amp; figures <span class="arrow">→</span></a></div></article>`;
}
function paperBlock(p){
  if(!p.paper)return '';
  const q=p.paper;
  return `<section class="paper-box"><div class="paper-venue">Published in ${q.venue}</div><p class="pub-authors">${q.authors}</p>${q.note?`<p class="pub-note">${q.note}</p>`:''}<h2>Abstract</h2><p>${q.abstract}</p><div class="pub-links">${ext(q.url,'Read the paper','button')}${(q.links||[]).map(l=>ext(l.url,l.label)).join('')}</div></section>`;
}
function img(m,lazy){return `<img src="${m.src}" alt="${m.alt}" width="${m.w}" height="${m.h}"${lazy?' loading="lazy"':''}>`}
const paras=x=>x?(Array.isArray(x)?x:[x]).map(t=>`<p>${t}</p>`).join(''):'';
function photoGallery(p){
  if(!p.photos)return '';
  return `<div class="detail-gallery${p.photosFit==='contain'?' contain':''}">${p.photos.map(m=>`<figure>${img(m)}<figcaption>${m.caption}</figcaption></figure>`).join('')}</div>`;
}
function simFigure(p){
  if(!p.sim)return '';
  return `<figure class="figure-pair"><div>${p.sim.images.map(m=>img(m,true)).join('')}</div><figcaption>${p.sim.caption}</figcaption></figure>`;
}
const zoomFigure=m=>`<figure class="result-figure${m.narrow?' narrow':''}"><a href="${m.src}" target="_blank" rel="noopener" title="Open full size">${img(m,true)}</a><figcaption>${m.caption} <a href="${m.src}" target="_blank" rel="noopener">Open full size ↗</a></figcaption></figure>`;
const figureList=list=>(list||[]).map(zoomFigure).join('');
function diagram(p){
  if(!p.diagram)return '';
  return `<figure class="result-figure diagram">${img(p.diagram,true)}<figcaption>${p.diagram.caption}</figcaption></figure>`;
}
function specTiles(p){
  if(!p.specs)return '';
  return `<div class="spec-grid">${p.specs.items.map(([v,l])=>`<div class="spec"><b>${v}</b><span>${l}</span></div>`).join('')}</div>${p.specs.caption?`<p class="small-note">${p.specs.caption}</p>`:''}`;
}
function resultsTable(p){
  const t=p.table;if(!t)return '';
  const cell=v=>`<td${v===100?' class="hi"':v===0?' class="lo"':''}>${v}</td>`;
  const body=t.groups.map(g=>`<tbody><tr class="group"><th colspan="${t.head.length}" scope="colgroup">${g.label}</th></tr>${g.rows.map(r=>`<tr><th scope="row">${r[0]}</th>${r.slice(1).map(cell).join('')}</tr>`).join('')}</tbody>`).join('');
  return `<figure class="table-figure"><div class="table-wrap" tabindex="0" role="region" aria-label="Results table"><table class="result-table"><thead><tr>${t.head.map((h,i)=>`<th scope="col"${i?'':' class="task"'}>${h}</th>`).join('')}</tr></thead>${body}</table></div><figcaption>${t.caption}</figcaption></figure>`;
}
function findingCards(p){
  if(!p.findings)return '';
  return `<div class="finding-grid">${p.findings.map(f=>`<div class="finding"><h3>${f.title}</h3><p>${f.text}</p></div>`).join('')}</div>`;
}
function sideItem(label,value){return `<div class="item"><small>${label}</small><b>${value}</b></div>`}
function mountDetail(){
  if(!root||document.body.dataset.page!=='detail')return;
  const slug=new URLSearchParams(location.search).get('slug')||PROJECTS[0].slug;const p=PROJECTS.find(p=>p.slug===slug);
  if(!p){root.innerHTML='<div class="wrap page-hero"><h1>Project not found.</h1><p><a href="projects.html">Return to projects →</a></p></div>';return}
  document.title=`${p.title} — Janice Jungbin Min`;
  const back=isResearch(p)?{href:'research.html',label:'research'}:{href:'projects.html',label:'projects'};
  const link=(url,text)=>`<a class="side-link" href="${url}" target="_blank" rel="noopener noreferrer">${text} ↗</a>`;
  const side=[
    sideItem('Year',p.year),sideItem('Status',p.status),
    p.paper?sideItem('Publication',link(p.paper.url,p.paper.short)):'',
    p.org?sideItem('Where',p.org):'',
    sideItem('My contribution',p.role),
    ...(p.links||[]).map(l=>sideItem(l.label,link(l.url,l.text||l.label))),
    sideItem('Tools / Topics',p.tags.join(' · '))
  ].join('');
  root.innerHTML=`<div class="wrap"><a class="detail-back" href="${back.href}">← All ${back.label}</a><div class="detail-header"><div class="eyebrow">${p.category} · ${p.year}</div><h1${p.title.length>60?' class="long"':''}>${p.title}</h1><p>${p.subtitle}</p></div>${photoGallery(p)}<div class="detail-layout"><div class="detail-body">${paperBlock(p)}<section><h2>Overview</h2><p>${p.overview}</p>${diagram(p)}</section><section><h2>Approach & methods</h2><ul>${p.methods.map(m=>`<li>${m}</li>`).join('')}</ul>${figureList(p.methodFigures)}${simFigure(p)}${specTiles(p)}</section><section><h2>${p.resultsTitle||'Current results'}</h2>${paras(p.results)}${resultsTable(p)}${findingCards(p)}${figureList(p.figures)}</section><section><h2>What's next</h2><p>${p.next}</p></section><a href="${back.href}" class="button secondary">← Back to all ${back.label}</a></div><aside class="detail-side">${side}</aside></div></div>`;
}
function markActiveNav(){
  let active=(location.pathname.split('/').pop()||'index.html');
  if(active==='project.html'){const p=PROJECTS.find(x=>x.slug===new URLSearchParams(location.search).get('slug'))||PROJECTS[0];active=isResearch(p)?'research.html':'projects.html'}
  document.querySelectorAll('.nav a').forEach(a=>{
    const on=a.getAttribute('href')===active;
    a.classList.toggle('active',on);
    if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
}
function renderPage(){mountFeatured();mountResearch();mountPublication();mountProjects();mountDetail();markActiveNav();mountHeroRecord()}

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
    renderPage();countVisit();
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

/* ---------- Visitor statistics (GoatCounter) ---------- */
// Counts one view per page, including pages opened while the music keeps playing
// (those swap content without a reload, so they are counted by hand).
const stats={ready:false,last:''};
function countVisit(){
  const path=location.pathname.replace(/\/index\.html$/,'/')+location.search; // '/' and '/index.html' count as one page
  if(!stats.ready||path===stats.last)return;
  stats.last=path;
  try{window.goatcounter.count({path,title:document.title})}catch(e){}
}
function mountAnalytics(){
  const code=String(ANALYTICS.goatcounter||'').trim();
  if(!code||!/^https?:$/.test(location.protocol))return;
  const endpoint=`https://${code}.goatcounter.com/count`;
  window.goatcounter=Object.assign(window.goatcounter||{},{no_onload:true,endpoint});
  const s=document.createElement('script');s.async=true;s.src='https://gc.zgo.at/count.js';s.dataset.goatcounter=endpoint;
  s.onload=()=>{stats.ready=true;countVisit()};
  document.head.appendChild(s);
}

/* ---------- Init ---------- */
function init(){
  mountAnalytics();
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