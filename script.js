function showSection(id)
{

let sections = document.querySelectorAll(".content");

sections.forEach(section =>
{
section.style.display="none";
});

document.getElementById(id).style.display="block";

let audio = document.getElementById("collegeAudio");

if(id === "home")
{
audio.currentTime = 0;
audio.play().catch(()=>{});
}
else
{
audio.pause();
audio.currentTime = 0;
}

}



function showDate(id)
{

let days = document.querySelectorAll(".date-content");

days.forEach(day =>
{
day.style.display="none";
});

document.getElementById(id).style.display="block";

}



window.onload=function()
{

showSection("home");
showDate("day1");

}
