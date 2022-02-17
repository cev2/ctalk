

async function user(){
  let uid = document.getElementById("userid");
  if(uid.value === "") return;
  window.location.href = `/server/${uid.value}`;
}

async function server(id){
  window.location.href = `/server/${id}`;
}


      
   
