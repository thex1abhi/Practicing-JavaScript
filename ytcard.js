function createcard( title,cName,views,monthsold,duration,thumbnail){

 let viewStr
       if(views <1000){
           viewStr=views
       } else if (views>=1000000){
           viewStr=views/1000000 +"M";
       }
       else{
         viewStr=views/1000+"K"
       }

    let html=`<div class="card">
       <div class="image">
        <img class="image" src="${thumbnail}" alt="error">
        <div class="capsule"> ${duration}  </div>
       </div>
       <div class="text">
  <h2>   ${title}  </h2>
  <p> ${cName}. ${viewStr} views . ${monthsold} months ago</p>
       </div>
    </div> `
      document.querySelector(".container").innerHTML=   document.querySelector(".container").innerHTML+html
}

createcard(" Introduction to coding lecture 1|  Wolf  wev development Course  ","Coding lover",100,7,"40:22","4.jpg")
createcard(" Introduction to hacking lecture 1|  Wolf hacking Course  ","Coding lover",69000,2,"47:22","4.jpg")