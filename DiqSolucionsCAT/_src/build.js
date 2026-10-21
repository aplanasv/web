// Genera la web estàtica (CA/ES/EN) a partir de content.js. Ús: node _src/build.js
const fs = require('fs');
const path = require('path');
const content = require('./content.js');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://diqsolucions.cat';
const EMAIL = 'info@diqsolucions.com';              // canvia'l si hi ha una bústia @diqsolucions.cat
const ACCESS_KEY = 'LA_TEVA_ACCESS_KEY_WEB3FORMS';   // clau de Web3Forms (pendent)
const ORDER = ['ca', 'es', 'en'];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------------------------------------------------------------- CSS */
const css = `
:root{
  color-scheme:light;
  --bg:#EBEFF4; --surface:#FFFFFF; --surface-2:#F4F7FA;
  --ink:#0A2036; --ink-soft:#24384F; --muted:#53667E;
  --line:#D9E0EA; --line-soft:#E6EBF1;
  --accent:#0A4A87; --accent-strong:#013D70; --accent-ghost:#E3ECF6;
  --gold:#E2AB2B; --gold-strong:#D49C1E; --gold-deep:#B5820F; --gold-ink:#7F5C06; --gold-ghost:#F7EBC6; --on-gold:#0B2A4A;
  --navy:#08203A;
  --shadow:0 1px 2px rgba(0,0,0,.04),0 10px 30px -12px rgba(0,0,0,.14);
  --shadow-sm:0 1px 2px rgba(0,0,0,.05),0 4px 14px -8px rgba(0,0,0,.12);
  --maxw:1120px; --radius:14px;
  --ease:cubic-bezier(.4,0,.2,1); --ease-out:cubic-bezier(.16,1,.3,1);
  font-size:17px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scrollbar-color:var(--line) transparent}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{margin:0;background:var(--bg);color:var(--ink);overflow-x:hidden;font-family:"IBM Plex Sans",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:"Archivo",system-ui,sans-serif;line-height:1.2;text-wrap:balance;margin:0;letter-spacing:-.02em}
h3{line-height:1.3}
p{margin:0}
a{color:inherit}
ul,ol{margin:0;padding:0}
::selection{background:var(--gold-ghost)}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}
.hero :focus-visible,.contact :focus-visible,.band :focus-visible,.dark :focus-visible{outline-color:var(--gold)}

/* header */
header{position:sticky;top:0;z-index:50;background:var(--surface);border-bottom:1px solid var(--line-soft);box-shadow:0 1px 0 rgba(0,0,0,.02),0 8px 24px -16px rgba(0,0,0,.25)}
.nav{display:flex;align-items:center;justify-content:space-between;gap:16px;height:66px}
.brand{display:flex;align-items:center;text-decoration:none;flex:none}
.brand img{display:block;height:40px;width:auto}
.nav-right{display:flex;align-items:center;gap:12px}
.langsw{display:inline-flex;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:3px;gap:2px}
.langsw a{text-decoration:none;color:var(--muted);font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:.72rem;letter-spacing:.05em;padding:5px 10px;border-radius:999px;transition:.16s var(--ease)}
.langsw a:hover{color:var(--ink)}
.langsw a[aria-current="true"]{background:var(--accent);color:#fff}
.btn{display:inline-flex;align-items:center;gap:.5em;text-decoration:none;cursor:pointer;font:inherit;font-weight:600;font-size:.92rem;border-radius:999px;padding:10px 18px;border:1px solid transparent;transition:.16s var(--ease);white-space:nowrap}
.btn:active{transform:scale(.97)}
.btn:disabled{opacity:.6;cursor:not-allowed}
.btn-primary{background:var(--gold);color:var(--on-gold);box-shadow:var(--shadow-sm)}
.btn-primary:hover{background:var(--gold-strong)}
.btn-ghost{background:transparent;color:var(--ink);border-color:var(--line)}
.btn-ghost:hover{border-color:var(--accent);color:var(--accent)}
.nav .btn{padding:9px 16px;font-size:.86rem}

/* hero */
.hero{position:relative;overflow:hidden;background:var(--navy) url(hero-bg.jpg) center/cover;border-bottom:1px solid var(--line-soft)}
.hero::before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(105deg,rgba(4,22,45,.95) 0%,rgba(4,22,45,.82) 42%,rgba(4,22,45,.5) 100%)}
.hero .wrap{position:relative;padding-top:84px;padding-bottom:86px}
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:54px;align-items:stretch}
.hero-grid>*{min-width:0}
.hero h1{font-size:clamp(2.2rem,4.6vw,3.5rem);font-weight:800;color:#fff;margin:0 0 22px}
.hero h1 .hl{color:#EDB93A;display:block}
.hero .lead{font-size:1.14rem;color:rgba(255,255,255,.86);max-width:46ch}
.hero-points{margin-top:16px;color:rgba(255,255,255,.72);font-size:.86rem;font-family:"IBM Plex Mono",monospace;letter-spacing:.02em}
.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.hero .btn-ghost{color:#fff;border-color:rgba(255,255,255,.3)}
.hero .btn-ghost:hover{border-color:#fff;color:#fff;background:rgba(255,255,255,.08)}
.hero .btn-primary{box-shadow:0 10px 26px -10px rgba(0,0,0,.55)}
.hero-photo{border-radius:18px;overflow:hidden;box-shadow:0 30px 70px -24px rgba(0,0,0,.7);border:1px solid rgba(255,255,255,.14);min-height:340px}
.hero-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}

/* sections */
section{padding:88px 0}
.sec-head{max-width:62ch;margin-bottom:44px}
.sec-head h2,.h2{font-size:clamp(1.7rem,3vw,2.35rem);font-weight:700}
.sec-head p{color:var(--muted);font-size:1.08rem;margin-top:14px}
.alt{background:var(--surface);border-top:1px solid var(--line-soft);border-bottom:1px solid var(--line-soft)}
.alt2{background:var(--surface-2);border-top:1px solid var(--line-soft);border-bottom:1px solid var(--line-soft)}
.dark{background:var(--navy);color:#fff}
.dark .sec-head p{color:rgba(255,255,255,.82)}

/* intro */
.intro-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:64px;align-items:center}
.stack{list-style:none}
.stack li{font-family:"Archivo",sans-serif;font-weight:800;font-size:clamp(1.7rem,3.2vw,2.5rem);line-height:1.3;letter-spacing:-.025em;color:var(--ink-soft);padding:6px 0}
.stack li:last-child{color:var(--gold-ink)}
.intro-copy .lead-text{font-size:1.2rem;color:var(--ink);font-weight:500}
.intro-copy p+p{margin-top:16px;color:var(--ink-soft)}
.intro-copy .accent-line{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.25rem;color:var(--accent);margin-top:22px}

/* problem */
.checklist{list-style:none;columns:2;column-gap:56px}
.checklist li{break-inside:avoid;position:relative;padding:0 0 18px 28px;color:var(--ink-soft);line-height:1.5}
.checklist li::before{content:"";position:absolute;left:2px;top:.42em;width:9px;height:9px;background:var(--gold);transform:rotate(45deg)}
.pull{margin-top:34px;max-width:62ch}
.pull .a{font-size:1.1rem;color:var(--ink-soft)}
.pull .b{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.45rem;line-height:1.3;color:var(--ink);margin-top:8px;letter-spacing:-.015em}

/* numbers */
.contrast{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:6px 0 40px}
.pane{border-radius:var(--radius);padding:30px 32px}
.pane h3{font-size:1.5rem;font-weight:800;margin-bottom:14px}
.pane .q{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.2rem;line-height:1.3;margin-bottom:10px}
.pane.a{background:var(--surface);border:1px solid var(--line);color:var(--ink)}
.pane.a h3{color:var(--accent)}
.pane.a p{color:var(--muted)}
.pane.b{background:var(--navy);color:#fff}
.pane.b h3{color:#EDB93A}
.pane.b .q{margin-bottom:4px}
.pane.b ul{list-style:none}
.closer{text-align:center;max-width:60ch;margin:0 auto}
.closer .a{font-size:1.15rem;color:var(--ink-soft)}
.closer .b{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.5rem;line-height:1.3;margin-top:8px;color:var(--ink)}
.chain{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:10px;margin-top:30px}
.chain .node{background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:10px 20px;font-weight:600;font-size:.95rem;box-shadow:var(--shadow-sm)}
.chain .arw{color:var(--gold-ink);font-weight:700}
.lead-p{color:var(--ink-soft);font-size:1.08rem;max-width:64ch}

/* when */
.when-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:64px;align-items:start}
.when-grid .lead{font-size:1.15rem;color:var(--muted);margin-top:16px}
.when-copy p{color:var(--ink-soft)}
.when-copy p+p{margin-top:16px}
.tagtrio{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:56px}
.tagtrio div{position:relative;padding-top:22px;font-family:"Archivo",sans-serif;font-weight:800;font-size:clamp(1.2rem,2.2vw,1.6rem);line-height:1.3;letter-spacing:-.02em}
.tagtrio div::before,.mode::before{content:"";position:absolute;left:0;top:0;width:44px;height:4px;border-radius:2px;background:var(--gold)}

/* help */
.help-list{border-top:1px solid var(--line)}
.help-row{display:grid;grid-template-columns:84px minmax(0,1fr) minmax(0,1.2fr);gap:32px;padding:44px 0;border-bottom:1px solid var(--line)}
.help-n{font-family:"Archivo",sans-serif;font-weight:800;font-size:2.6rem;line-height:1.3;color:var(--gold-ink);letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.help-row h3{font-size:1.55rem;font-weight:800}
.help-row .t{color:var(--muted);margin-top:8px;font-size:.98rem}
.help-row .intro{color:var(--ink-soft)}
.help-row ul{list-style:none;columns:2;column-gap:28px;margin:18px 0 0}
.help-row li{break-inside:avoid;position:relative;padding:0 0 9px 18px;font-size:.93rem;color:var(--ink-soft);line-height:1.45}
.help-row li::before{content:"";position:absolute;left:0;top:.5em;width:7px;height:7px;background:var(--gold);transform:rotate(45deg)}
.help-row .close{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.05rem;color:var(--ink);margin-top:14px;line-height:1.35}

/* situations */
.sit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:34px 56px}
.sit{border-top:2px solid var(--line);padding-top:16px}
.sit h3{font-size:1.12rem;font-weight:700;margin-bottom:6px}
.sit p{color:var(--muted);font-size:.96rem}

/* fit */
.modes{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin:32px 0 34px}
.mode{position:relative;padding-top:24px}
.mode::before{background:var(--accent)}
.mode h3{font-size:1.35rem;font-weight:800;margin-bottom:8px}
.mode p{color:var(--muted)}
.ded-title{color:var(--ink-soft);font-weight:500}
.chips{list-style:none;display:flex;flex-wrap:wrap;gap:10px;margin:14px 0 26px}
.chips li{background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:8px 16px;font-size:.92rem;font-weight:500;color:var(--ink-soft)}
.fit-close{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.3rem;color:var(--accent)}

/* how */
.steps{list-style:none;max-width:760px}
.steps li{position:relative;display:grid;grid-template-columns:52px 1fr;gap:22px;padding-bottom:34px}
.steps li:not(:last-child)::before{content:"";position:absolute;left:25px;top:54px;bottom:2px;width:2px;background:var(--line)}
.steps .num{width:52px;height:52px;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center;font-family:"Archivo",sans-serif;font-weight:800;font-size:1.05rem;font-variant-numeric:tabular-nums}
.steps h3{font-size:1.3rem;font-weight:800;margin:10px 0 6px}
.steps p{color:var(--ink-soft)}
.how-close{margin-top:10px;max-width:60ch}
.how-close .a{color:var(--ink-soft);font-size:1.1rem}
.how-close .b{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.4rem;margin-top:4px}

/* change */
.change-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:40px 36px}
.change-grid h3{font-size:1.35rem;font-weight:800;color:#EDB93A;margin-bottom:8px}
.change-grid p{color:rgba(255,255,255,.84)}

/* advisor */
.advisor-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.advisor-grid .sub{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.3rem;color:var(--accent);margin-top:10px}
.advisor-copy p{color:var(--ink-soft);margin-top:18px}
.roles{list-style:none;margin:18px 0 0}
.roles li{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.1rem;padding:10px 0;border-top:1px solid var(--line)}
.roles li:last-child{border-bottom:1px solid var(--line)}
.table-wrap{overflow-x:auto}
.cmp-title{font-family:"Archivo",sans-serif;font-weight:800;font-size:1.2rem;margin-bottom:14px}
table.cmp{width:100%;border-collapse:collapse;background:var(--surface);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-sm)}
.cmp th,.cmp td{text-align:left;padding:15px 20px;font-size:.98rem}
.cmp thead th{background:var(--accent-strong);color:#fff;font-family:"Archivo",sans-serif;font-weight:700}
.cmp thead th:last-child{background:var(--accent)}
.cmp tbody tr+tr td{border-top:1px solid var(--line-soft)}
.cmp td:first-child{color:var(--muted)}
.cmp td:last-child{font-weight:600;color:var(--ink)}

/* about */
.about-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:64px;align-items:start}
.role{font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:.88rem;letter-spacing:.02em;color:var(--gold-ink);margin:16px 0 20px}
.about-copy p{color:var(--ink-soft)}
.about-copy p+p{margin-top:12px}
.quote{position:relative;margin-top:26px;padding:22px 24px 22px 54px;background:var(--surface);border-radius:var(--radius);font-family:"Archivo",sans-serif;font-weight:600;font-size:1.1rem;line-height:1.45;box-shadow:var(--shadow-sm)}
.quote::before{content:"\\201C";position:absolute;top:.05em;left:18px;font-weight:800;font-size:2.4rem;line-height:1;color:var(--gold-ink)}
.values-lead{font-weight:600;color:var(--ink);margin-bottom:6px}
.values{display:grid;grid-template-columns:1fr 1fr;gap:6px 28px}
.values div{border-top:1px solid var(--line);padding:14px 0}
.values h3{font-size:1.02rem;font-weight:800;color:var(--accent);margin-bottom:4px}
.values p{color:var(--muted);font-size:.93rem;line-height:1.5}

/* measure */
.measure{text-align:center}
.measure .inner{max-width:760px;margin:0 auto}
.measure h2{font-size:clamp(1.8rem,3.2vw,2.5rem);font-weight:800}
.measure .lead-big{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.4rem;color:var(--accent);margin-top:14px}
.measure p{color:var(--ink-soft)}
.measure .p1{margin-top:24px}
.measure .p2{margin-top:12px}
.measure .close{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.3rem;color:var(--ink);margin-top:28px;line-height:1.35}

/* faq */
.faq{max-width:820px}
.faq details{border-bottom:1px solid var(--line)}
.faq details:first-of-type{border-top:1px solid var(--line)}
.faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:20px 0;font-family:"Archivo",sans-serif;font-weight:700;font-size:1.12rem;line-height:1.3}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";flex:none;width:32px;height:32px;border-radius:50%;background:var(--accent-ghost);color:var(--accent);display:grid;place-items:center;font-size:1.3rem;font-weight:500;line-height:1;transition:transform .2s var(--ease-out)}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq details p{padding:0 52px 22px 0;color:var(--ink-soft);max-width:70ch}

/* contact */
.contact{background:linear-gradient(155deg,#052B52,#0A4A87);color:#fff}
.contact .wrap{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.contact h2{color:#fff;font-size:clamp(1.9rem,3.2vw,2.5rem);font-weight:800;max-width:16ch}
.contact .c1{color:#fff;font-family:"Archivo",sans-serif;font-weight:600;font-size:1.2rem;line-height:1.35;margin-top:20px;max-width:34ch}
.contact .c2{color:rgba(255,255,255,.88);margin-top:16px;max-width:46ch}
.contact .nc{margin-top:14px;color:#EDB93A;font-weight:600}
.cmethod{display:inline-flex;align-items:center;gap:12px;text-decoration:none;color:#fff;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);padding:13px 18px;border-radius:12px;margin-top:28px;transition:.16s var(--ease)}
.cmethod:hover{background:rgba(255,255,255,.2)}
.cmethod .ico{width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.16);display:grid;place-items:center}
.cmethod svg{width:19px;height:19px}
.cmethod .l{display:block;font-family:"IBM Plex Mono",monospace;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.75)}
.cmethod .v{font-weight:600;font-size:1.02rem}
.form-card{background:#fff;border-radius:16px;padding:28px 26px;box-shadow:0 24px 50px -20px rgba(0,0,0,.4);color:var(--ink)}
.form-card .fh{font-family:"Archivo",sans-serif;font-weight:700;font-size:1.2rem;margin-bottom:4px}
.form-card .fsub{font-size:.88rem;color:#63758C;margin-bottom:18px}
.field{display:flex;flex-direction:column;gap:5px;margin-bottom:13px}
.field label{font-size:.78rem;font-weight:600;color:#33475F}
.field input,.field textarea{font:inherit;font-size:.92rem;padding:10px 12px;border:1px solid #D3DCE6;border-radius:9px;background:#F7F9FB;color:#0C1A2B;width:100%;transition:.15s;resize:vertical}
.field input:focus,.field textarea:focus{outline:none;border-color:var(--accent);background:#fff;box-shadow:0 0 0 3px rgba(10,74,135,.18)}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:13px}
.consent{display:flex;gap:9px;align-items:flex-start;font-size:.8rem;color:#63758C;line-height:1.45;margin:4px 0 16px}
.consent input{margin-top:2px;flex:none;accent-color:var(--accent)}
.consent a{color:var(--accent);font-weight:600}
.submit{width:100%;justify-content:center;padding:13px;font-size:.98rem}
.hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.form-msg{margin-top:14px;padding:12px 14px;border-radius:9px;font-size:.88rem;font-weight:500}
.form-msg.sending{background:#EEF3F9;color:#33475F}
.form-msg.ok{background:#E7F5EC;color:#1B7A3D}
.form-msg.err{background:#FCEBEA;color:#B23B32}

/* band */
.band{background:var(--navy);color:#fff;text-align:center;padding:72px 0}
.band h2{font-size:clamp(1.5rem,3vw,2.2rem);font-weight:800;max-width:24ch;margin:0 auto;color:#fff}
.band .bchain{font-family:"IBM Plex Mono",monospace;font-size:.95rem;color:#EDB93A;margin-top:22px;letter-spacing:.02em}
.band p{color:rgba(255,255,255,.8);max-width:58ch;margin:18px auto 0}

/* footer */
footer{background:var(--bg);padding:40px 0}
.foot{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;color:var(--muted);font-size:.85rem}
.foot img{display:block;height:64px;width:auto}
.foot-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.foot-links a{color:var(--muted);text-decoration:underline;text-underline-offset:2px}
.foot-links a:hover{color:var(--accent)}

/* privacy page */
.prose{max-width:760px;margin:0 auto;padding:56px 24px 80px}
.prose h1{font-size:clamp(1.7rem,3.2vw,2.2rem);margin-bottom:8px}
.prose .updated{color:var(--muted);font-size:.9rem;margin-bottom:40px}
.prose h2{font-size:1.15rem;margin:34px 0 12px;font-weight:700}
.prose p{color:var(--ink-soft);margin:0 0 12px}
.prose ul{padding-left:20px;color:var(--ink-soft);margin:0 0 12px}
.prose li{margin-bottom:6px}
.prose a{color:var(--accent);font-weight:600}
.prose .back{display:inline-block;margin-top:28px}
.fill{background:var(--surface-2);border:1px dashed var(--line);border-radius:6px;padding:0 6px;color:var(--muted);font-style:italic}

@media(max-width:900px){
  section{padding:68px 0}
  .hero-grid{grid-template-columns:1fr;gap:40px}
  .hero-photo{min-height:0;aspect-ratio:4/5}
  .intro-grid,.when-grid,.advisor-grid,.about-grid,.contact .wrap{grid-template-columns:1fr;gap:36px}
  .contrast,.modes,.sit-grid{grid-template-columns:1fr}
  .change-grid{grid-template-columns:1fr 1fr}
  .tagtrio{grid-template-columns:1fr;gap:18px;margin-top:40px}
  .help-row{grid-template-columns:1fr;gap:14px;padding:34px 0}
  .checklist{columns:1}
}
@media(max-width:620px){
  :root{font-size:16px}
  .nav{gap:10px}
  .brand img{height:32px}
  .langsw{padding:2px}
  .langsw a{padding:5px 8px}
  .nav .btn{display:none}
  .change-grid,.values,.row2{grid-template-columns:1fr}
  .help-row ul{columns:1}
  .hero .wrap{padding-top:52px;padding-bottom:56px}
  .foot{flex-direction:column;align-items:flex-start}
  .faq details p{padding-right:0}
}
`;

/* ------------------------------------------------------------- helpers */
const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] || '');
const baseOf = (c) => (c.lang === 'ca' ? '' : '../');
const homeHref = (c, to) => (c.lang === 'ca' ? (to.lang === 'ca' ? './' : to.dir) : (to.lang === 'ca' ? '../' : (to.lang === c.lang ? './' : '../' + to.dir)));
const privacyHref = (c, to) => (c.lang === 'ca' ? (to.lang === 'ca' ? to.privacy.file : to.dir + to.privacy.file) : (to.lang === 'ca' ? '../' + to.privacy.file : (to.lang === c.lang ? to.privacy.file : '../' + to.dir + to.privacy.file)));
const absHome = (to) => SITE + '/' + to.dir;

function langSwitch(c, target) {
  return `<nav class="langsw" aria-label="Idioma / Idioma / Language">${ORDER.map((k) => {
    const L = content[k];
    return `<a href="${target(c, L)}" hreflang="${L.htmlLang}" lang="${L.htmlLang}"${k === c.lang ? ' aria-current="true"' : ''}>${L.label}</a>`;
  }).join('')}</nav>`;
}

function headBlock(c, { title, description, canonical, alternates }) {
  const b = baseOf(c);
  return `<!DOCTYPE html>
<html lang="${c.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
<meta name="theme-color" content="#013D70">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${alternates}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="${c.meta.locale}">
<link rel="icon" type="image/png" href="${b}assets/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
<link rel="stylesheet" href="${b}assets/site.css">
</head>`;
}

const alternatesFor = () => ORDER.map((k) => `<link rel="alternate" hreflang="${content[k].htmlLang}" href="${absHome(content[k])}">`).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${SITE}/">`;

function header(c, ctaHref, target) {
  const b = baseOf(c);
  return `<header>
  <div class="wrap nav">
    <a class="brand" href="${homeHref(c, c)}"><img src="${b}assets/logo.png" alt="Diq Solucions" width="136" height="40"></a>
    <div class="nav-right">
      ${langSwitch(c, target || homeHref)}
      <a class="btn btn-primary" href="${ctaHref}">${esc(c.nav.cta)}</a>
    </div>
  </div>
</header>`;
}

function footer(c, privHref) {
  const b = baseOf(c);
  const f = c.footer;
  return `<footer>
  <div class="wrap foot">
    <img src="${b}assets/logo-${c.lang}.png" alt="${esc(f.logoAlt)}">
    <div class="foot-links">
      <span>${esc(f.text)}</span>
      <a href="${privHref}">${esc(f.privacy)}</a>
    </div>
  </div>
</footer>`;
}

/* ---------------------------------------------------------------- home */
function home(c) {
  const b = baseOf(c);
  const priv = privacyHref(c, c);
  const mailIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
  const f = c.contact.form;
  const sec = (cls, inner, id) => `<section${cls ? ` class="${cls}"` : ''}${id ? ` id="${id}"` : ''}><div class="wrap">${inner}</div></section>`;

  const parts = [];

  parts.push(`<section class="hero"><div class="wrap"><div class="hero-grid">
    <div>
      <h1>${esc(c.hero.h1a)} <span class="hl">${esc(c.hero.h1b)}</span></h1>
      <p class="lead">${esc(c.hero.lead)}</p>
      <p class="hero-points">${esc(c.hero.points)}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#contacte">${esc(c.hero.cta)}</a>
        <a class="btn btn-ghost" href="#${c.how.id}">${esc(c.hero.cta2)}</a>
      </div>
    </div>
    <div class="hero-photo"><img src="${b}assets/hero-photo.jpg" alt="${esc(c.hero.alt)}" width="1122" height="1402"></div>
  </div></div></section>`);

  parts.push(sec('', `<div class="intro-grid">
    <ul class="stack">${c.intro.lines.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
    <div class="intro-copy">
      <p class="lead-text">${esc(c.intro.lead)}</p>
      <p>${esc(c.intro.p1)}</p>
      <p class="accent-line">${esc(c.intro.p2)}</p>
      <p>${esc(c.intro.p3)}</p>
    </div></div>`));

  parts.push(sec('alt', `<div class="sec-head"><h2>${esc(c.problem.title)}</h2><p>${esc(c.problem.intro)}</p></div>
    <ul class="checklist">${c.problem.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    <div class="pull"><p class="a">${esc(c.problem.out1)}</p><p class="b">${esc(c.problem.out2)}</p></div>`));

  const n = c.numbers;
  parts.push(sec('', `<div class="sec-head"><h2>${esc(n.title)}</h2><p>${esc(n.lead)}</p></div>
    <p class="lead-p">${esc(n.p)}</p>
    <div class="contrast" style="margin-top:30px">
      <div class="pane a"><h3>${esc(n.accLabel)}</h3><p class="q">${esc(n.accQ)}</p><p>${esc(n.accText)}</p></div>
      <div class="pane b"><h3>${esc(n.dirLabel)}</h3><ul>${n.dirQ.map((q) => `<li class="q">${esc(q)}</li>`).join('')}</ul></div>
    </div>
    <div class="closer"><p class="a">${esc(n.close1)}</p><p class="b">${esc(n.close2)}</p></div>
    <div class="chain">${n.chain.map((x, i) => (i ? '<span class="arw" aria-hidden="true">→</span>' : '') + `<span class="node">${esc(x)}</span>`).join('')}</div>`));

  const w = c.when;
  parts.push(sec('alt2', `<div class="when-grid">
      <div><h2 class="h2">${esc(w.title)}</h2><p class="lead">${esc(w.lead)}</p></div>
      <div class="when-copy"><p>${esc(w.p1)}</p><p>${esc(w.p2)}</p><p>${esc(w.p3)}</p></div>
    </div>
    <div class="tagtrio">${w.tag.map((t) => `<div>${esc(t)}</div>`).join('')}</div>`));

  const h = c.help;
  parts.push(sec('', `<div class="sec-head"><h2>${esc(h.title)}</h2></div>
    <div class="help-list">${h.items.map((it, i) => `<article class="help-row">
      <div class="help-n">${String(i + 1).padStart(2, '0')}</div>
      <div><h3>${esc(it.label)}</h3><p class="t">${esc(it.title)}</p></div>
      <div><p class="intro">${esc(it.intro)}</p><ul>${it.bullets.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><p class="close">${esc(it.close)}</p></div>
    </article>`).join('')}</div>`, h.id));

  const s = c.situations;
  parts.push(sec('alt', `<div class="sec-head"><h2>${esc(s.title)}</h2><p>${esc(s.lead)}</p></div>
    <div class="sit-grid">${s.items.map((it) => `<div class="sit"><h3>${esc(it.t)}</h3><p>${esc(it.d)}</p></div>`).join('')}</div>`));

  const ft = c.fit;
  parts.push(sec('', `<div class="sec-head"><h2>${esc(ft.title)}</h2><p>${esc(ft.lead)}</p></div>
    <p class="lead-p">${esc(ft.p)}</p>
    <div class="modes">${ft.modes.map((m) => `<div class="mode"><h3>${esc(m.t)}</h3><p>${esc(m.d)}</p></div>`).join('')}</div>
    <p class="ded-title">${esc(ft.dedTitle)}</p>
    <ul class="chips">${ft.ded.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
    <p class="fit-close">${esc(ft.close)}</p>`));

  const hw = c.how;
  parts.push(sec('alt2', `<div class="sec-head"><h2>${esc(hw.title)}</h2><p>${esc(hw.lead)}</p></div>
    <ol class="steps">${hw.steps.map((st, i) => `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(st.t)}</h3><p>${esc(st.d)}</p></div></li>`).join('')}</ol>
    <div class="how-close"><p class="a">${esc(hw.close1)}</p><p class="b">${esc(hw.close2)}</p></div>`, hw.id));

  const ch = c.change;
  parts.push(`<section class="dark"><div class="wrap"><div class="sec-head"><h2>${esc(ch.title)}</h2><p>${esc(ch.lead)}</p></div>
    <div class="change-grid">${ch.items.map((it) => `<div><h3>${esc(it.t)}</h3><p>${esc(it.d)}</p></div>`).join('')}</div></div></section>`);

  const a = c.advisor;
  parts.push(sec('', `<div class="advisor-grid">
    <div class="advisor-copy"><h2 class="h2">${esc(a.title)}</h2><p class="sub">${esc(a.sub)}</p>
      <p>${esc(a.p1)}</p>
      <ul class="roles">${a.roles.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
      <p>${esc(a.p2)}</p></div>
    <div><p class="cmp-title">${esc(a.tableTitle)}</p><div class="table-wrap"><table class="cmp"><thead><tr><th scope="col">${esc(a.head[0])}</th><th scope="col">${esc(a.head[1])}</th></tr></thead>
      <tbody>${a.rows.map((r) => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join('')}</tbody></table></div></div>
  </div>`));

  const ab = c.about;
  parts.push(sec('alt', `<div class="about-grid">
    <div class="about-copy"><h2 class="h2">${esc(ab.title)}</h2><p class="role">${esc(ab.role)}</p>
      <p>${esc(ab.p1)}</p><p>${esc(ab.p2)}</p>
      <p class="quote">${esc(ab.close)}</p></div>
    <div><p class="values-lead">${esc(ab.valuesLead)}</p><div class="values">${ab.values.map((v) => `<div><h3>${esc(v.t)}</h3><p>${esc(v.d)}</p></div>`).join('')}</div></div>
  </div>`));

  const m = c.measure;
  parts.push(`<section class="alt2 measure"><div class="wrap"><div class="inner"><h2>${esc(m.title)}</h2><p class="lead-big">${esc(m.lead)}</p>
    <p class="p1">${esc(m.p1)}</p><p class="p2">${esc(m.p2)}</p><p class="close">${esc(m.close)}</p></div></div></section>`);

  parts.push(sec('', `<div class="sec-head"><h2>${esc(c.faq.title)}</h2></div>
    <div class="faq">${c.faq.items.map((q) => `<details><summary>${esc(q.q)}</summary><p>${esc(q.a)}</p></details>`).join('')}</div>`));

  const ct = c.contact;
  parts.push(`<section class="contact" id="contacte"><div class="wrap">
    <div>
      <h2>${esc(ct.title)}</h2>
      <p class="c1">${esc(ct.lead1)}</p>
      <p class="c2">${esc(ct.lead2)}</p>
      <p class="nc">${esc(ct.nocommit)}</p>
      <a class="cmethod" href="mailto:${EMAIL}"><span class="ico">${mailIcon}</span><span><span class="l">${esc(ct.emailLabel)}</span><span class="v">${EMAIL}</span></span></a>
    </div>
    <form id="contactForm" class="form-card" data-sending="${esc(f.sending)}" data-ok="${esc(f.ok)}" data-err="${esc(f.err)}">
      <div class="fh">${esc(f.title)}</div>
      <div class="fsub">${esc(f.sub)}</div>
      <input type="hidden" name="access_key" value="${ACCESS_KEY}">
      <input type="hidden" name="subject" value="${esc(f.subject)}">
      <input type="hidden" name="from_name" value="Web Diq Solucions (.cat)">
      <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="row2">
        <div class="field"><label for="f_name">${esc(f.name)}</label><input id="f_name" type="text" name="name" required autocomplete="name"></div>
        <div class="field"><label for="f_company">${esc(f.company)}</label><input id="f_company" type="text" name="empresa" autocomplete="organization"></div>
      </div>
      <div class="row2">
        <div class="field"><label for="f_email">${esc(f.email)}</label><input id="f_email" type="email" name="email" required autocomplete="email"></div>
        <div class="field"><label for="f_phone">${esc(f.phone)}</label><input id="f_phone" type="tel" name="telefon" autocomplete="tel"></div>
      </div>
      <div class="field"><label for="f_msg">${esc(f.msg)}</label><textarea id="f_msg" name="missatge" rows="4"></textarea></div>
      <label class="consent"><input type="checkbox" name="consentiment" required value="Sí"><span>${fill(f.consent, { privacy: priv })}</span></label>
      <button type="submit" class="btn btn-primary submit">${esc(f.submit)}</button>
      <div class="form-msg" id="formMsg" hidden></div>
    </form>
  </div></section>`);

  parts.push(`<section class="band"><div class="wrap"><h2>${esc(c.band.title)}</h2><p class="bchain">${esc(c.band.chain)}</p><p>${esc(c.band.p)}</p></div></section>`);

  const script = `<script>
(function(){
  var form=document.getElementById('contactForm'); if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var msg=document.getElementById('formMsg'), btn=form.querySelector('.submit');
    var data={}; new FormData(form).forEach(function(v,k){data[k]=v;});
    msg.hidden=false; msg.className='form-msg sending'; msg.textContent=form.dataset.sending; btn.disabled=true;
    fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
      .then(function(r){return r.json();})
      .then(function(j){ if(j.success){msg.className='form-msg ok'; msg.textContent=form.dataset.ok; form.reset();} else {msg.className='form-msg err'; msg.textContent=form.dataset.err;} })
      .catch(function(){msg.className='form-msg err'; msg.textContent=form.dataset.err;})
      .then(function(){btn.disabled=false;});
  });
})();
</script>`;

  return `${headBlock(c, { title: c.meta.title, description: c.meta.description, canonical: absHome(c), alternates: alternatesFor() })}
<body>
${header(c, '#contacte')}
<main>
${parts.join('\n')}
</main>
${footer(c, priv)}
${script}
</body>
</html>
`;
}

/* ------------------------------------------------------------- privacy */
function privacy(c) {
  const p = c.privacy;
  const b = baseOf(c);
  const body = p.sections.map((s) => `<h2>${esc(s.h)}</h2>
${s.p.map((x) => `<p>${fill(x, { email: EMAIL })}</p>`).join('\n')}${s.ul ? `\n<ul>${s.ul.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}${s.after ? '\n' + s.after.map((x) => `<p>${esc(x)}</p>`).join('\n') : ''}`).join('\n');
  const alt = ORDER.map((k) => `<link rel="alternate" hreflang="${content[k].htmlLang}" href="${SITE}/${content[k].dir}${content[k].privacy.file}">`).join('\n');
  return `${headBlock(c, { title: `${p.title} · Diq Solucions`, description: p.title, canonical: `${SITE}/${c.dir}${p.file}`, alternates: alt })}
<body>
${header(c, homeHref(c, c) + '#contacte', privacyHref)}
<main><div class="prose">
<h1>${esc(p.title)}</h1>
<p class="updated">${esc(p.updated)}</p>
${body}
<a class="back" href="${homeHref(c, c)}">${esc(p.back)}</a>
</div></main>
${footer(c, p.file)}
</body>
</html>
`;
}

/* --------------------------------------------------------------- write */
fs.mkdirSync(path.join(ROOT, 'assets'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'assets', 'site.css'), css.trim() + '\n');
// hero-bg.jpg es referencia des del CSS (assets/site.css) com a url(hero-bg.jpg)
for (const k of ORDER) {
  const c = content[k];
  const dir = path.join(ROOT, c.dir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), home(c));
  fs.writeFileSync(path.join(dir, c.privacy.file), privacy(c));
}
console.log('web generada:', ORDER.map((k) => (content[k].dir || '/') + 'index.html').join(', '));
