const s=[...document.querySelectorAll(".slide")],n=document.querySelector(".nums");let i=0,t;
s.forEach((_,x)=>{let b=document.createElement("button");b.textContent=x+1;b.onclick=()=>show(x,true);n.appendChild(b)});let bs=[...n.children];bs[0].classList.add("active");
function show(x,r=false){s[i].classList.remove("active");bs[i].classList.remove("active");i=(x+s.length)%s.length;s[i].classList.add("active");bs[i].classList.add("active");if(r)start()}
function start(){clearInterval(t);t=setInterval(()=>show(i+1),6000)}start();
document.querySelector(".next").onclick=()=>show(i+1,true);document.querySelector(".prev").onclick=()=>show(i-1,true);
document.querySelector("#form").onsubmit=e=>{e.preventDefault();document.querySelector("#msg").textContent="Teşekkürler. Bülten entegrasyonu sonraki aşamada bağlanacak.";e.target.reset()};