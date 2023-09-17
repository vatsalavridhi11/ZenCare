let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function validateform(){  
    var name=document.form.name.value;  
    var password=document.form.password.value;  
    var secondpassword=document.form.password2.value;  
    var name2=document.getElementById("red");
    var pass3=document.getElementById("blue");
    var pass4=document.getElementById("green");  
      
    if (name==null || name==""){  
     alert("Please Fill Out Your Name!");  
     name2.style.borderColor="rgba(215, 77, 87)";
      return false;  
    }
    else{
        name2.style.borderColor="#758aff";  
    }
    
    if(password.length<6){  
    alert("Password must be at least 6 characters long.");
    pass3.style.borderColor="rgba(215, 77, 87)";
    return false;  
    }
    else{
        name2.style.borderColor="#758aff";  
    }  
    if(password==secondpassword){  
        return true;  
        }  
    else{  
    alert("Password doesn't match!"); 
    pass4.style.borderColor="rgba(215, 77, 87)"; 
    return false;  
        }  
    }
    function validatelogin()
    {
        var pass=document.myform.password.value;
        var passwo=document.getElementById("red1");
        if(pass.length<6){  
            alert("Password must be at least 6 characters long."); 
            passwo.style.borderColor="rgba(215, 77, 87)"; 
            return false;  
    }  

    }
        
   