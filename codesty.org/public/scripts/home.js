let current=""
let tab_current="total"
let current_tab="total-servers"
let expand_data=""
let currentchart=""
let chartinfo={}
let tab_winner_data={}
async function tab(sec){let res=document.getElementById(tab_current);res.style.backgroundColor="transparent";tab_current=sec;let current=document.getElementById(sec);current.style.backgroundColor="#161616";}
async function server(id){window.location.href=`/search/${id}`;}
const socket=io()
socket.on("get-guild-info",(servers)=>{let keys=Object.keys(servers)
let ServerMap=new Map([])
for(let x=0;x<keys.length;x++){let typeServer=servers[[keys[x]]];let text=`
  <div class="bottompart" style = " margin-left:auto; margin-right:auto; text-align: center; margin-top: 7px; margin-bottom: 50px; display: initial;">
  `;for(let i=0;i<typeServer.length;i++){text=text+`
  <div class="card mb-3 server-list top-4 tet h-item"  id = "${typeServer[i].id}"  id ="tab-content" style="background-color: #161616; height: 90px; display: block;  margin-bottom: 6px !important; width: 950px; margin-left: auto !important; margin-right: auto !important;" onclick="server('${typeServer[i].id}')">
  <div class="userinfo" style="margin-left: 3%; background-color: transparent !important; margin-bottom: 0px; float: left; margin-top: 20px !important;">
    <img  class="is-rounded unselectable" src="${typeServer[i].iconURL}" style="width: 50px !important; height: 50px !important; display: inline-block !important; vertical-align: middle; border-radius: 50%;">

    <div class="username" style="display: inline-block !important; vertical-align: middle;">
      <p>${typeServer[i].name}</p>
      <p style="font-size: 11.5px; float:left; color:#bdbdbd;">Günlük Ortalama: ${(typeServer[i].average&&typeServer[i].average.average)?typeServer[i].average.average:typeServer[i].voice}</p>

    </div>
    <!-- <span class="state-live" style="display: inline-block !important; margin-left: 4px;"><i class="fas fa-music" style="display: inline-block !important; font-size: 11px !important; color: white; margin-right: 7px; margin-top: 5px !important;"></i>Canlı Etkinlik</span> -->
  </div>

  <div class="box-right">
  <i class="fas fa-volume-down" style="color: #d3d3d3; font-size: 30px; float: right; margin-top: 28px; margin-right: 15px;"></i>
  <p style="float: right; margin-right: 20px; font-size: 30px; color: #f5f5f5; margin-top: 20px;">${typeServer[i].voice}</p>
  </div>

</div>

</div>`}
ServerMap.set(keys[x],text);}
for(let[k,v]of ServerMap){let file=document.getElementById(`${k}-servers`);file.innerHTML=v;}})
document.addEventListener('DOMContentLoaded',()=>{fixWinners("onload")
setTimeout(()=>{const tabs=document.querySelectorAll(".tab-headers");const tabBoxes=document.querySelectorAll(".server-listx");tabs.forEach((tab)=>{tab.addEventListener("click",()=>{const target=tab.dataset.target;tabBoxes.forEach(box=>{if(box.getAttribute("id")===target){box.classList.remove("is-hidden");current_tab=box.getAttribute("id")
checkDisplay()}else{box.classList.add("is-hidden");}})})})},1000)
setInterval(()=>{checkDisplay()},400)});async function checkDisplay(str){let doc=document.getElementById("winner-id")
if(str&&str==="onload"){doc.classList.remove("is-hidden")}
let intext=tab_winner_data[[current_tab.split("-")[0]]]
if(intext){let timetext=getTurkishTime(Date.now()-intext.time)
doc.innerHTML=`<i class="fas fa-clock mr-2" style="color: #f5f5f5"></i> ${intext.name}  —  ${timetext} süredir birinci.`}}
async function fixWinners(str){data=await fetch(`/winners`).then(a=>a.json()).then(a=>a)
tab_winner_data=data
if(str&&str==="onload"){checkDisplay("onload")}}
function getTurkishTime(remainingTime){let roundTowardsZero=remainingTime>0?Math.floor:Math.ceil;let hours=roundTowardsZero(remainingTime/3600000)%24,minutes=roundTowardsZero(remainingTime/60000)%60,seconds=roundTowardsZero(remainingTime/1000)%60
let arr=[]
if(hours!==0)arr.push(`${hours} saat`)
if(minutes!==0)arr.push(`${minutes} dakika`)
arr.push(`${seconds} saniye`)
return arr.join(", ")}
async function modal(){$(".modal").addClass("is-active");};async function closeModal(){$(".modal").removeClass("is-active");};