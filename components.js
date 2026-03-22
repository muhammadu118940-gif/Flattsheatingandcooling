/**
 * Flatts Heating & Cooling — Shared Components
 * Injects the site navbar and footer into every page.
 * Pages need: <div id="site-nav"></div> and <div id="site-footer"></div>
 */
(function () {

  /* ─── SHARED CSS ──────────────────────────────────────────────── */
  const css = `
/* ── NAV ── */
#nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:20px 48px;display:flex;align-items:center;justify-content:space-between;transition:top 0.4s ease,left 0.4s ease,right 0.4s ease,padding 0.4s ease,background 0.4s ease,box-shadow 0.4s ease,border-radius 0.4s ease,border-color 0.4s ease}
#nav.scrolled{background:rgba(255,255,255,0.95);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(0,0,0,0.09);padding:10px 32px;box-shadow:0 4px 24px rgba(0,0,0,0.09)}
@media(min-width:900px){#nav.scrolled{top:12px;left:24px;right:24px;border-radius:10px}}
.nav-logo{display:flex;align-items:center;flex-shrink:0}
.nav-logo-img{height:44px;width:auto}
.nav-links{display:flex;align-items:center;gap:36px;list-style:none}
.nav-links a{font-size:13px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);position:relative;padding-bottom:3px;transition:color 0.3s}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:var(--red);transition:width 0.35s ease}
.nav-links a:hover{color:var(--text)}
.nav-links a:hover::after{width:100%}
.nav-links a.active{color:var(--text)}
.nav-links a.active::after{width:100%;background:var(--red)}
.nav-right{display:flex;align-items:center;gap:20px}
@property --btn-angle{syntax:'<angle>';initial-value:0deg;inherits:false}
@keyframes btn-spark{to{--btn-angle:360deg}}
.btn-nav{color:#fff;padding:10px 24px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;border-radius:var(--radius,4px);transition:transform 0.2s;cursor:pointer;border:2px solid transparent;background:linear-gradient(#1b3eef,#1b3eef) padding-box,conic-gradient(from var(--btn-angle),#1530c0 0%,#5577ff 30%,#fff 50%,#5577ff 70%,#1530c0 100%) border-box;animation:btn-spark 2.5s linear infinite;display:inline-flex;align-items:center;text-decoration:none}
.btn-nav:hover{transform:translateY(-1px)}
.btn-primary{display:inline-flex;align-items:center;gap:10px;color:#ffffff;padding:16px 32px;font-size:14px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;border-radius:var(--radius,4px);transition:transform 0.2s;border:2px solid transparent;background:linear-gradient(#ff0006,#ff0006) padding-box,conic-gradient(from var(--btn-angle),#cc0005 0%,#ff6666 30%,#fff 50%,#ff6666 70%,#cc0005 100%) border-box;animation:btn-spark 2.5s linear infinite;text-decoration:none}
.btn-primary:hover{transform:translateY(-2px)}
.hamburger{display:none;align-items:center;justify-content:center;cursor:pointer;background:none;border:1px solid rgba(0,0,0,0.12);padding:6px;width:36px;height:36px;border-radius:var(--radius,4px);color:var(--text,#111827);transition:border-color 0.2s,background 0.2s}
.hamburger:hover{background:var(--surface,#f4f7ff)}
.hamburger-svg{display:block;width:20px;height:20px;transition:transform 0.3s ease-in-out}
.hamburger.open .hamburger-svg{transform:rotate(-45deg)}
.hamburger-svg .h-path1{transition:stroke-dasharray 0.3s ease-in-out,stroke-dashoffset 0.3s ease-in-out;stroke-dasharray:12 63}
.hamburger.open .hamburger-svg .h-path1{stroke-dasharray:20 300;stroke-dashoffset:-32.42px}
/* dropdown */
.nav-links li{position:relative;list-style:none}
.nav-drop-parent{display:flex;align-items:center;gap:5px;cursor:pointer;background:none;border:none;padding:0;font-size:13px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted,#6b7280);font-family:inherit;transition:color 0.3s}
.nav-drop-parent:hover{color:var(--text,#111827)}
.nav-chevron{width:11px;height:11px;stroke:currentColor;fill:none;stroke-width:2.5;flex-shrink:0;transition:transform 0.2s;margin-top:1px}
.nav-links li:hover .nav-chevron{transform:rotate(180deg)}
.nav-dropdown{position:absolute;top:calc(100% + 14px);left:50%;transform:translateX(-50%) translateY(-6px);background:#fff;border:1px solid rgba(0,0,0,0.08);border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.13),0 2px 8px rgba(0,0,0,0.05);padding:8px;min-width:210px;opacity:0;pointer-events:none;transition:opacity 0.2s ease,transform 0.2s ease;z-index:1100}
.nav-links li:hover .nav-dropdown{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.nav-dropdown a{display:flex;align-items:center;gap:9px;padding:10px 14px;border-radius:8px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:var(--text,#111827);white-space:nowrap;transition:background 0.15s,color 0.15s;text-decoration:none}
.nav-dropdown a::after{display:none!important}
.nav-dropdown a:hover{background:var(--surface,#f4f7ff);color:var(--red,#ff0006)}
.nav-dropdown-dot{width:5px;height:5px;border-radius:50%;background:var(--red,#ff0006);flex-shrink:0;opacity:0;transition:opacity 0.15s}
.nav-dropdown a:hover .nav-dropdown-dot{opacity:1}
/* mobile menu */
.mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.99);backdrop-filter:blur(20px);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:24px;opacity:0;pointer-events:none;transition:opacity 0.3s;overflow-y:auto;padding:80px 32px}
.mobile-menu.open{opacity:1;pointer-events:all;display:flex}
.mobile-menu > a{font-family:'Barlow Condensed',sans-serif;font-size:42px;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;color:var(--muted,#6b7280);transition:color 0.2s;text-decoration:none}
.mobile-menu > a:hover{color:var(--text,#111827)}
.mob-group{width:100%;text-align:center}
.mob-group-title{font-family:'Barlow Condensed',sans-serif;font-size:38px;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;color:var(--muted,#6b7280);display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;transition:color 0.2s;background:none;border:none;padding:0;font-family:inherit;width:100%}
.mob-group-title:hover,.mob-group-title.open{color:var(--text,#111827)}
.mob-group-title svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2.5;transition:transform 0.25s}
.mob-group-title.open svg{transform:rotate(180deg)}
.mob-subnav{max-height:0;overflow:hidden;transition:max-height 0.3s ease;display:flex;flex-direction:column;align-items:center;gap:10px;margin-top:0}
.mob-subnav.open{max-height:600px;margin-top:14px}
.mob-subnav a{font-size:15px;font-family:'Barlow',sans-serif;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:var(--muted,#6b7280);transition:color 0.2s;text-decoration:none}
.mob-subnav a:hover{color:var(--red,#ff0006)}
.mobile-menu .mob-phone{font-size:22px;font-family:'Barlow',sans-serif;font-weight:600;color:var(--text,#111827);text-decoration:none}
.mobile-menu .btn-nav{font-size:14px;padding:14px 40px}
@media(max-width:900px){.nav-links,.nav-right{display:none}.hamburger{display:flex}}
/* ── FOOTER ── */
footer.site-footer{background:#111827;border-top:4px solid #ff0006;position:relative;overflow:hidden}
#footerCanvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:0.45;display:block}
footer.site-footer::after{content:'';position:absolute;inset:0;background:rgba(10,14,26,0.65);pointer-events:none;z-index:0}
.footer-main{max-width:1400px;margin:0 auto;padding:72px 48px 48px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:48px;position:relative;z-index:1}
.footer-brand .nav-logo-img{filter:brightness(0) invert(1)}
.footer-brand p{font-size:14px;color:#ffffff;line-height:1.7;margin:16px 0 24px}
.footer-tagline{font-size:12px;font-style:italic;color:#ffffff;margin-bottom:16px!important}
.payment-icons{display:flex;gap:8px;flex-wrap:wrap}
.pay-icon{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:5px 12px;border-radius:4px;font-size:10px;font-weight:700;letter-spacing:0.08em;color:#ffffff}
.footer-col h4{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:0.1em;color:#ffffff;margin-bottom:20px}
.footer-col ul{list-style:none;display:flex;flex-direction:column;gap:10px;padding:0}
.footer-col ul a{font-size:14px;color:#ffffff;transition:opacity 0.2s;text-decoration:none}
.footer-col ul a:hover{opacity:0.75}
.footer-contact-item{display:flex;gap:10px;font-size:14px;color:#ffffff;margin-bottom:12px;line-height:1.5}
.footer-contact-item svg{flex-shrink:0;margin-top:2px;color:#ff0006}
.footer-contact-item a{color:#ffffff;text-decoration:none}
.footer-bottom{border-top:1px solid rgba(255,255,255,0.1);max-width:1400px;margin:0 auto;padding:20px 48px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;position:relative;z-index:1}
.footer-copy{font-size:12px;color:#ffffff}
.footer-badge{font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#ffffff;background:#1b3eef;border:1px solid #1b3eef;padding:4px 12px;border-radius:40px}
@media(max-width:900px){.footer-main{grid-template-columns:1fr;padding:48px 24px 32px;text-align:center}.footer-col ul{align-items:center}.footer-contact-item{justify-content:center}.payment-icons{justify-content:center}.footer-bottom{padding:20px 24px;flex-direction:column;text-align:center}}
@media(max-width:768px){.footer-main{padding:48px 20px 32px}.footer-bottom{padding:20px}}
`;

  /* ─── NAVBAR HTML ────────────────────────────────────────────── */
  const navHTML = `
<nav id="nav">
  <a href="index.html" class="nav-logo">
    <img src="Assets/logo.webp" alt="Flatts Heating &amp; Cooling" class="nav-logo-img">
  </a>
  <ul class="nav-links">
    <li>
      <span class="nav-drop-parent">Services<svg class="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></span>
      <div class="nav-dropdown">
        <a href="ac.html"><span class="nav-dropdown-dot"></span>Air Conditioning</a>
        <a href="heating.html"><span class="nav-dropdown-dot"></span>Heating</a>
        <a href="heat-pumps.html"><span class="nav-dropdown-dot"></span>Heat Pumps</a>
        <a href="indoor-air-quality.html"><span class="nav-dropdown-dot"></span>Indoor Air Quality</a>
        <a href="refrigeration.html"><span class="nav-dropdown-dot"></span>Refrigeration</a>
        <a href="water-heaters.html"><span class="nav-dropdown-dot"></span>Water Heaters</a>
        <a href="generators.html"><span class="nav-dropdown-dot"></span>Generators</a>
      </div>
    </li>
    <li>
      <span class="nav-drop-parent">Service Areas<svg class="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></span>
      <div class="nav-dropdown">
        <a href="sparta-tn.html"><span class="nav-dropdown-dot"></span>Sparta, TN</a>
        <a href="cookeville-tn.html"><span class="nav-dropdown-dot"></span>Cookeville, TN</a>
        <a href="crossville-tn.html"><span class="nav-dropdown-dot"></span>Crossville, TN</a>
        <a href="smithville-tn.html"><span class="nav-dropdown-dot"></span>Smithville, TN</a>
        <a href="spencer-tn.html"><span class="nav-dropdown-dot"></span>Spencer, TN</a>
        <a href="mcminnville-tn.html"><span class="nav-dropdown-dot"></span>McMinnville, TN</a>
        <a href="monterey-tn.html"><span class="nav-dropdown-dot"></span>Monterey, TN</a>
        <a href="fairfield-glade-tn.html"><span class="nav-dropdown-dot"></span>Fairfield Glade, TN</a>
      </div>
    </li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <div class="nav-right">
    <a href="tel:9318084249" class="btn-primary" style="padding:10px 22px;font-size:12px">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.87 9.8 19.79 19.79 0 01.78 1.14 2 2 0 012.76 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      (931) 808-4249
    </a>
    <a href="contact.html" class="btn-nav">Free Quote</a>
  </div>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <svg class="hamburger-svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path class="h-path1" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"/>
      <path d="M7 16 27 16"/>
    </svg>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <div class="mob-group">
    <button class="mob-group-title" id="mobServicesToggle">Services<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
    <div class="mob-subnav" id="mobServicesMenu">
      <a href="ac.html">Air Conditioning</a>
      <a href="heating.html">Heating</a>
      <a href="heat-pumps.html">Heat Pumps</a>
      <a href="indoor-air-quality.html">Indoor Air Quality</a>
      <a href="refrigeration.html">Refrigeration</a>
      <a href="water-heaters.html">Water Heaters</a>
      <a href="generators.html">Generators</a>
    </div>
  </div>
  <div class="mob-group">
    <button class="mob-group-title" id="mobAreasToggle">Service Areas<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
    <div class="mob-subnav" id="mobAreasMenu">
      <a href="sparta-tn.html">Sparta, TN</a>
      <a href="cookeville-tn.html">Cookeville, TN</a>
      <a href="crossville-tn.html">Crossville, TN</a>
      <a href="smithville-tn.html">Smithville, TN</a>
      <a href="spencer-tn.html">Spencer, TN</a>
      <a href="mcminnville-tn.html">McMinnville, TN</a>
      <a href="monterey-tn.html">Monterey, TN</a>
      <a href="fairfield-glade-tn.html">Fairfield Glade, TN</a>
    </div>
  </div>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
  <a href="tel:9318084249" class="mob-phone">(931) 808-4249</a>
  <a href="contact.html" class="btn-nav">Get Free Quote</a>
</div>`;

  /* ─── FOOTER HTML ────────────────────────────────────────────── */
  const footerHTML = `
<footer class="site-footer">
  <canvas id="footerCanvas" aria-hidden="true"></canvas>
  <div class="footer-main">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo" style="margin-bottom:16px;display:inline-flex">
        <img src="Assets/logo.webp" alt="Flatts Heating &amp; Cooling" class="nav-logo-img">
      </a>
      <p class="footer-tagline">Proudly servicing the Sparta area for 15 years, with over 25 years of combined experience!</p>
      <p>Your trusted local HVAC experts serving Sparta, TN and surrounding communities. Quality work, honest pricing, and 24/7 emergency availability.</p>
      <div class="payment-icons" style="margin-top:20px">
        <span class="pay-icon">VISA</span>
        <span class="pay-icon">MASTERCARD</span>
        <span class="pay-icon">AMEX</span>
        <span class="pay-icon">DISCOVER</span>
        <span class="pay-icon">CASH</span>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="ac.html">Air Conditioning</a></li>
        <li><a href="heating.html">Heating</a></li>
        <li><a href="heat-pumps.html">Heat Pumps</a></li>
        <li><a href="indoor-air-quality.html">Indoor Air Quality</a></li>
        <li><a href="refrigeration.html">Refrigeration</a></li>
        <li><a href="water-heaters.html">Water Heaters</a></li>
        <li><a href="generators.html">Generators</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Service Areas</h4>
      <ul>
        <li><a href="sparta-tn.html">Sparta, TN</a></li>
        <li><a href="cookeville-tn.html">Cookeville, TN</a></li>
        <li><a href="crossville-tn.html">Crossville, TN</a></li>
        <li><a href="smithville-tn.html">Smithville, TN</a></li>
        <li><a href="spencer-tn.html">Spencer, TN</a></li>
        <li><a href="mcminnville-tn.html">McMinnville, TN</a></li>
        <li><a href="monterey-tn.html">Monterey, TN</a></li>
        <li><a href="fairfield-glade-tn.html">Fairfield Glade, TN</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Us</h4>
      <div class="footer-contact-item">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.87 9.8 19.79 19.79 0 01.78 1.14 2 2 0 012.76 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        <a href="tel:9318084249">(931) 808-4249</a>
      </div>
      <div class="footer-contact-item">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        9750 Crossville Hwy, Sparta, TN 38583
      </div>
      <div class="footer-contact-item">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        info@flattsheatingandcooling.com
      </div>
      <div class="footer-contact-item">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        24/7 Emergency Available
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">&copy; 2026 Flatt's Heating &amp; Cooling. All rights reserved.</span>
    <span class="footer-badge">Licensed &amp; Insured</span>
  </div>
</footer>`;

  /* ─── INJECT CSS ─────────────────────────────────────────────── */
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ─── INJECT NAV ─────────────────────────────────────────────── */
  const navPlaceholder = document.getElementById('site-nav');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = navHTML;
  }

  /* ─── INJECT FOOTER ──────────────────────────────────────────── */
  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = footerHTML;
  }

  /* ─── INIT NAV JS ────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  const mobServicesToggle = document.getElementById('mobServicesToggle');
  const mobServicesMenu   = document.getElementById('mobServicesMenu');
  if (mobServicesToggle && mobServicesMenu) {
    mobServicesToggle.addEventListener('click', function () {
      this.classList.toggle('open');
      mobServicesMenu.classList.toggle('open');
    });
  }

  const mobAreasToggle = document.getElementById('mobAreasToggle');
  const mobAreasMenu   = document.getElementById('mobAreasMenu');
  if (mobAreasToggle && mobAreasMenu) {
    mobAreasToggle.addEventListener('click', function () {
      this.classList.toggle('open');
      mobAreasMenu.classList.toggle('open');
    });
  }

  /* ─── FOOTER WEBGL DITHERING SHADER ─────────────────────────── */
  (function initFooterShader() {
    const canvas = document.getElementById('footerCanvas');
    if (!canvas) return;
    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const COLOR_BACK  = [0.067, 0.094, 0.153, 1];
    const COLOR_FRONT = [0.106, 0.243, 0.937, 1];
    const PX_SIZE = 3.0;
    const SPEED   = 0.4;

    const simplexNoise = `
vec3 permute(vec3 x){return mod(((x*34.)+1.)*x,289.);}
float snoise(vec2 v){
  const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
  vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;
  i=mod(i,289.);
  vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
  vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
  m=m*m;m=m*m;
  vec3 x=2.*fract(p*C.www)-1.;
  vec3 h=abs(x)-.5;
  vec3 ox=floor(x+.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.*dot(m,g);
}`;

    const vs = `#version 300 es
precision mediump float;
layout(location=0) in vec4 a_position;
void main(){gl_Position=a_position;}`;

    const fs = `#version 300 es
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_pxSize;
out vec4 fragColor;
${simplexNoise}
const int bayer8x8[64]=int[64](
   0,32, 8,40, 2,34,10,42,
  48,16,56,24,50,18,58,26,
  12,44, 4,36,14,46, 6,38,
  60,28,52,20,62,30,54,22,
   3,35,11,43, 1,33, 9,41,
  51,19,59,27,49,17,57,25,
  15,47, 7,39,13,45, 5,37,
  63,31,55,23,61,29,53,21
);
void main(){
  float t=.5*u_time;
  vec2 pxSizeUv=gl_FragCoord.xy;
  pxSizeUv-=.5*u_resolution;
  pxSizeUv/=u_pxSize;
  vec2 pixelizedUv=floor(pxSizeUv)*u_pxSize/u_resolution.xy;
  pixelizedUv+=.5;pixelizedUv-=.5;
  vec2 shape_uv=pixelizedUv*4.;
  float wave=cos(.5*shape_uv.x-2.*t)*sin(1.5*shape_uv.x+t)*(.75+.25*cos(3.*t));
  float shape=1.-smoothstep(-1.,1.,shape_uv.y+wave);
  ivec2 pos=ivec2(mod(pxSizeUv,8.));
  float dithering=float(bayer8x8[pos.y*8+pos.x])/64.;
  dithering-=.5;
  float res=step(.5,shape+dithering);
  vec3 fgColor=u_colorFront.rgb*u_colorFront.a;
  float fgOpacity=u_colorFront.a;
  vec3 bgColor=u_colorBack.rgb*u_colorBack.a;
  float bgOpacity=u_colorBack.a;
  vec3 color=fgColor*res;
  float opacity=fgOpacity*res;
  color+=bgColor*(1.-opacity);
  opacity+=bgOpacity*(1.-opacity);
  fragColor=vec4(color,opacity);
}`;

    function compileShader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(s)); return null; }
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.error(gl.getProgramInfoLog(prog)); return; }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime   = gl.getUniformLocation(prog, 'u_time');
    const uRes    = gl.getUniformLocation(prog, 'u_resolution');
    const uBack   = gl.getUniformLocation(prog, 'u_colorBack');
    const uFront  = gl.getUniformLocation(prog, 'u_colorFront');
    const uPxSize = gl.getUniformLocation(prog, 'u_pxSize');

    const footer    = canvas.closest('footer');
    const startTime = Date.now();

    function resize() {
      const w = footer.offsetWidth;
      const h = footer.offsetHeight;
      canvas.width  = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }

    function render() {
      const t = (Date.now() - startTime) * 0.001 * SPEED;
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform4fv(uBack, COLOR_BACK);
      gl.uniform4fv(uFront, COLOR_FRONT);
      gl.uniform1f(uPxSize, PX_SIZE);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    }

    resize();
    window.addEventListener('resize', resize);
    render();
  })();

})();
