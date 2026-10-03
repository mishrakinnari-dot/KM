/* ===== 1. CONTENT DATA (edit here; all facts come from the CV) ===== */
const NAV=[['about','About'],['experience','Experience'],['education','Education'],['research','Research'],['books','Books'],['teaching','Teaching'],['skills','Skills'],['projects','Projects'],['contact','Contact']];
const EXP=[['Manager, ICT Cell','Parul University','Oct 2025 – Present'],['Assistant Professor, Computer Engineering','PIET-DS, Parul University','Aug 2019 – Present'],
['Lecturer, BCA','OMVVIM, Saurashtra University','Nov 2017 – Mar 2019'],['Lecturer, BCA','Dr. Babasaheb Ambedkar Open University, Baroda',''],
['Visiting Lecturer, Faculty of Family & Community Science','M.S. University, Baroda',''],['Lecturer, Information Technology','Parul Polytechnic Institute, Parul University',''],['Faculty of PGDCA','INFOSOFT, Baroda','']];
const EDU=[['PhD (pursuing)','Parul University','Since 2024'],['M.C.A.','North Gujarat University','2008 – 2011 · First Class with Distinction']];
const PUBS=[['SVM-RFE Based Feature Selection and Taguchi Parameters Optimization for Multiclass SVM Classifier','August 2020'],['A Survey on Big Data Analytics with Data Mining','July 2021'],
['A Survey on Customer Behaviour Analysis Using Data Mining','April 2022'],['A Survey on Smart Cap','May 2023'],['Customer Feedback Analysis Using Text Mining','April 2024'],
['An Improvised Ideology Based K-Means Clustering Approach for Classification of Customer Reviews','April 2024'],['Emotion Recognition for Predicting Depression Severity Levels','International Conference on Artificial Intelligence and Networking (ICAIN 2025)'],
['AIBRF - A tool for authenticating and recognizing people using facial features','Kufa Journal of Engineering, 2025'],['Image Classification Using Modified Convolutional Neural Network Architecture','International Research Journal of Engineering and Technology (IRJET), 2025']];
const BOOKS=[['Basics of C# Programming Language','Notion Press · ISBN 979-888-68435-83'],['C Programming for Everyone','Lambert · ISBN 978-620-39258-52'],['Data Mining – Mining of Massive Dataset','Notion Press']];
const PH=['Patents','Research projects','Grants and funding','Awards and honours','Certifications','Faculty development programs','Workshops, conferences and seminars attended'];
const COURSES=['C Programming','Introduction to IT Systems','Database Management System','.Net Technology','Data Mining','Data Warehouse','OOP with C++','Advanced DBMS','C# Programming'];
const BARS=[['ASP.NET with C#',90],['Data mining and machine learning',80],['Python (basics for AI/ML)',65],['SQL and databases',85],['Web technologies',75]];
const TOOLS=['ASP.NET','ADO.NET','C','Core Java','Visual Basic','Python','SQL Server','Oracle 8i','MS Access','WEKA','SSIS 2012','LaTeX','Mentimeter','LMS','Generative AI tools','NLP basics','HTML','CSS','JavaScript','SEO','Red Hat Linux','Networking','MS Office','Tally'];
const PD=[['Online Insurance System','Java, MS Access · Jan–Feb 2010'],['Mithila Culture Web Portal','ASP.NET C#, SQL Server · Triston Software · May–Jul 2010'],['Accounting Software for Ornaments Manufacturer','ASP.NET C#, SQL Server · Wipra · Jan–May 2011']];
const PG=[['Tiffiness','PHP, MySQL'],['Mobile App for Milk Delivery','Android, MySQL'],['Web Portal for Lawyers','HTML, MySQL'],['Multipurpose Services',''],['Book Tall App','Android, MySQL'],['ATLNG','Automatic Timetable Lab & Notes Generator'],['Smart Help',''],['Accident Helper',''],['Petify','Flutter'],['Expiration Tracker','Bootstrap, HTML, CSS']];
const STATS=[[PUBS.length,'Research papers'],[BOOKS.length,'Books'],[PG.length,'Projects guided'],[PD.length,'Projects done'],['—','Citations (add)'],['—','Patents (add)']];
const TYPED=['Teaching computer engineering with data and clarity.','Researching data mining and machine learning.','Building digital learning at Parul University.'];

/* ===== 2. RENDER HELPERS ===== */
const $=s=>document.querySelector(s),esc=t=>t.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const card=(t,s,x='')=>`<div class="card ${x}"><h3>${esc(t)}</h3>${s?`<p>${esc(s)}</p>`:''}</div>`;
$('#links').innerHTML=NAV.map(n=>`<li><a href="#${n[0]}">${n[1]}</a></li>`).join('');
const tl=a=>a.map(e=>`<div class="card"><small>${esc(e[2]||'Dates: add')}</small><h3>${esc(e[0])}</h3><p>${esc(e[1])}</p></div>`).join('');
$('#exp').innerHTML=tl(EXP);$('#edu').innerHTML=tl(EDU);
$('#pubs').innerHTML=PUBS.map((p,i)=>`<article class="card pub"><b>${i+1}</b><div><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p></div></article>`).join('');
$('#bk').innerHTML=BOOKS.map(b=>card(b[0],b[1])).join('');
$('#ph').innerHTML=PH.map(p=>`<div class="card ph"><h3>${p}</h3><p>Not listed in the CV yet. Add entries to the PH list in the script.</p><span class="tag">Placeholder</span></div>`).join('');
$('#courses').innerHTML=COURSES.map(c=>`<span>${c}</span>`).join('');
$('#tools').innerHTML=TOOLS.map(c=>`<span>${c}</span>`).join('');
$('#bars').innerHTML=BARS.map(b=>`<div class="skill"><div><span>${b[0]}</span><span>${b[1]}%</span></div><div class="trk"><i data-w="${b[1]}"></i></div></div>`).join('');
$('#pd').innerHTML=PD.map(p=>card(p[0],p[1])).join('');$('#pg').innerHTML=PG.map(p=>card(p[0],p[1])).join('');
$('#st').innerHTML=STATS.map(s=>`<div class="card stat"><b data-n="${s[0]}">0</b><span class="muted">${s[1]}</span></div>`).join('');
$('#yr').textContent=new Date().getFullYear();

/* ===== 3. THEME TOGGLE ===== */
const root=document.documentElement,tb=$('#theme');
const setT=t=>{root.dataset.theme=t;tb.textContent=t==='dark'?'☀':'☾';try{localStorage.setItem('t',t)}catch(e){}};
let saved;try{saved=localStorage.getItem('t')}catch(e){}
setT(saved||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
tb.onclick=()=>setT(root.dataset.theme==='dark'?'light':'dark');

/* ===== 4. TYPING ANIMATION ===== */
(function(){const el=$('#type');let i=0,j=0,del=false;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=TYPED[0];return}
(function tick(){const w=TYPED[i];el.textContent=w.slice(0,j+=del?-1:1);
if(!del&&j===w.length){del=true;return setTimeout(tick,1600)}
if(del&&j===0){del=false;i=(i+1)%TYPED.length}setTimeout(tick,del?25:55)})()})();

/* ===== 5. SCROLL: progress, back-to-top, active link, reveal, counters, bars ===== */
addEventListener('scroll',()=>{const h=document.documentElement;
$('#bar').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';$('#top').classList.toggle('on',h.scrollTop>600)},{passive:true});
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
e.target.querySelectorAll('[data-n]').forEach(c=>{const n=+c.dataset.n;if(isNaN(n)){c.textContent=c.dataset.n;return}
let v=0;const s=setInterval(()=>{c.textContent=++v;if(v>=n)clearInterval(s)},900/Math.max(n,1))});
e.target.querySelectorAll('[data-w]').forEach(b=>b.style.width=b.dataset.w+'%');io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const secs=[...document.querySelectorAll('section[id]')],ls=[...document.querySelectorAll('.links a')];
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'}).observe&&secs.forEach(s=>
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(a=>a.classList.toggle('on',a.hash==='#'+s.id))}),{rootMargin:'-45% 0px -50% 0px'}).observe(s));

/* ===== 6. RIPPLE, LIGHTBOX, CONTACT FORM, LOADER ===== */
document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),s=document.createElement('span'),d=Math.max(r.width,r.height);
s.className='rip';s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;b.appendChild(s);setTimeout(()=>s.remove(),600)});
const lb=$('#lb');document.querySelectorAll('[data-full]').forEach(b=>b.onclick=()=>{lb.querySelector('img').src=b.dataset.full;lb.classList.add('on')});
lb.onclick=()=>lb.classList.remove('on');addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('on'));
/* No backend: the form opens the visitor's email app. Swap for Formspree etc. if wanted. */
$('#f').onsubmit=e=>{e.preventDefault();const f=e.target;
location.href=`mailto:mishrakinnari@gmail.com?subject=${encodeURIComponent('Message from '+f.n.value)}&body=${encodeURIComponent(f.m.value+'\n\n'+f.e.value)}`;$('#fs').textContent='Opening your email app to send the message.'};
addEventListener('load',()=>$('#loader').classList.add('off'));
