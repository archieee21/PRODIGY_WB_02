var hr=0;
var sec=0;
var min=0;
var count=0;
var lapnow=null;
 

var timer=false;
const lapRecord = document.getElementById('lapRecord');

function start()
{
  timer=true;
  stopwatch();
}

function stop()
{
  timer=false;
}

function reset()
{
  timer=false;
  hr=0;
  min=0;
  sec=0;
  count=0;
     document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";//sec likhne toh sirf 0 ayyega
    document.getElementById("count").innerHTML="00";
}
function lap()

{  
  lapNow = `<div class="lap">${hr} : ${min} : ${sec} : ${count}</div><hr>`;
  lapRecord.innerHTML += lapNow;
}


function stopwatch()
{
  if(timer ==true)
  {
    count=count+1;
    if( count ==100)
    {
      sec=sec+1;
      count=0;
    }
    if( sec ==60)
    {
      min=min+1;
      sec=0;
    }
    if( min==60)
    {
      hr=hr+1;
      min=0;
      sec=0;
    }
    document.getElementById("hr").innerHTML=hr;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("count").innerHTML=count;
    setTimeout("stopwatch()",10); //10 milisecond
  }
}
