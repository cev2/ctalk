async function modal(){$(".modal").addClass("is-active");$(".server-wave").addClass("is-hidden");};async function closeModal(){$(".modal").removeClass("is-active");$(".server-wave").removeClass("is-hidden");};let profilestate="hidden"
function fade(){let fadeee=setInterval(()=>{const preloader=document.querySelector('.preloader');if(preloader.style.opacity==0)return
preloader.classList.add("is-hidden")
preloader.style.opacity=0;return
if(!preloader.style.opacity){preloader.style.opacity=0;}
if(preloader.style.opacity>0){preloader.style.opacity-=0.9;}else{clearInterval(fadeee);preloader.classList.add("is-hidden")}},550);}
function collapseAll(){console.log("hi")
const servers=document.querySelectorAll('.not-top-four');if(profilestate==="hidden"){profilestate="shown"
const chevron=document.querySelector('.not-top-four-chevron');chevron.classList.add("fa-chevron-up")
chevron.classList.remove("fa-chevron-right")
servers.forEach(x=>{x.classList.remove("is-hidden")})}else{profilestate="hidden"
const chevron=document.querySelector('.not-top-four-chevron');chevron.classList.remove("fa-chevron-up")
chevron.classList.add("fa-chevron-right")
servers.forEach(x=>{x.classList.add("is-hidden")})}}
function noticeClear(){let text=document.getElementById("notice-text");text.value=""}
async function user(){let uid=document.getElementById("userid");if(uid.value==="")return;window.location.href=`/search/${uid.value}`;}
document.addEventListener('DOMContentLoaded',function(){window.addEventListener('load',()=>{fade()
particlesJS("particles-js",{"particles":{"number":{"value":10,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles,stats,update;stats=new Stats;stats.setMode(0);stats.domElement.style.position='absolute';stats.domElement.style.left='0px';stats.domElement.style.top='0px';document.body.appendChild(stats.domElement);count_particles=document.querySelector('.js-count-particles');update=function(){stats.begin();stats.end();if(window.pJSDom[0].pJS.particles&&window.pJSDom[0].pJS.particles.array){count_particles.innerText=window.pJSDom[0].pJS.particles.array.length;}requestAnimationFrame(update);};requestAnimationFrame(update);;stats.domElement.style.display='none'});let navstate="visible"
var $navbarBurgers=Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0);if($navbarBurgers.length>0){$navbarBurgers.forEach(function($el){$el.addEventListener('click',function(){var navdrops=document.querySelectorAll(".nav-mobile")
navdrops.forEach((navitem)=>{if(navstate==="visible"){navitem.classList.remove("is-hidden")}else{navitem.classList.add("is-hidden")}})
if(navstate==="visible"){document.getElementById("close-dropdown").classList.add("is-hidden")
navstate="hidden"}else{document.getElementById("close-dropdown").classList.remove("is-hidden")
navstate="visible"}
var target=$el.dataset.target;var $target=document.getElementById(target);$el.classList.toggle('is-active');$target.classList.toggle('is-active');});});}});