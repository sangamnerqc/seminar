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



/* ABSTRACT SEARCH FUNCTION */

function searchAbstract()
{

let id=document.getElementById("abstractID").value;

if(id=="")
{
document.getElementById("resultBox").innerHTML="Please enter Abstract ID";
return;
}

let schedule=getSchedule(id);

document.getElementById("resultBox").innerHTML=

`
<h3>Abstract ID : ${id}</h3>

<p><b>Presentation Details</b></p>

<p>${schedule}</p>
`;

}



/* SCHEDULE MAPPING */

function getSchedule(id)
{

id=parseInt(id);



/* 16 MARCH SESSION */

if((id>=101 && id<=111) || (id>=127 && id<=131))
return "16 March 2026 | 3:30 PM – 5:30 PM | G1 | Seminar Hall | Marathi / Sanskrit";

if(id>=201 && id<=212)
return "16 March 2026 | 3:30 PM – 5:30 PM | G2 | Commerce";

if((id==301)||(id==302)||(id>=312 && id<=321))
return "16 March 2026 | 3:30 PM – 5:30 PM | G3 | Chemistry / Mathematics / Electronics / Botany / Zoology";

if(id>=112 && id<=126)
return "16 March 2026 | 3:30 PM – 5:30 PM | Seminar Hall | Hindi";

if(id>=303 && id<=311)
return "16 March 2026 | 3:30 PM – 5:30 PM | Physics Department | Physics";



/* 17 MARCH MORNING */

if(id>=150 && id<=162)
return "17 March 2026 | 8:30 AM – 10:30 AM | Group G1 | English";

if(id>=213 && id<=225)
return "17 March 2026 | 8:30 AM – 10:30 AM | Group G2 | Commerce";

if(id>=132 && id<=142)
return "17 March 2026 | 8:30 AM – 10:30 AM | Group G3 | Political Science";



/* 17 MARCH AFTERNOON */

if(id>=163 && id<=170)
return "17 March 2026 | 1:30 PM – 3:30 PM | Group G1 | Library Science / Yoga / Physical Education";

if(id>=226 && id<=234)
return "17 March 2026 | 1:30 PM – 3:30 PM | Group G2 | Commerce";

if(id>=143 && id<=149)
return "17 March 2026 | 1:30 PM – 3:30 PM | Group G3 | Economics";



return "Schedule not found. Please contact seminar desk.";

}
