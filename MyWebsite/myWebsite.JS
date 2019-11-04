/*var img = document.getElementById("backgroundImg");
var topNav = document.getElementById("topnav");

var topNavHeight = topNav.offsetHeight;
//var imgHeight = img.offsetHeight;


function initParallax()
{
	//if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
	if(window.pageYOffset > topNavHeight)
	{
		topNav.style.position = "fixed";
		//topNav.style.top = "0";
		topNav.className = "topNavWhenScroll";
		document.getElementById("topnav").style.fontSize = "25px";
	}
	else
	{
		topNav.style.position = "absolute";
		//topNav.style.top = "0";
		topNav.className = topNav.className.replace("topNavWhenScroll", "topnav")
		document.getElementById("topnav").style.fontSize = "16px";
	}
	img.style.top = -(window.pageYOffset/10)+"px";
}

window.addEventListener("scroll", initParallax);
*/
//document.getElementsByTagName("li").style.fontSize = "25px";

window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
	if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)
	{
		document.getElementById("topnav").style.fontSize = "16px";
		//topNav.className = "topNavWhenScroll";
	}
	else
	{
		document.getElementById("topnav").style.fontSize = "25px";
		//topNav.className = topNav.className.replace("topNavWhenScroll", "topnav")
	}
}