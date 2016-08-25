$(function(){
	var e=$(".e");
	var list=$(".list");
	for(var i=0;i<e.length;i++){
        e[i].index=i;
        e[i].onmouseover=function(){
        	list[this.index].style.display="block";
        }
        e[i].onmouseout=function(){
        	list[this.index].style.display="none";
        	/*for(var j=0;j<e.length;j++){
        		list[j].style.display="none";
        	}*/
        }
	}
	var imga=$("a",$(".box")[0]);
	var li=$("div",$(".sq")[0]);
	var win=$(".tupian")[0];
	var r=$(".tupian_right")[0];
	var l=$(".tupian_left")[0];
	imga[0].style.opacity=1;
	li[0].style.background="red";
	var num=0;
	var flag=true;
	function move(){
		num++;
		if(num==imga.length){
			num=0;
		}
		for(var i=0;i<imga.length;i++){
			// imga[i].style.opacity=0;
			animate(imga[i],{opacity:0});
			li[i].style.background="#eee";
		}
		// imga[num].style.opacity=1;
		animate(imga[num],{opacity:1},function(){
			flag=true;
		});
		li[num].style.background="red";
	}
	t=setInterval(move,2000);
    win.onmouseover=function(){
    	r.style.display="block";
    	l.style.display="block";
    	clearInterval(t);
    }
    win.onmouseout=function(){
    	r.style.display="none";
    	l.style.display="none";
    	t=setInterval(move,2000);
    }
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
    		for(var j=0;j<li.length;j++){
    			li[j].style.background="#eee";
    			// imga[j].style.opacity=0;
    			animate(imga[j],{opacity:0});
    		}
    		li[this.index].style.background="red";
    		// imga[this.index].style.opacity=1;
    		animate(imga[this.index],{opacity:1});
    		num=this.index;
    	}
    }
	r.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	l.onclick=function(){
		if(flag){
			flag=false;
			movel();
		}
	}
	function movel(){
		num--;
		if(num<0){
			num=li.length-1;
		}
		for(var i=0;i<li.length;i++){
			li[i].style.background="#eee";
			// imga[i].style.opacity=0;
			animate(imga[i],{opacity:0});
		}
		li[num].style.background="red";
		// imga[num].style.opacity=1;
		animate(imga[num],{opacity:1},function(){
			flag=true;
		});
	}
	//中间四个图的轮播

	  var zt=$(".zhongtu")[0];
    var sss=$(".sss",zt)[0];
    var big=$(".big",sss)[0];
    var divs=big.getElementsByTagName("div");
    var widths=parseInt(getStyle(divs[0],"width"));
    var left=$(".tu_left",$(".zhongtu")[0])[0];
    var right=$(".tu_right",$(".zhongtu")[0])[0];
    left.style.display="none";
    right.style.display="none";
    var flag=true;
    var q=setInterval(moveR,2000);
    function moveR(){
      flag=false;
      animate(big,{left:-widths},function(){
      	var fChild=firstChild(big);
      	big.appendChild(fChild);
      	big.style.left=0;
        flag=true;
      })
    }
     right.onclick=function(){
      if(flag){
        flag=false;
        moveR();
      }
     	
     }
 	left.onclick=function(){
 		if(flag){
        flag=false;
        moveL();
      }
 	}
 	function moveL(){
      var first=firstChild(big);
      var last=lastChild(big);
      big.insertBefore(last,first);
      big.style.left=-widths+"px";
      animate(big,{left:0},function(){
        flag=true;
      })
    }

  zt.onmouseover=function(){
    clearInterval(q);
    left.style.display="block";
    right.style.display="block";
  }
  zt.onmouseout=function(){
    q=setInterval(moveR,2000)
    left.style.display="none";
    right.style.display="none";
  }
   //固定定位
   var zx=$(".zx")[0];
   var cj=$(".cj")[0];
   var ts=$(".ts")[0];
   zx.onmouseover=function(){
    animate(zx,{right:30})
   }
   cj.onmouseover=function(){
    animate(cj,{right:30})
   }
   ts.onmouseover=function(){
    animate(ts,{right:30})
   }
   zx.onmouseout=function(){
    animate(zx,{right:-34})
   }
   cj.onmouseout=function(){
    animate(cj,{right:-34})
   }
   ts.onmouseout=function(){
    animate(ts,{right:-34})
   }
   //充值缴费 
   var mobile=$(".mobile")[0];
   var inputa=$("input",mobile)[0];
   inputa.onfocus=function(){
      var oval=inputa.value;
      inputa.value="";
   }
   inputa.onblur=function(){
      var nval=inputa.value; 
      if(nval=/\s+$/g,""){
        inputa.value=oval;
      }else{
        inputa.value=nval;
      }
   }  
})