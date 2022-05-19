

function reply_click(){
   let arg = event.srcElement.id
    let st = document.querySelectorAll("li a")

        for (var i = 0; i < st.length; i++) {
          st[i].classList.remove("active");
        }
    
    document.getElementById(arg).classList.add('active') 
    
}
