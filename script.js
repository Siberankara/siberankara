const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const today = document.getElementById('today');
if (today) today.textContent = new Intl.DateTimeFormat('tr-TR',{day:'2-digit',month:'long',year:'numeric',weekday:'long'}).format(new Date());
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if(toggle && nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
