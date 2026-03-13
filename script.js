function showSection(id)
{

let sections=document.querySelectorAll(".content");

sections.forEach(section =>
{
section.style.display="none";
});

document.getElementById(id).style.display="block";

}



function openSchedule(page)
{

if(page!=="")
{
showSection(page);
}

}



window.onload=function()
{

showSection("home");

}



/* ANDROID AUDIO FIX */

document.addEventListener("click",function(){

let audio=document.getElementById("collegeAudio");

audio.play();

},{once:true});
