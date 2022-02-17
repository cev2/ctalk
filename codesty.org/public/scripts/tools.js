async function invite(){

    let invname = document.getElementById("invite-input");
    if(invname.value === "") return;

    let button = document.getElementById("invite-button")
    button.classList.add("is-loading");

    let data = await fetch(`/info/invite/${invname.value}`).then(a => a.json()).then(a => a)
    let column = document.getElementById("invite-column")

    button.classList.remove("is-loading");

    if(!data.iconURL){
        column.classList.add("is-hidden");
        return
    }
    column.classList.remove("is-hidden");


    column.innerHTML = `<img  class="is-rounded unselectable" src="${data.iconURL}" style="width: 90px !important; height: 90px !important; border-radius: 50%;">

    <h1 class="is-size-3 has-text-weight-bold" style="color: #fff;" id="invite-servername">${data.servername}</h1>
    <h2 class="is-size-4" style="color: #fff !important;"  id="invite-servername" >Sunucuda ${data.memberSize} üye var. (${data.onlineSize} çevrim içi)</h2>
    <h2 class="is-size-6 mt-2" style="color: #ebe9e9 !important;">Bu davet ${data.usertag} (${data.userid}) tarafından oluşturulmuş.</h2>`
}

async function user(){
    let invname = document.getElementById("user-input");
    if(invname.value === "") return;

    let button = document.getElementById("user-button")
    button.classList.add("is-loading");

    let data = await fetch(`/info/user/${invname.value}`).then(a => a.json()).then(a => a)
    let column = document.getElementById("user-column")

    button.classList.remove("is-loading");

    if(!data.usertag){
        column.classList.add("is-hidden");
        return
    }
    column.classList.remove("is-hidden");


    column.innerHTML = `<img  class="is-rounded unselectable" src="${data.avatarURL}" style="width: 90px !important; height: 90px !important; border-radius: 50%;">

    <h1 class="is-size-3 has-text-weight-bold" style="color: #fff;">${data.usertag}</h1>
    <h2 class="is-size-4" style="color: #fff !important;">${data.createdAt} tarihinde oluşturulmuş.</h2>
    <h2 class="is-size-6 mt-2" style="color: #ebe9e9 !important;">Bu tarihten itibaren ${data.sinceDays} gün geçmiş.</h2>

    <div class="images mt-3">
    ${data.badges.map(x => `<img class="is-rounded unselectable" src="../public/images/${x}" style="width: 30px !important; height: 30px; display: inline-block;">`).join("\n")}

      
    </div>`
    
}


async function snowflakeid(){


    let invname = document.getElementById("id-input");
    if(invname.value === "") return;

    let button = document.getElementById("id-button")
    button.classList.add("is-loading");

    let data = await fetch(`/info/snowflake/${invname.value}`).then(a => a.json()).then(a => a)
    let column = document.getElementById("id-column")

    button.classList.remove("is-loading");

    if(!data.createdAt){
        column.classList.add("is-hidden");
        return
    }

    column.classList.remove("is-hidden");


    column.innerHTML = `
    <h2 class="is-size-5" style="color: #fff !important;">${data.createdAt} tarihinde oluşturulmuş.</h2>
    <h2 class="is-size-6 mt-2" style="color: #ebe9e9 !important;">Bu tarihten itibaren ${data.sinceDays} gün geçmiş.</h2>`
}