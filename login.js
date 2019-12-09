
function Login(){
    var login=document.getElementById('login');
    var bg=document.getElementById('bg');
    var adminBtn=document.getElementById('person');
    adminBtn.onclick=function(){
        login.style.display="block";
        bg.style.display="block";
        return false; 
}
    var closeBtn=document.getElementById('closeBtn');
    closeBtn.onclick=function(){
        login.style.display="none";
        bg.style.display="none";
        return false;
}
}



/* var login_title=document.getElementById('login-title');
            login_title.onmousedown=function(e){
                e = e || window.event;
                var x=e.pageX || e.clientX +(document.body.scrollLeft || document.documentElement.scrollLeft);
                var y=e.pageY || e.clientY +(document.body.scrollTop || document.documentElement.scrollTop);
                
                var boxX=login.offsetLeft;
                var boxY=login.offsetTop;
                
                var mouse_in_boxX=x-boxX;
                var mouse_in_boxY=y-boxY;
                
                document.onmousemove=function(e){
                    var x=e.pageX || e.clientX +(document.body.scrollLeft || document.documentElement.scrollLeft);
                    var y=e.pageY || e.clientY +(document.body.scrollTop || document.documentElement.scrollTop);
                    
                    login.style.left=x-mouse_in_boxX+256+'px';
                    login.style.top=y-mouse_in_boxY-142+'px';
                }
            }
            
            login_title.onmouseup = function(){
                document.onmousemove=null;
            } */