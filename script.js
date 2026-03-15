/* =========================
SECTION CONTROL
========================= */

function showSection(id)
{
let sections=document.querySelectorAll(".content");

sections.forEach(section=>{
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
loadAbstractData();
}



/* =========================
ANDROID AUDIO FIX
========================= */

document.addEventListener("click",function(){

let audio=document.getElementById("collegeAudio");

if(audio)
{
audio.play().catch(()=>{});
}

},{once:true});



/* =========================
ABSTRACT DATABASE
========================= */

let abstractData=[];


function loadAbstractData()
{

fetch("Abstracts.csv")
.then(response => response.text())
.then(data => {

let rows=data.split(/\r?\n/);

for(let i=1;i<rows.length;i++)
{

if(rows[i].trim()==="") continue;

let cols=rows[i].split(",");

abstractData.push({

id:cols[1].trim(),
author:cols[2].trim(),
title:cols[3].trim(),
subject:cols[4].trim()

});

}

console.log("Abstracts Loaded:",abstractData);

})
.catch(error=>{
console.log("CSV Loading Error:",error);
});

}



/* =========================
PRESENTATION SCHEDULE
========================= */

function getSchedule(id)
{

id=parseInt(id);


/* 16 March */

if((id>=101 && id<=111) || (id>=127 && id<=131))
return {date:"16 March 2026",time:"03:30 PM – 05:30 PM",venue:"B.Ed College Ground Floor – G1",hall:"Marathi / Sanskrit"};

if(id>=112 && id<=126)
return {date:"16 March 2026",time:"03:30 PM – 05:30 PM",venue:"Seminar Hall",hall:"Hindi"};

if(id>=201 && id<=212)
return {date:"16 March 2026",time:"03:30 PM – 05:30 PM",venue:"B.Ed College – G2",hall:"Commerce"};

if((id>=301 && id<=302)||(id>=312 && id<=321))
return {date:"16 March 2026",time:"03:30 PM – 05:30 PM",venue:"B.Ed College – G3",hall:"Chemistry / Maths / Electronics / Botany / Zoology"};

if(id>=303 && id<=311)
return {date:"16 March 2026",time:"03:30 PM – 05:30 PM",venue:"Physics Department",hall:"Physics"};



/* 17 March Morning */

if(id>=150 && id<=162)
return {date:"17 March 2026",time:"08:30 AM – 10:30 AM",venue:"Hall G1",hall:"English"};

if(id>=213 && id<=225)
return {date:"17 March 2026",time:"08:30 AM – 10:30 AM",venue:"Hall G2",hall:"Commerce"};

if(id>=132 && id<=142)
return {date:"17 March 2026",time:"08:30 AM – 10:30 AM",venue:"Hall G3",hall:"Political Science"};



/* 17 March Afternoon */

if(id>=163 && id<=170)
return {date:"17 March 2026",time:"01:30 PM – 03:30 PM",venue:"Hall G1",hall:"Library / Yoga / Physical Education"};

if(id>=226 && id<=234)
return {date:"17 March 2026",time:"01:30 PM – 03:30 PM",venue:"Hall G2",hall:"Commerce"};

if(id>=143 && id<=149)
return {date:"17 March 2026",time:"01:30 PM – 03:30 PM",venue:"Hall G3",hall:"Economics"};


return null;

}



/* =========================
SEARCH ABSTRACT
========================= */

function searchAbstract()
{

let input=document.getElementById("abstractID").value.trim();

let result=document.getElementById("abstractResult");

let found=abstractData.find(a => a.id === input);

let schedule=getSchedule(input);



if(found && schedule)
{

result.innerHTML=

"<h3>Presentation Details</h3>"+

"<p><b>Abstract ID :</b> "+found.id+"</p>"+

"<p><b>Author Name :</b> "+found.author+"</p>"+

"<p><b>Abstract Title :</b> "+found.title+"</p>"+

"<p><b>Subject :</b> "+found.subject+"</p>"+

"<hr>"+

"<p><b>Date :</b> "+schedule.date+"</p>"+

"<p><b>Time :</b> "+schedule.time+"</p>"+

"<p><b>Venue :</b> "+schedule.venue+"</p>"+

"<p><b>Session / Hall :</b> "+schedule.hall+"</p>";

}
else
{

result.innerHTML="<p style='color:red'><b>Abstract ID not found</b></p>";

}

}
