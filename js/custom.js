$(document).ready(function(){$(".hamburger").click(function(){$(".mobile_toggle_container").show(),$("body").addClass("overFlow")}),$(".chatWrapper").click(function(){$(".mobile_toggle_container").hide(),$("body").removeClass("overFlow")})});var forEach=function(e,o,a){for(var r=0;r<e.length;r++)o.call(a,r,e[r])};window.onload=function(){forEach(document.querySelectorAll(".progress"),function(e,o){percent=o.getAttribute("data-progress"),o.querySelector(".fill").setAttribute("style","stroke-dashoffset: "+-((100-percent)/100*219.99078369140625)),o.querySelector(".value").innerHTML=percent+"%"})};var xValues=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",],yValues=[150,120,180,250,350,320,230,240,200,110,290,360,];new Chart("myChart",{type:"line",data:{labels:xValues,datasets:[{fill:!1,lineTension:0,backgroundColor:"rgba(0,0,255,1.0)",borderColor:"rgba(0,0,255,0.1)",data:yValues},]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{stepSize:100,callback:function(e,o){return e+"k"}}},]}}});