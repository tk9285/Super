let cssanimation = document.getElementById("showhideAnimation");
let login = document.getElementById("container-login");
let careers = document.getElementById("container-careers");
let planes = document.getElementById("container-planes");
function showLogin()
{
	if(cssanimation.style.display == "block")
	{
		cssanimation.style.display = "none";
		login.style.display = "flex";
		careers.style.display = "none";
		planes.style.display = "none";
	}
	else if(login.style.display == "flex")
	{
		login.style.display = "none";
		cssanimation.style.display = "block";
		careers.style.display = "none";
		planes.style.display = "none";		
	}
	else if(careers.style.display == "flex")
	{
		careers.style.display = "none";
		cssanimation.style.display = "none";
		login.style.display = "flex";
		planes.style.display = "none";
	}
	else if(planes.style.display == "flex")
	{
		planes.style.display = "none";
		cssanimation.style.display = "none";
		login.style.display = "flex";
		careers.style.display = "none";
	}
}
function showCareers()
{
	if(cssanimation.style.display == "block")
	{
		cssanimation.style.display = "none";
		login.style.display = "none";
		careers.style.display = "flex";
		planes.style.display = "none";
	}
	else if(login.style.display == "flex")
	{
		login.style.display = "none";
		cssanimation.style.display = "none";
		careers.style.display = "flex";
		planes.style.display = "none";		
	}
	else if(careers.style.display == "flex")
	{
		careers.style.display = "none";
		cssanimation.style.display = "block";
		login.style.display = "none";
		planes.style.display = "none";
	}
	else if(planes.style.display == "flex")
	{
		planes.style.display = "none";
		cssanimation.style.display = "none";
		login.style.display = "none";
		careers.style.display = "flex";
	}
}
function showPlanes()
{
   	if(cssanimation.style.display == "block")
	{
		cssanimation.style.display = "none";
		login.style.display = "none";
		careers.style.display = "none";
		planes.style.display = "flex";
	}
	else if(login.style.display == "flex")
	{
		login.style.display = "none";
		cssanimation.style.display = "none";
		careers.style.display = "none";
		planes.style.display = "flex";		
	}
	else if(careers.style.display == "flex")
	{
		careers.style.display = "none";
		cssanimation.style.display = "none";
		login.style.display = "none";
		planes.style.display = "flex";
	}
	else if(planes.style.display == "flex")
	{
		planes.style.display = "none";
		cssanimation.style.display = "block";
		login.style.display = "none";
		careers.style.display = "none";
	}
}