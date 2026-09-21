/* ============================ Malik Afan — portfolio logic ============================ */
document.documentElement.classList.add("js");

const LANG = { "Python":"#3572A5","FastAPI":"#05998b","Flask":"#9aa0a6","JavaScript":"#f1e05a","Node.js":"#339933",
  "TypeScript":"#3178c6","Linux":"#FCC624","Docker":"#2496ED","PostgreSQL":"#336791","Redis":"#DC382D","Git":"#F05032",
  "Playwright":"#2EAD33","REST APIs":"#6a9955","Nginx":"#009639","Go":"#00ADD8","Rust":"#dea584" };

const SITE = {
  identity:{ first:"Malik", last:"Afan", brand:"Malik Afan", role:"Software Engineer",
    blurb:"Building practical software, automation systems and web apps — backend logic to production deployment.",
    availability:"Available for new work", location:"Pakistan", current:"building automation systems", years:"5+ years" },
  nav:[{label:"Services",href:"#services",count:"04"},{label:"Work",href:"#work",count:"06"},{label:"Experience",href:"#experience",count:"5y+"},{label:"Contact",href:"#contact"}],
  socials:[{k:"GitHub",href:"#"},{k:"LinkedIn",href:"#"},{k:"Email",href:"#"},{k:"X (Twitter)",href:"#"}],
  clients:["Northwind","Kite Labs","Basewave","Orbit","Pinecone","Studio Ten","Fathom","Maple"],
  about:{ lead:"I build the quiet systems behind products.",
    body:"The interesting problems are rarely the visible ones — they live in the <code>pipeline</code>, the <code>retry loop</code>, the thing that has to survive at 3am. I work close to the machine: backend logic, automation, and the infrastructure that keeps everything running, reliable, and easy to reason about.",
    tags:["backend","automation","infra","APIs","CI/CD"],
    terminal:["const dev = 'Malik';","while (coffee) { ship(); }","deploy(); // ✓ live","automate.everything();"],
    stats:[{val:12,suf:"+",l:"Systems shipped"},{val:5,suf:"y+",l:"Writing code"},{val:99.9,suf:"%",l:"Uptime focus",dec:1},{val:40,suf:"+",l:"Automations live"}] },
  services:[
    {icon:"backend",title:"Backend Engineering",sig:"backend()",desc:"APIs, services and data layers built to be typed, tested and boring in the best way."},
    {icon:"auto",title:"Automation",sig:"automate()",desc:"Scripts, workers and pipelines that do the repetitive work so people don't have to."},
    {icon:"web",title:"Web Applications",sig:"render()",desc:"Fast, accessible interfaces wired to real backends — not just pretty mockups."},
    {icon:"deploy",title:"Deployment & Ops",sig:"deploy()",desc:"Reverse proxies, CI, monitoring — getting it live and keeping it healthy."} ],
  marquee:["Python","FastAPI","Flask","JavaScript","Node.js","TypeScript","Linux","Docker","PostgreSQL","Redis","Git","Playwright","REST APIs","Nginx"],
  projects:[
    {title:"local-scope",cat:"Systems",tag:"Platform",year:"2025",sub:"Automated SEO intelligence platform",palette:["#B0A0FF","#6A5BE0"],v:1,lang:"TypeScript",stars:128,forks:24,vis:"public"},
    {title:"data-engine",cat:"Systems",tag:"Backend",year:"2025",sub:"High-volume web data extraction",palette:["#6FD0C7","#2E8B84"],v:3,lang:"Python",stars:94,forks:12,vis:"private"},
    {title:"automation-lab",cat:"Automation",tag:"Infra",year:"2024",sub:"Browser automation & workflows",palette:["#F0A868","#C86A2E"],v:0,lang:"Python",stars:61,forks:8,vis:"public"},
    {title:"proxy-mesh",cat:"Web",tag:"Tooling",year:"2024",sub:"Reverse-proxy tooling & billing",palette:["#8FA6C4","#465A78"],v:1,lang:"Go",stars:73,forks:15,vis:"private"},
    {title:"signal-board",cat:"Web",tag:"Dashboard",year:"2023",sub:"Realtime ops dashboard",palette:["#7AC49A","#3E8E63"],v:3,lang:"TypeScript",stars:47,forks:6,vis:"public"},
    {title:"cron-keeper",cat:"Automation",tag:"Service",year:"2023",sub:"Job scheduling & alerting",palette:["#E39BC0","#B0568C"],v:2,lang:"Rust",stars:39,forks:4,vis:"public"} ],
  process:[
    {n:"step[0]",title:"Discover & scope",desc:"Understand the real problem, the constraints, and what 'done' looks like."},
    {n:"step[1]",title:"Build & iterate",desc:"Ship in small loops with working software you can actually try."},
    {n:"step[2]",title:"Ship & maintain",desc:"Deploy, monitor, and keep it reliable long after launch day."} ],
  experience:[
    {co:"Independent",ro:"Software Engineer",dt:"2024 — Now",palette:["#B0A0FF","#6A5BE0"]},
    {co:"Studio North",ro:"Backend Developer",dt:"2022 — 2024",palette:["#6FD0C7","#2E8B84"]},
    {co:"Kite Labs",ro:"Automation Engineer",dt:"2021 — 2022",palette:["#F0A868","#C86A2E"]},
    {co:"Agency Ten",ro:"Full-stack Developer",dt:"2020 — 2021",palette:["#8FA6C4","#465A78"]},
    {co:"Freelance",ro:"Junior Developer",dt:"2019 — 2020",palette:["#E39BC0","#B0568C"]} ],
  now:[{k:"Building",v:"A workflow automation platform"},{k:"Learning",v:"Rust & systems programming"},{k:"Reading",v:"Designing Data-Intensive Apps"}],
  commits:[
    {h:"a3f9c1",type:"feat",m:"ship automation worker pool",t:"2h ago"},
    {h:"7be204",type:"fix",m:"retry backoff on 429s",t:"1d ago"},
    {h:"1c88de",type:"refactor",m:"extract proxy rotation",t:"2d ago"},
    {h:"e50a77",type:"perf",m:"cache hot ranking queries",t:"4d ago"},
    {h:"9d2b10",type:"chore",m:"bump deps + CI matrix",t:"5d ago"} ],
  deploy:[
    {c:"com",t:"$ npm run deploy"},{c:"dim",t:"→ building project ..."},{c:"ok",t:"✓ compiled 128 modules (2.4s)"},
    {c:"dim",t:"→ running tests ..."},{c:"ok",t:"✓ 214 passed, 0 failed"},{c:"dim",t:"→ pushing image ..."},
    {c:"path",t:"  malikafan/api:2.4.0  sha256:9f1c…"},{c:"dim",t:"→ rolling out to production ..."},{c:"ok",t:"✓ deployed. live at https://malikafan.dev"} ],
  testimonials:[
    {q:"He turns messy, half-defined problems into systems that just quietly work.",nm:"A. Rahman",rl:"Project Lead",c:"#6A5BE0"},
    {q:"Shipped faster than anyone expected — and it's still running untouched a year later.",nm:"S. Malik",rl:"Founder, Basewave",c:"#2E8B84"},
    {q:"Rare mix: writes clean backend code and actually thinks about ops and reliability.",nm:"J. Ortiz",rl:"Eng Manager",c:"#C86A2E"} ],
  contact:{ titleLines:["Let's build","*something useful*."], cta:[{label:"GitHub ↗",href:"#"},{label:"LinkedIn ↗",href:"#"},{label:"X (Twitter) ↗",href:"#"}] },
};
const CODE_LINES=["const app = express();","await db.connect();","for (const j of queue) run(j);","if (res.status===429) backoff();","export default handler;","return json({ ok:true });","docker build -t api .","git commit -m 'ship it'","async def main(): ...","SELECT * FROM users;","npm run deploy --prod","const [x,setX]=useState(0);","try { ship() } catch(e){}","curl -s https://api/health"];

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const IS_TOUCH=matchMedia("(hover: none)").matches||"ontouchstart" in window;
const IS_MOBILE=matchMedia("(max-width:860px)").matches;
const REDUCED=matchMedia("(prefers-reduced-motion: reduce)").matches;
const accOutline=s=>s.replace(/\*([^*]+)\*/g,'<span class="outline">$1</span>');
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
    L(3,`&nbsp;&nbsp;role<span class="tk-punc">:</span> <span class="tk-str">"Software Engineer"</span><span class="tk-punc">,</span>`),
    L(4,`&nbsp;&nbsp;stack<span class="tk-punc">:</span> <span class="tk-punc">[</span><span class="tk-str">"Python"</span><span class="tk-punc">,</span> <span class="tk-str">"FastAPI"</span><span class="tk-punc">,</span> <span class="tk-str">"Node"</span><span class="tk-punc">]</span><span class="tk-punc">,</span>`),
    L(5,`&nbsp;&nbsp;years<span class="tk-punc">:</span> <span class="tk-num">5</span><span class="tk-punc">,</span>`),
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
  $("[data-socials]").innerHTML=SITE.socials.map(s=>`<a class="pill" href="${s.href}" data-cursor>${s.k} <span class="a">↗</span></a>`).join("");
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
  $("[data-projects]").innerHTML=SITE.projects.map((p,i)=>`<article class="card reveal" data-cat="${p.cat}" data-view data-i="${i}"><div class="thumb"><span class="tag">${p.tag}</span><span class="vis">${p.vis}</span><span class="arw">↗</span><div class="art">${mockThumb(p.palette,i,p.v)}</div></div><div class="meta"><div class="top"><h3><span class="slash">malik/</span>${p.title}</h3><div class="yr" style="font-family:var(--fm);font-size:.78rem;color:var(--faint)">${p.year}</div></div><div class="sub">${p.sub}</div><div class="repo-meta"><span class="lang"><i style="background:${LANG[p.lang]||"#888"}"></i>${p.lang}</span><span>★ ${p.stars}</span><span>⑂ ${p.forks}</span></div></div></article>`).join("");
  $("[data-process]").innerHTML=SITE.process.map(s=>`<div class="step reveal"><div class="n">${s.n}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`).join("");
  $("[data-years]").textContent=id.years+" of experience";
  $("[data-experience]").innerHTML=SITE.experience.map((e,i)=>`<div class="exp-row" data-i="${i}"><div class="en">0${i+1}</div><div><div class="co">${e.co}</div><div class="ro">${e.ro}</div></div><div class="dt">${e.dt}</div></div>`).join("");
  $("[data-now]").innerHTML=SITE.now.map(n=>`<div class="now-item reveal"><div class="k">${n.k}</div><div class="v">${n.v}</div></div>`).join("");
  $("[data-gitlog]").innerHTML=SITE.commits.map(c=>`<div class="git-row"><span class="h">${c.h}</span><span class="m"><b>${c.type}:</b> ${c.m}</span><span class="t">${c.t}</span></div>`).join("");
  $("[data-testimonials]").innerHTML=SITE.testimonials.map(t=>{const ini=t.nm.split(" ").map(w=>w[0]).join("").slice(0,2);
    return `<div class="tcard reveal"><div class="rtag">reviewed profile.ts</div><blockquote>${t.q}</blockquote><div class="who"><span class="av" style="background:${t.c}">${ini}</span><div><div class="nm">${t.nm}</div><div class="rl">${t.rl}</div></div></div></div>`;}).join("");
  $("[data-contact-title]").innerHTML=SITE.contact.titleLines.map(l=>accOutline(l)).join("<br>");
  $("[data-contact-cta]").innerHTML=SITE.contact.cta.map(c=>`<a class="pill${c.solid?" solid":""}" href="${c.href}" data-cursor>${c.label}</a>`).join("");
  $("[data-fbrand]").textContent=id.brand;
  $("[data-fnav]").innerHTML=`<h4>Menu</h4>`+SITE.nav.map(n=>`<a href="${n.href}">${n.label}</a>`).join("");
  $("[data-fsocial]").innerHTML=`<h4>Elsewhere</h4>`+SITE.socials.map(s=>`<a href="${s.href}">${s.k}</a>`).join("");
}

/* ============================ hero code window ============================ */
function initCodeWin(){
  const box=$("[data-codewin]"); if(!box) return;
  const lines=[
    `<span class="tk-kw">const</span> <span class="tk-prop">malik</span> <span class="tk-punc">=</span> <span class="tk-punc">{</span>`,
    `&nbsp;&nbsp;role<span class="tk-punc">:</span> <span class="tk-str">"Software Engineer"</span><span class="tk-punc">,</span>`,
    `&nbsp;&nbsp;stack<span class="tk-punc">:</span> <span class="tk-punc">[</span><span class="tk-str">"Python"</span><span class="tk-punc">,</span> <span class="tk-str">"Node"</span><span class="tk-punc">]</span><span class="tk-punc">,</span>`,
    `&nbsp;&nbsp;ships<span class="tk-punc">:</span> <span class="tk-kw">true</span><span class="tk-punc">,</span>`,
    `<span class="tk-punc">}</span><span class="tk-punc">;</span>`,
    ``,
    `<span class="tk-kw">async function</span> <span class="tk-fn">build</span><span class="tk-punc">(</span>idea<span class="tk-punc">)</span> <span class="tk-punc">{</span>`
  ];
  let html=lines.map((l,i)=>`<div><span class="ln">${l===""?"&nbsp;":i+1}</span>${l}</div>`).join("");
  html+=`<div><span class="ln">${lines.length+1}</span>&nbsp;&nbsp;<span class="tk-kw">return</span> <span class="tk-kw">await</span> <span class="tk-fn">deploy</span><span class="tk-punc">(</span><span class="tk-str">"<span id="cw-type"></span>"</span><span class="cw-cur"></span><span class="tk-punc">);</span></div>`;
  html+=`<div><span class="ln">${lines.length+2}</span><span class="tk-punc">}</span></div>`;
  box.innerHTML=html;
  const el=$("#cw-type"); if(!el||REDUCED){ if(el) el.textContent="idea"; return; }
  const opts=["idea","spec","the mvp","backlog"]; let li=0,ci=0,del=false;
  (function tick(){ const w=opts[li];
    if(!del){ el.textContent=w.slice(0,++ci); if(ci===w.length){ del=true; return setTimeout(tick,1700);} }
    else{ el.textContent=w.slice(0,--ci); if(ci===0){ del=false; li=(li+1)%opts.length; } }
    setTimeout(tick,del?45:95); })();
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
  ["services","work","experience","contact"].forEach(id=>{ const s=document.getElementById(id); if(s) io.observe(s); });
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
  const EMAIL="hello@malikafan.dev"; /* ← put your real email here later (or plug a Formspree endpoint) */
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const name=(form.name.value||"").trim(), email=(form.email.value||"").trim(), msg=(form.message.value||"").trim();
    if(!name||!email||!msg){ note.textContent="// please fill in all fields"; note.className="cf-note err"; return; }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ note.textContent="// enter a valid email"; note.className="cf-note err"; return; }
    const subject=encodeURIComponent("Portfolio message from "+name);
    const body=encodeURIComponent(msg+"\n\n— "+name+" ("+email+")");
    window.location.href="mailto:"+EMAIL+"?subject="+subject+"&body="+body;
    note.textContent="// opening your email app…"; note.className="cf-note ok";
    form.reset();
  });
}

window.addEventListener("DOMContentLoaded",()=>{
  try{
    hydrate();
    initCodeWin(); initCodeRain(); initChips(); initStatusbar(); initDeployLog(); initTerminal();
    initPointer(); initReveal(); initNav(); initWork(); initTheme(); initContactForm();
    setTimeout(()=>{ const l=$("#loader"); l.classList.add("hide"); setTimeout(()=>l.style.display="none",650); },700);
  }catch(err){ console.error(err); const l=$("#loader"); if(l) l.style.display="none"; $$(".reveal").forEach(el=>el.classList.add("in")); }
});
