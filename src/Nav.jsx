import React,{useState} from 'react'



const Nav = () => {

  
        let[off,on]=useState(false)
        let handeleChange=()=>{
          if(!off)
            {
                on(true)
                document.querySelector("#deli").style.color="white"
                document.querySelector("#dine").style.color="orange"
            }
            else{
              on(false)
               document.querySelector("#deli").style.color="orange"
               document.querySelector("#dine").style.color="white"
                

            }
            
        }





  return (
   <nav>
   <div>
   <div class="offcanvas offcanvas-start" id="demo">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title">WELL COME</h1>
    <button  type="button" class="btn-close " data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
 
    <button class="btn btn-secondary" type="button">LOG IN</button>
  </div>
</div>

<div class="container-fluid mt-3">

  <button class="btn butto" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
  <img src={"https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"} width={"30px"} alt="" />
  </button>
</div>
   </div>
   <div>
    <img src="https://e7.pngegg.com/pngimages/974/201/png-clipart-germany-national-football-team-german-football-association-coat-of-arms-of-germany-football-emblem-label.png" alt="" width={"120px"} />
   </div>



<div id='nav'>
<div id='deli'>
    DELIVERY          
</div >


<img className="rounded" onClick={handeleChange}
      src={!off ? "https://static.vecteezy.com/system/resources/thumbnails/011/888/137/small/neumorphism-ui-toggle-switch-free-png.png" : "https://static.vecteezy.com/system/resources/thumbnails/011/888/096/small/neumorphism-toggle-switch-button-free-png.png"} alt="" />
<div id='dine'>
    DINE-IN/TAKEAWAY
</div>
</div>
   </nav>
  )
}

export default Nav