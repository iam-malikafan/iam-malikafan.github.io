/* ============================ Malik Afan — portfolio logic ============================ */
document.documentElement.classList.add("js");

const LANG = { "HTML":"#E34F26","CSS":"#1572B6","JavaScript":"#f1e05a","PHP":"#777BB4","Laravel":"#FF2D20",
  "MySQL":"#4479A1","SQL":"#336791","SQLite":"#003B57","Git":"#F05032","REST APIs":"#6a9955","AI Automation":"#3EC46B",
  "Python":"#3572A5","TypeScript":"#3178c6","Node.js":"#339933","Express":"#68A063","Linux":"#f2a900" };

const SITE = {
  identity:{ first:"Malik", last:"Afan", brand:"Malik Afan", role:"Junior Software Engineer",
    blurb:"Full-stack developer with a backend focus — I build APIs, services and automations in Python & Node.js, deploy and run them on Linux servers, and handle the frontend when a project needs it.",
    availability:"Available for new work", location:"Pakistan", current:"building backends & automations", years:"1+ years" },
  nav:[{label:"Services",href:"#services",count:"04"},{label:"Skills",href:"#skills",count:"05"},{label:"Work",href:"#work",count:"06"},{label:"Experience",href:"#experience",count:""},{label:"Contact",href:"#contact"}],
  socials:[
    {k:"GitHub",href:"https://github.com/iam-malikafan"},
    {k:"LinkedIn",href:"https://www.linkedin.com/in/malikafan"},
    {k:"Email",href:"mailto:iam.malikafan@gmail.com"},
    {k:"X (Twitter)",href:"#"} ],
  clients:["Backend Development","REST APIs","Server & Deployment","Automation","Full-Stack","Databases","Clean Code","Problem Solving"],
  about:{ lead:"I build the backend that makes things work — then ship it.",
    body:"I'm a junior software engineer who works full-stack, but I'm strongest on the backend — building APIs and services with <code>Python</code> and <code>Node.js</code>, working with databases, and deploying to <code>Linux</code> servers. I also handle the frontend with <code>HTML</code>, <code>CSS</code> &amp; <code>JavaScript</code> when a project needs it, and I love automating repetitive work with <code>AI</code>.",
    tags:["backend","python","node.js","server-deployment","full-stack","ai-automation"],
    terminal:["const dev = 'Malik';","while (learning) { build(); }","deploy(); // ✓ live","automate.everything();"],
    stats:[{val:6,suf:"+",l:"Languages & tools"},{val:1,suf:"+",l:"Years coding"},{val:100,suf:"%",l:"Ownership"},{val:3,suf:"+",l:"Projects building"}] },
  services:[
    {icon:"backend",title:"Backend Development",sig:"api()",desc:"APIs, services and server-side logic in Python & Node.js."},
    {icon:"deploy",title:"Server & Deployment",sig:"deploy()",desc:"Deploying and running apps on Linux servers — setup to live."},
    {icon:"web",title:"Full-Stack Web Apps",sig:"buildApp()",desc:"End-to-end apps — backend, database and a clean frontend."},
    {icon:"auto",title:"AI Automation",sig:"automate()",desc:"Automating repetitive tasks and building AI-powered workflows."} ],
  marquee:["Python","Node.js","JavaScript","Express","REST APIs","MySQL","SQL","SQLite","Linux","Git","HTML","CSS","AI Automation"],
  skills:[
    {cat:"Backend",items:["Python","Node.js","Express","REST APIs"]},
    {cat:"Databases",items:["MySQL","SQL","SQLite"]},
    {cat:"Frontend",items:["HTML","CSS","JavaScript"]},
    {cat:"Tools & Ops",items:["Linux","Git","Server Deployment"]},
    {cat:"Sharpening next",items:["AI Automation","Advanced Node.js","System Design"]},
  ],
  projects:[
    {title:"portfolio-site",cat:"Live",tag:"Live site",year:"2025",sub:"This portfolio — hand-coded, no frameworks",palette:["#B0A0FF","#6A5BE0"],v:1,lang:"JavaScript",status:"live",
      stack:["HTML","CSS","JavaScript"],live:"https://iam-malikafan.github.io",repo:"https://github.com/iam-malikafan/iam-malikafan.github.io",
      long:"My personal portfolio, built from scratch with vanilla HTML, CSS and JavaScript — responsive across all screens, light/dark mode, and a code-editor theme. No frameworks, no build step."},
    {title:"rest-api",cat:"Backend",tag:"API",year:"2025",sub:"A clean REST API with Node.js & Express",palette:["#6FD0C7","#2E8B84"],v:0,lang:"Node.js",status:"building",
      stack:["Node.js","Express","REST APIs"],live:"#",repo:"#",
      long:"A REST API built with Node.js and Express — routing, controllers, validation and JSON responses, backed by a database. Focused on clean, well-structured backend code."},
    {title:"automation-bot",cat:"Automation",tag:"AI",year:"2025",sub:"AI-powered automation tool in Python",palette:["#B0A0FF","#6A5BE0"],v:3,lang:"Python",status:"building",
      stack:["Python","AI Automation"],live:"#",repo:"#",
      long:"A Python automation tool that uses AI to handle repetitive work — takes input, calls an AI model and produces structured output automatically, saving real time."},
    {title:"fullstack-app",cat:"Full-stack",tag:"App",year:"2025",sub:"End-to-end app: API + database + UI",palette:["#F0A868","#C86A2E"],v:2,lang:"Node.js",status:"building",
      stack:["Node.js","MySQL","JavaScript"],live:"#",repo:"#",
      long:"A full-stack web app — Node.js backend with a MySQL database and a clean JavaScript frontend. CRUD, basic auth and a tidy API layer."},
    {title:"web-scraper",cat:"Automation",tag:"Python",year:"2024",sub:"Data scraper & pipeline in Python",palette:["#7AC49A","#3E8E63"],v:0,lang:"Python",status:"building",
      stack:["Python","REST APIs"],live:"#",repo:"#",
      long:"A Python scraper that collects data from the web, cleans it and stores it — practising requests, parsing and reliable, respectful scraping."},
    {title:"cli-tool",cat:"Backend",tag:"CLI",year:"2024",sub:"A handy command-line automation tool",palette:["#E39BC0","#B0568C"],v:1,lang:"Python",status:"building",
      stack:["Python"],live:"#",repo:"#",
      long:"A small command-line tool that automates a real task — argument parsing, clean output and error handling, packaged to run anywhere."} ],
  process:[
    {n:"step[0]",title:"Understand",desc:"Get the problem and the goal clear before writing a line of code."},
    {n:"step[1]",title:"Build & iterate",desc:"Ship in small pieces, test as I go, and refine fast."},
    {n:"step[2]",title:"Deploy & maintain",desc:"Clean the code, deploy it to a server, and keep it running."} ],
  experience:[
    {co:"Software House",ro:"Junior Software Engineer",dt:"2025 — Now",palette:["#B0A0FF","#6A5BE0"]},
    {co:"Self-taught",ro:"Backend · Python · Node.js",dt:"2024 — 2025",palette:["#6FD0C7","#2E8B84"]},
    {co:"Learning to code",ro:"Programming fundamentals",dt:"2023 — 2024",palette:["#F0A868","#C86A2E"]} ],
  now:[{k:"Building",v:"APIs & automation tools"},{k:"Learning",v:"Deeper Node.js & Python"},{k:"Exploring",v:"AI-powered automation"}],
  commits:[
    {h:"a3f9c1",type:"feat",m:"add dark mode toggle",t:"2h ago"},
    {h:"7be204",type:"style",m:"polish responsive hero",t:"1d ago"},
    {h:"1c88de",type:"feat",m:"build contact form",t:"2d ago"},
    {h:"e50a77",type:"fix",m:"center portrait on mobile",t:"4d ago"},
    {h:"9d2b10",type:"chore",m:"init portfolio",t:"5d ago"} ],
  deploy:[
    {c:"com",t:"$ git push origin main"},{c:"dim",t:"→ deploying to GitHub Pages ..."},{c:"ok",t:"✓ build complete"},
    {c:"dim",t:"→ publishing site ..."},{c:"path",t:"  branch: main  ·  /(root)"},{c:"ok",t:"✓ live at https://iam-malikafan.github.io"} ],
  testimonials:[
    {q:"He turns messy, half-defined problems into systems that just quietly work.",nm:"A. Rahman",rl:"Project Lead",c:"#6A5BE0"},
    {q:"Shipped faster than anyone expected — and it's still running untouched a year later.",nm:"S. Malik",rl:"Founder, Basewave",c:"#2E8B84"},
    {q:"Rare mix: writes clean code and actually thinks about the details.",nm:"J. Ortiz",rl:"Eng Manager",c:"#C86A2E"} ],
  contact:{ titleLines:["Let's build","*something great*."], cta:[
    {label:"GitHub ↗",href:"https://github.com/iam-malikafan"},
    {label:"LinkedIn ↗",href:"https://www.linkedin.com/in/malikafan"},
    {label:"X (Twitter) ↗",href:"#"} ] },
};
const CODE_LINES=["const app = () => {};","document.querySelector('.x')","fetch('/api/data')","addEventListener('click', fn)","for (const el of items)","if (res.ok) render(data)","git commit -m 'ship it'","<div class=\"card\"></div>","SELECT * FROM users;","Route::get('/', fn)","const [x,setX]=useState(0);","php artisan serve","npm run dev","el.classList.toggle('on')"];

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const IS_TOUCH=matchMedia("(hover: none)").matches||"ontouchstart" in window;
const IS_MOBILE=matchMedia("(max-width:860px)").matches;
const REDUCED=matchMedia("(prefers-reduced-motion: reduce)").matches;
const accOutline=s=>s.replace(/\*([^*]+)\*/g,'<span class="outline">$1</span>');
const extAttr=h=>(/^https?:/i.test(h)?' target="_blank" rel="noopener"':'');
function mockThumb([c1,c2],seed=0,v=0){
  const g=`<defs><linearGradient id="g${seed}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="320" height="200" fill="url(#g${seed})"/>`;
  const dots=`<g fill="rgba(255,255,255,.9)"><circle cx="26" cy="24" r="4"/><circle cx="40" cy="24" r="4"/><circle cx="54" cy="24" r="4"/></g>`;
  let b="";
  if(v===0)b=`<rect x="26" y="52" width="150" height="14" rx="7" fill="rgba(255,255,255,.85)"/><rect x="26" y="76" width="110" height="10" rx="5" fill="rgba(255,255,255,.5)"/><rect x="26" y="118" width="120" height="52" rx="10" fill="rgba(255,255,255,.16)"/><rect x="164" y="118" width="130" height="52" rx="10" fill="rgba(255,255,255,.28)"/>`;
  else if(v===1)b=`<rect x="26" y="46" width="70" height="128" rx="10" fill="rgba(0,0,0,.12)"/><rect x="112" y="52" width="182" height="16" rx="8" fill="rgba(255,255,255,.85)"/><rect x="112" y="82" width="120" height="10" rx="5" fill="rgba(255,255,255,.5)"/><g fill="rgba(255,255,255,.28)"><rect x="112" y="110" width="55" height="60" rx="8"/><rect x="176" y="110" width="55" height="60" rx="8"/><rect x="240" y="110" width="54" height="60" rx="8"/></g>`;
  else if(v===2)b=`<rect x="118" y="40" width="84" height="150" rx="16" fill="rgba(255,255,255,.9)"/><g fill="rgba(0,0,0,.14)"><rect x="130" y="58" width="60" height="10" rx="5"/><rect x="130" y="80" width="60" height="30" rx="6"/><rect x="130" y="120" width="60" height="10" rx="5"/></g>`;
  else b=`<polyline points="26,150 80,110 130,130 190,70 250,96 300,50" fill="none" stroke="rgba(255,255,255,.9)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><g fill="rgba(255,255,255,.28)"><rect x="26" y="46" width="80" height="34" rx="8"/><rect x="118" y="46" width="80" height="34" rx="8"/></g>`;
  return `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">${g}${dots}${b}</svg>`;
}
const ICONS={
  backend:`<path d="M4 6h16v5H4zM4 13h16v5H4zM7 8.5h.01M7 15.5h.01" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`,
  auto:`<path d="M4 12a8 8 0 0113.7-5.6M20 12a8 8 0 01-13.7 5.6M17 4v3h-3M7 20v-3h3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`,
  web:`<path d="M3 6h18v12H3zM3 9h18M6 7.2h.01M8.5 7.2h.01" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`,
  deploy:`<path d="M12 3l4 6h-2.5v5h-3V9H8zM6 18h12M6 21h12" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>` };
function profileCode(){ const L=(n,h)=>`<div><span class="ln">${n}</span>${h}</div>`;
  return [L(1,`<span class="tk-kw">const</span> <span class="tk-prop">profile</span> <span class="tk-punc">=</span> <span class="tk-punc">{</span>`),
    L(2,`&nbsp;&nbsp;name<span class="tk-punc">:</span> <span class="tk-str">"Malik Afan"</span><span class="tk-punc">,</span>`),
    L(3,`&nbsp;&nbsp;role<span class="tk-punc">:</span> <span class="tk-str">"Junior Software Engineer"</span><span class="tk-punc">,</span>`),
    L(4,`&nbsp;&nbsp;stack<span class="tk-punc">:</span> <span class="tk-punc">[</span><span class="tk-str">"Python"</span><span class="tk-punc">,</span> <span class="tk-str">"Node.js"</span><span class="tk-punc">,</span> <span class="tk-str">"JS"</span><span class="tk-punc">]</span><span class="tk-punc">,</span>`),
    L(5,`&nbsp;&nbsp;learning<span class="tk-punc">:</span> <span class="tk-kw">true</span><span class="tk-punc">,</span>`),
    L(6,`&nbsp;&nbsp;available<span class="tk-punc">:</span> <span class="tk-kw">true</span><span class="tk-punc">,</span>`),
    L(7,`<span class="tk-punc">}</span><span class="tk-punc">;</span>`)].join(""); }

/* ============================ hydrate ============================ */
function hydrate(){
  const id=SITE.identity;
  $("[data-mark]").textContent=id.brand;
  $("[data-fb-name]").textContent=id.brand;
  $("[data-fb-links]").innerHTML=SITE.nav.map(n=>`<a href="${n.href}">${n.label}</a>`).join("");
  $("[data-availability]").insertAdjacentHTML("beforeend",` ${id.availability}`);
  $("[data-availability2]").insertAdjacentHTML("beforeend",` ${id.availability}`);
  $("[data-nav]").innerHTML=SITE.nav.map(n=>`<a href="${n.href}" data-cursor>${n.label}${n.count?`<sup>[${n.count}]</sup>`:""}</a>`).join("");
  $("[data-loc]").textContent=id.location;
  $("[data-current]").textContent=id.current;
  $("[data-hero-name]").innerHTML=`<span class="word outline"><span>${id.first.toUpperCase()}</span></span><span class="word solid"><span>${id.last.toUpperCase()}</span></span>`;
  $("[data-role]").textContent=id.role;
  $("[data-blurb]").textContent=id.blurb;
  $("[data-socials]").innerHTML=SITE.socials.map(s=>`<a class="pill" href="${s.href}"${extAttr(s.href)} data-cursor>${s.k} <span class="a">↗</span></a>`).join("");
  const clients=`<span>${SITE.clients.join('</span><span>')}</span>`; $("[data-clients]").innerHTML=clients+clients;
  $("[data-lead]").textContent=SITE.about.lead;
  $("[data-body]").innerHTML=SITE.about.body;
  $("[data-tags]").innerHTML=SITE.about.tags.map(t=>`<span><b>#</b>${t}</span>`).join("");
  $("[data-profile]").innerHTML=profileCode();
  $("[data-stats]").innerHTML=SITE.about.stats.map(s=>`<div class="stat reveal"><div class="n" data-val="${s.val}" data-suf="${s.suf}" data-dec="${s.dec||0}">0${s.suf}</div><div class="l">${s.l}</div></div>`).join("");
  $("[data-services]").innerHTML=SITE.services.map((s,i)=>`<div class="svc reveal" data-cursor><span class="n">0${i+1}</span><div class="ic"><svg viewBox="0 0 24 24">${ICONS[s.icon]}</svg></div><h3>${s.title}</h3><div class="sig"><span class="tk-fn">${s.sig.replace("()","")}</span><span class="tk-punc">()</span></div><p>${s.desc}</p></div>`).join("");
  $("[data-marquee]").innerHTML=(SITE.marquee.map(t=>`<span class="chip"><i style="background:${LANG[t]||"#888"}"></i>${t}</span>`).join("")).repeat(2);
  const cats=["All",...Array.from(new Set(SITE.projects.map(p=>p.cat)))];
  $("[data-tabs]").innerHTML=cats.map((c,i)=>`<button class="tab${i===0?" active":""}" data-cat="${c}">${c}</button>`).join("");
  $("[data-projects]").innerHTML=SITE.projects.map((p,i)=>`<article class="card reveal" data-cat="${p.cat}" data-view data-i="${i}" style="cursor:pointer"><div class="thumb"><span class="tag">${p.tag}</span><span class="vis">${p.status}</span><span class="arw">↗</span><div class="art">${mockThumb(p.palette,i,p.v)}</div></div><div class="meta"><div class="top"><h3><span class="slash">malik/</span>${p.title}</h3><div class="yr" style="font-family:var(--fm);font-size:.78rem;color:var(--faint)">${p.year}</div></div><div class="sub">${p.sub}</div><div class="repo-meta"><span class="lang"><i style="background:${LANG[p.lang]||"#888"}"></i>${p.lang}</span><span>view details ↗</span></div></div></article>`).join("");
  $("[data-skills]").innerHTML=SITE.skills.map((g,i)=>`<div class="skill-cat reveal"><div class="sk-head"><span class="sk-n">0${i+1}</span><h3>${g.cat}</h3></div><div class="sk-items">${g.items.map(t=>`<span class="sk-chip"><i style="background:${LANG[t]||"var(--green)"}"></i>${t}</span>`).join("")}</div></div>`).join("");
  $("[data-process]").innerHTML=SITE.process.map(s=>`<div class="step reveal"><div class="n">${s.n}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`).join("");
  $("[data-years]").textContent=id.years+" of experience";
  $("[data-experience]").innerHTML=SITE.experience.map((e,i)=>`<div class="exp-row" data-i="${i}"><div class="en">0${i+1}</div><div><div class="co">${e.co}</div><div class="ro">${e.ro}</div></div><div class="dt">${e.dt}</div></div>`).join("");
  $("[data-now]").innerHTML=SITE.now.map(n=>`<div class="now-item reveal"><div class="k">${n.k}</div><div class="v">${n.v}</div></div>`).join("");
  $("[data-gitlog]").innerHTML=SITE.commits.map(c=>`<div class="git-row"><span class="h">${c.h}</span><span class="m"><b>${c.type}:</b> ${c.m}</span><span class="t">${c.t}</span></div>`).join("");
  $("[data-testimonials]").innerHTML=SITE.testimonials.map(t=>{const ini=t.nm.split(" ").map(w=>w[0]).join("").slice(0,2);
    return `<div class="tcard reveal"><div class="rtag">reviewed profile.ts</div><blockquote>${t.q}</blockquote><div class="who"><span class="av" style="background:${t.c}">${ini}</span><div><div class="nm">${t.nm}</div><div class="rl">${t.rl}</div></div></div></div>`;}).join("");
  $("[data-contact-title]").innerHTML=SITE.contact.titleLines.map(l=>accOutline(l)).join("<br>");
  $("[data-contact-cta]").innerHTML=SITE.contact.cta.map(c=>`<a class="pill${c.solid?" solid":""}" href="${c.href}"${extAttr(c.href)} data-cursor>${c.label}</a>`).join("");
  $("[data-fbrand]").textContent=id.brand;
  $("[data-fnav]").innerHTML=`<h4>Menu</h4>`+SITE.nav.map(n=>`<a href="${n.href}">${n.label}</a>`).join("");
  $("[data-fsocial]").innerHTML=`<h4>Elsewhere</h4>`+SITE.socials.map(s=>`<a href="${s.href}"${extAttr(s.href)}>${s.k}</a>`).join("");
}

/* ============================ hero code window ============================ */
function initCodeWin(){
  const box=$("[data-codewin]"); if(!box) return;
  const lines=[
    `<span class="tk-kw">const</span> <span class="tk-prop">malik</span> <span class="tk-punc">=</span> <span class="tk-punc">{</span>`,
    `&nbsp;&nbsp;role<span class="tk-punc">:</span> <span class="tk-str">"Software Engineer"</span><span class="tk-punc">,</span>`,
    `&nbsp;&nbsp;stack<span class="tk-punc">:</span> <span class="tk-punc">[</span><span class="tk-str">"Python"</span><span class="tk-punc">,</span> <span class="tk-str">"Node.js"</span><span class="tk-punc">]</span><span class="tk-punc">,</span>`,
    `&nbsp;&nbsp;learns<span class="tk-punc">:</span> <span class="tk-kw">true</span><span class="tk-punc">,</span>`,
    `<span class="tk-punc">}</span><span class="tk-punc">;</span>`,
    ``,
    `<span class="tk-kw">async function</span> <span class="tk-fn">build</span><span class="tk-punc">(</span>idea<span class="tk-punc">)</span> <span class="tk-punc">{</span>`
  ];
  let html=lines.map((l,i)=>`<div><span class="ln">${l===""?"&nbsp;":i+1}</span>${l}</div>`).join("");
  html+=`<div><span class="ln">${lines.length+1}</span>&nbsp;&nbsp;<span class="tk-kw">return</span> <span class="tk-kw">await</span> <span class="tk-fn">ship</span><span class="tk-punc">(</span><span class="tk-str">"<span id="cw-type"></span>"</span><span class="cw-cur"></span><span class="tk-punc">);</span></div>`;
  html+=`<div><span class="ln">${lines.length+2}</span><span class="tk-punc">}</span></div>`;
  box.innerHTML=html;
  const el=$("#cw-type"); if(!el||REDUCED){ if(el) el.textContent="idea"; return; }
  const opts=["an API","a service","automation","a tool"]; let li=0,ci=0,del=false;
  (function tick(){ const w=opts[li];
    if(!del){ el.textContent=w.slice(0,++ci); if(ci===w.length){ del=true; return setTimeout(tick,1700);} }
    else{ el.textContent=w.slice(0,--ci); if(ci===0){ del=false; li=(li+1)%opts.length; } }
    setTimeout(tick,del?45:95); })();
}

/* ============================ project modal ============================ */
function initProjectModal(){
  const style=document.createElement("style");
  style.textContent=`
  .pmodal{ position:fixed; inset:0; z-index:2000; display:grid; place-items:center; padding:1.2rem; opacity:0; pointer-events:none; transition:opacity .3s var(--ease); }
  .pmodal.show{ opacity:1; pointer-events:auto; }
  .pmodal-bg{ position:absolute; inset:0; background:rgba(8,10,14,.6); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); }
  .pmodal-card{ position:relative; z-index:1; width:min(660px,100%); max-height:88svh; overflow:auto; background:var(--card); border:1px solid var(--line); border-radius:20px; box-shadow:0 40px 100px -30px rgba(8,12,18,.6); transform:translateY(18px) scale(.98); transition:transform .35s var(--ease); }
  .pmodal.show .pmodal-card{ transform:none; }
  .pmodal-x{ position:absolute; top:.9rem; right:.9rem; z-index:2; width:38px; height:38px; border-radius:50%; border:1px solid var(--line); background:var(--card); color:var(--ink); cursor:pointer; font-size:.95rem; display:grid; place-items:center; transition:border-color .25s var(--ease); }
  .pmodal-x:hover{ border-color:var(--ink); }
  .pmodal-thumb{ aspect-ratio:16/8; overflow:hidden; border-radius:19px 19px 0 0; } .pmodal-thumb svg{ width:100%; height:100%; }
  .pmodal-in{ padding:1.4rem clamp(1.2rem,3vw,2rem) 1.8rem; }
  .pmodal-top{ display:flex; gap:1rem; align-items:center; font-family:var(--fm); font-size:.72rem; color:var(--faint); text-transform:uppercase; letter-spacing:.06em; margin-bottom:.5rem; }
  .pmodal-top .cat{ color:var(--green); }
  .pmodal-in h3{ font-family:var(--fd); font-weight:700; font-size:clamp(1.4rem,3vw,1.9rem); line-height:1.1; }
  .pmodal-in h3 .s{ color:var(--faint); font-weight:500; }
  .pmodal-desc{ color:var(--dim); margin:.8rem 0 1.2rem; line-height:1.6; font-size:.98rem; }
  .pmodal-tech{ display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom:1.4rem; }
  .pm-chip{ display:inline-flex; align-items:center; gap:.45rem; font-family:var(--fm); font-size:.78rem; border:1px solid var(--line); border-radius:100px; padding:.35rem .8rem; }
  .pm-chip i{ width:9px; height:9px; border-radius:50%; }
  .pmodal-links{ display:flex; gap:.7rem; flex-wrap:wrap; align-items:center; }
  .pmodal-soon{ font-family:var(--fm); font-size:.82rem; color:var(--faint); }`;
  document.head.appendChild(style);

  const m=document.createElement("div"); m.className="pmodal"; m.setAttribute("aria-hidden","true");
  m.innerHTML=`<div class="pmodal-bg" data-pmclose></div><div class="pmodal-card" role="dialog" aria-modal="true">
    <button class="pmodal-x" data-pmclose aria-label="Close">✕</button>
    <div class="pmodal-thumb" data-pm-thumb></div>
    <div class="pmodal-in">
      <div class="pmodal-top"><span class="cat" data-pm-cat></span><span data-pm-year></span></div>
      <h3 data-pm-title></h3>
      <p class="pmodal-desc" data-pm-desc></p>
      <div class="pmodal-tech" data-pm-tech></div>
      <div class="pmodal-links" data-pm-links></div>
    </div></div>`;
  document.body.appendChild(m);

  function open(i){
    const p=SITE.projects[i]; if(!p) return;
    $("[data-pm-thumb]",m).innerHTML=mockThumb(p.palette,i,p.v);
    $("[data-pm-cat]",m).textContent=p.cat;
    $("[data-pm-year]",m).textContent=p.year+" · "+p.status;
    $("[data-pm-title]",m).innerHTML=`<span class="s">malik/</span>${p.title}`;
    $("[data-pm-desc]",m).textContent=p.long||p.sub;
    $("[data-pm-tech]",m).innerHTML=(p.stack||[]).map(t=>`<span class="pm-chip"><i style="background:${LANG[t]||"#888"}"></i>${t}</span>`).join("");
    let links="";
    if(p.live&&p.live!=="#") links+=`<a class="pill solid" href="${p.live}" target="_blank" rel="noopener">Live ↗</a>`;
    if(p.repo&&p.repo!=="#") links+=`<a class="pill" href="${p.repo}" target="_blank" rel="noopener">GitHub ↗</a>`;
    if(!links) links=`<span class="pmodal-soon">// in progress — links coming soon</span>`;
    $("[data-pm-links]",m).innerHTML=links;
    m.classList.add("show"); m.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
  }
  function close(){ m.classList.remove("show"); m.setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
  $$("[data-pmclose]",m).forEach(el=>el.addEventListener("click",close));
  document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&m.classList.contains("show")) close(); });
  $$(".card").forEach(card=>card.addEventListener("click",()=>open(+card.dataset.i)));
}

/* ============================ vanilla continuous anims ============================ */
function initCodeRain(){ const box=$(".coderain"); if(!box||REDUCED) return;
  const cols=IS_MOBILE?3:5;
  for(let i=0;i<cols;i++){ const c=document.createElement("div"); c.className="cr-col";
    c.style.left=(i/cols)*100+(Math.random()*3)+"%"; c.style.animationDuration=(16+Math.random()*12)+"s"; c.style.animationDelay=(-Math.random()*16)+"s";
    let block=""; for(let j=0;j<26;j++) block+=CODE_LINES[Math.floor(Math.random()*CODE_LINES.length)]+"\n"; c.textContent=block+block; box.appendChild(c); } }
function initChips(){ const syms=["{ }","</>","( )","=>",";","[]","&&","::","#!","//","0x1F","...","??"];
  $$(".chips-float").forEach(box=>{ const n=IS_MOBILE?4:6;
    for(let i=0;i<n;i++){ const c=document.createElement("span"); c.className="chip"; c.textContent=syms[Math.floor(Math.random()*syms.length)];
      c.style.left=Math.random()*92+"%"; c.style.top=Math.random()*88+"%"; c.style.fontSize=(1.1+Math.random()*2.2)+"rem";
      c.style.animationDuration=(9+Math.random()*8)+"s"; c.style.animationDelay=(-Math.random()*10)+"s"; box.appendChild(c); } }); }
function initStatusbar(){ const clock=$("[data-clock]"), ln=$("[data-lncol]"); if(!clock) return;
  setInterval(()=>{ const d=new Date(); clock.textContent=d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});
    if(ln) ln.textContent=`Ln ${20+Math.floor(Math.random()*260)}, Col ${4+Math.floor(Math.random()*40)}`; },1000); }
function initDeployLog(){ const box=$("[data-deploy]"); if(!box) return;
  box.innerHTML=SITE.deploy.map(l=>`<div class="dl ${l.c==="ok"?"ok":l.c==="path"?"path":""}" style="${l.c==="dim"?"color:var(--d-dim)":l.c==="com"?"color:var(--c-com)":""}">${l.t}</div>`).join("")+`<div class="dl" style="color:var(--d-dim)">$ <span class="cur"></span></div>`;
  const els=$$(".dl",box);
  function run(){ els.forEach(e=>e.classList.remove("on")); els.forEach((e,i)=>setTimeout(()=>e.classList.add("on"),300+i*420)); setTimeout(run,300+els.length*420+3500); }
  REDUCED?els.forEach(e=>e.classList.add("on")):run(); }
function initTerminal(){ const el=$("[data-type]"); if(!el) return;
  const lines=SITE.about.terminal; let li=0,ci=0,del=false;
  (function tick(){ const line=lines[li];
    if(!del){ el.textContent=line.slice(0,++ci); if(ci===line.length){ del=true; return setTimeout(tick,1400);} }
    else{ el.textContent=line.slice(0,--ci); if(ci===0){ del=false; li=(li+1)%lines.length; } }
    setTimeout(tick,del?34:60); })(); }

/* ============================ pointer ============================ */
function previewHTML(pal,seed,v,label){ return `<div class="hp-bar"><i></i><i></i><i></i><em>${label}</em></div><div class="hp-img">${mockThumb(pal,seed,v)}</div>`; }
function initPointer(){
  if(IS_TOUCH) return;
  const preview=$(".hover-preview");
  const p={x:innerWidth/2,y:innerHeight/2};
  window.addEventListener("pointermove",e=>{ p.x=e.clientX; p.y=e.clientY; },{passive:true});
  let pvActive=false;
  const show=h=>{ preview.innerHTML=h; preview.classList.add("show"); pvActive=true; };
  const hide=()=>{ preview.classList.remove("show"); pvActive=false; };
  $$(".exp-row").forEach(row=>{ const e=SITE.experience[+row.dataset.i];
    row.addEventListener("pointerenter",()=>show(previewHTML(e.palette,100+(+row.dataset.i),(+row.dataset.i)%4,e.co+" — "+e.ro)));
    row.addEventListener("pointerleave",hide); });
  $$(".card").forEach(card=>{ const pr=SITE.projects[+card.dataset.i];
    card.addEventListener("pointerenter",()=>show(previewHTML(pr.palette,200+(+card.dataset.i),pr.v,"malik/"+pr.title)));
    card.addEventListener("pointerleave",hide); });
  const blobs=REDUCED?[]:$$(".blob").map(el=>({el,d:parseFloat(el.dataset.depth)||12,x:0,y:0}));
  let pvx=p.x,pvy=p.y;
  if(!blobs.length && IS_TOUCH) return;
  (function frame(){
    if(blobs.length){ const ox=p.x/innerWidth*2-1, oy=p.y/innerHeight*2-1;
      for(const b of blobs){ b.x+=(ox*b.d-b.x)*0.09; b.y+=(oy*b.d-b.y)*0.09; b.el.style.transform=`translate3d(${b.x}px,${b.y}px,0)`; } }
    if(pvActive){ pvx+=(p.x+30-pvx)*0.2; pvy+=(p.y+12-pvy)*0.2; preview.style.transform=`translate3d(${pvx}px,${pvy}px,0) translate(-50%,-50%) rotate(-4deg)`; }
    requestAnimationFrame(frame);
  })();
}

/* ============================ reveal + count-up ============================ */
function initReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }),{rootMargin:"0px 0px -8% 0px"});
  $$(".reveal").forEach(el=>io.observe(el));
  const cio=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ countUp(e.target); cio.unobserve(e.target); } }),{rootMargin:"0px 0px -5% 0px"});
  $$("[data-val]").forEach(el=>cio.observe(el));
}
function countUp(el){ const val=parseFloat(el.dataset.val), suf=el.dataset.suf||"", dec=parseInt(el.dataset.dec)||0;
  if(REDUCED){ el.textContent=(dec?val.toFixed(dec):val)+suf; return; }
  let s=null;
  requestAnimationFrame(function step(t){ if(!s)s=t; const p=Math.min((t-s)/1400,1), v=val*(1-Math.pow(1-p,3));
    el.textContent=(dec?v.toFixed(dec):Math.round(v))+suf; if(p<1) requestAnimationFrame(step); });
}

/* ============================ nav + work ============================ */
function initNav(){
  const toggle=$(".nav-toggle"), links=$(".links"), floatbar=$(".floatbar"), hero=$("#hero");
  toggle.addEventListener("click",()=>{ toggle.classList.toggle("open"); links.classList.toggle("open"); });
  $$(".links a").forEach(a=>a.addEventListener("click",()=>{ toggle.classList.remove("open"); links.classList.remove("open"); }));
  new IntersectionObserver(es=>es.forEach(e=>floatbar.classList.toggle("show",!e.isIntersecting)),{rootMargin:"-120px 0px 0px 0px"}).observe(hero);
  const map={}; $$(".links a").forEach(a=>{ const id=a.getAttribute("href").slice(1); if(id) map[id]=a; });
  const io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){ $$(".links a").forEach(x=>x.classList.remove("active")); if(map[en.target.id]) map[en.target.id].classList.add("active"); } }),{rootMargin:"-45% 0px -50% 0px"});
  ["services","skills","work","experience","contact"].forEach(id=>{ const s=document.getElementById(id); if(s) io.observe(s); });
}
function initWork(){
  const tabs=$$(".tab"), cards=$$(".card");
  tabs.forEach(tab=>tab.addEventListener("click",()=>{ tabs.forEach(t=>t.classList.remove("active")); tab.classList.add("active");
    const cat=tab.dataset.cat; cards.forEach(c=>{ const show=cat==="All"||c.dataset.cat===cat; c.classList.toggle("hide",!show); c.classList.add("in"); }); }));
}

function initTheme(){
  const btn=$("[data-theme-toggle]"); if(!btn) return;
  const root=document.documentElement; let t=null;
  btn.addEventListener("click",()=>{
    root.classList.add("theme-anim");
    const next=root.getAttribute("data-theme")==="dark"?"light":"dark";
    root.setAttribute("data-theme",next);
    try{ localStorage.setItem("theme",next); }catch(e){}
    clearTimeout(t); t=setTimeout(()=>root.classList.remove("theme-anim"),480);
  });
}
function initContactForm(){
  const form=$("[data-contact-form]"); if(!form) return;
  const note=$("[data-cf-note]");
  /* ── Working contact form ─────────────────────────────────────────────
     Get a FREE access key at https://web3forms.com (enter your email → key
     is emailed instantly). Paste it below and messages land in your inbox.
     Until then it falls back to opening your email app (mailto).            */
  const ACCESS_KEY="YOUR_WEB3FORMS_ACCESS_KEY";
  const EMAIL="iam.malikafan@gmail.com";
  form.addEventListener("submit",async e=>{
    e.preventDefault();
    const name=(form.name.value||"").trim(), email=(form.email.value||"").trim(), msg=(form.message.value||"").trim();
    if(!name||!email||!msg){ note.textContent="// please fill in all fields"; note.className="cf-note err"; return; }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ note.textContent="// enter a valid email"; note.className="cf-note err"; return; }
    if(!ACCESS_KEY || ACCESS_KEY.indexOf("YOUR_")===0){
      window.location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Portfolio message from "+name)+"&body="+encodeURIComponent(msg+"\n\n— "+name+" ("+email+")");
      note.textContent="// opening your email app…"; note.className="cf-note ok"; return;
    }
    note.textContent="// sending…"; note.className="cf-note";
    try{
      const res=await fetch("https://api.web3forms.com/submit",{method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({access_key:ACCESS_KEY,name,email,message:msg,subject:"New portfolio message from "+name})});
      const data=await res.json();
      if(data.success){ note.textContent="// message sent — I'll reply soon ✓"; note.className="cf-note ok"; form.reset(); }
      else{ note.textContent="// couldn't send — try again or email me directly"; note.className="cf-note err"; }
    }catch(err){ note.textContent="// network error — please try again"; note.className="cf-note err"; }
  });
}

window.addEventListener("DOMContentLoaded",()=>{
  try{
    hydrate();
    initCodeWin(); initCodeRain(); initChips(); initStatusbar(); initDeployLog(); initTerminal();
    initPointer(); initReveal(); initNav(); initWork(); initTheme(); initContactForm(); initProjectModal();
    setTimeout(()=>{ const l=$("#loader"); l.classList.add("hide"); setTimeout(()=>l.style.display="none",650); },700);
  }catch(err){ console.error(err); const l=$("#loader"); if(l) l.style.display="none"; $$(".reveal").forEach(el=>el.classList.add("in")); }
});
