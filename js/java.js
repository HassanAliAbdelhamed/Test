let d=document;
let lo=d.getElementById('location');
let loc=d.getElementById('loco1');
let coc=d.getElementById('loco2');
let mf=d.getElementById('myform');
let mn1=d.getElementById('mune1');
let mn2=d.getElementById('mune2');
let mn3=d.getElementById('mune3');
let mn4=d.getElementById('mune4');
let mn5=d.getElementById('mune5');
let mn6=d.getElementById('mune6');

(function() {
'use strict';
let temp;
 mf.reset();
 loc.className='hide';
 coc.className='hide';
mn1.className='hide';
mn2.className='hide';
mn3.className='hide';
mn4.className='hide';
mn5.className='hide';
mn6.className='hide';

lo.onchange=function() {
    if(this.value=='loc1') {
    loc.className=loc.className.replace('hide','show');
    coc.className='hide';
    mn1.className='hide';
    mn2.className='hide';
    mn3.className='hide';
    mn4.className='hide';
    mn5.className='hide';
    mn6.className='hide';
    temp=this.value;
    }
    else if (this.value=='loc2'){
        coc.className=coc.className.replace('hide','show');
        loc.className='hide';
        mn1.className='hide';
        mn2.className='hide';
        mn3.className='hide';
        mn4.className='hide';
        mn5.className='hide';

        temp=this.value;
    }
    else{
    temp=this.value;
    loc.className='hide';
    coc.className='hide';
    mn2.className='hide';
    mn3.className='hide';
    mn4.className='hide';
    mn5.className='hide';
    mn6.className='hide';
    
    
    mf.reset();
    lo.value=temp;
    
    }
    };
    }());

    loc.onchange=(e)=>{
        if(e.target.value=='ebte4') {
            mn1.className=mn1.className.replace('hide','show');
            temp=loc.value;
}else if (e.target.value=='ebte5'){
    mn1.className=mn1.className.replace('hide','show');
    temp=loc.value;
}else if (e.target.value=='ebte6'){
    mn1.className=mn1.className.replace('hide','show');
    temp=loc.value;
}};

mn1.onchange=(e)=>{
if(e.target.value=='OPT7') {
mn2.className=mn2.className.replace('hide','show');
temp=loc.value;
}

else if (e.target.value=="OPT6"){
alert ("المتاح في هذه الفترة الفصل الدراسي الثاني فقط");
}
else if (e.target.value=="OPT8"){
    alert ("المتاح في هذه الفترة الفصل الدراسي الثاني فقط");
}

};

mn2.onchange=(e)=>{


// اول متوسط //
 if(e.target.value=='OPT9'&& mn1.value==='OPT7' && coc.value==='metw1'){
        mn6.className=mn6.className.replace("hide",'show');
        temp=mn6.value;
        mn3.className='hide';
        mn4.className='hide';
        mn5.className="hide";
}

////////
else if (e.target.value=="OPT9"&&mn1.value==="OPT7"&&loc.value=="ebte4"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}   

else if (e.target.value=="OPT10"&&mn1.value==="OPT7"&&loc.value=="ebte4"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT11"&&mn1.value==="OPT7"&&loc.value=="ebte4"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT12"&&mn1.value==="OPT7"&&loc.value=="ebte4"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}   

else if (e.target.value=="OPT13"&&mn1.value==="OPT7"&&loc.value=="ebte4"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT14"&&mn1.value==="OPT7"&&loc.value=="ebte4"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT15"&&mn1.value==="OPT7"&&loc.value=="ebte4"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}

/////
else if (e.target.value=="OPT9"&&mn1.value==="OPT7"&&loc.value=="ebte5"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}   

else if (e.target.value=="OPT10"&&mn1.value==="OPT7"&&loc.value=="ebte5"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT11"&&mn1.value==="OPT7"&&loc.value=="ebte5"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT12"&&mn1.value==="OPT7"&&loc.value=="ebte5"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}   

else if (e.target.value=="OPT13"&&mn1.value==="OPT7"&&loc.value=="ebte5"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT14"&&mn1.value==="OPT7"&&loc.value=="ebte5"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT15"&&mn1.value==="OPT7"&&loc.value=="ebte5"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}

//////////

else if (e.target.value=="OPT9"&&mn1.value==="OPT7"&&loc.value=="ebte6"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}   

else if (e.target.value=="OPT10"&&mn1.value==="OPT7"&&loc.value=="ebte6"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT11"&&mn1.value==="OPT7"&&loc.value=="ebte6"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT12"&&mn1.value==="OPT7"&&loc.value=="ebte6"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}   

else if (e.target.value=="OPT13"&&mn1.value==="OPT7"&&loc.value=="ebte6"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT14"&&mn1.value==="OPT7"&&loc.value=="ebte6"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
} 

else if (e.target.value=="OPT15"&&mn1.value==="OPT7"&&loc.value=="ebte6"){
    mn3.className=mn3.className.replace("hide","show");
    temp=mn3.value;
    mn4.className='hide';
    mn5.className="hide";
    mn6.className="hide";
}

////////////////////////////////////////////

else if(e.target.value=='OPT9'&& mn1.value==='OPT7' && coc.value==='metw2'){
    mn5.className=mn5.className.replace("hide",'show');
    temp=mn5.value;
    mn3.className='hide';
    mn4.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT10'&& mn1.value==='OPT7' && coc.value==='metw2'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT11'&& mn1.value=='OPT7' && coc.value=='metw2'){
    mn5.className=mn5.className.replace("hide",'show');
    temp=mn5.value;
    mn3.className='hide';
    mn4.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT12'&& mn1.value==='OPT7' && coc.value==='metw2'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT13'&& mn1.value==='OPT7' && coc.value==='metw2'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT14'&& mn1.value==='OPT7' && coc.value==='metw2'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT15'&& mn1.value==='OPT7' && coc.value==='metw2'){
    mn6.className=mn6.className.replace("hide",'show');
    temp=mn6.value;
    mn3.className='hide';
    mn4.className='hide';
    mn5.className="hide";
}
//////////////////////////////////////////////////////

else if(e.target.value=='OPT9'&& mn1.value==='OPT7' && coc.value==='metw3'){
    mn5.className=mn5.className.replace("hide",'show');
    temp=mn5.value;
    mn3.className='hide';
    mn4.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT10'&& mn1.value==='OPT7' && coc.value==='metw3'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT11'&& mn1.value=='OPT7' && coc.value=='metw3'){
    mn6.className=mn6.className.replace("hide",'show');
    temp=mn6.value;
    mn3.className='hide';
    mn4.className='hide';
    mn5.className="hide";
}

else if(e.target.value=='OPT12'&& mn1.value==='OPT7' && coc.value==='metw3'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT13'&& mn1.value==='OPT7' && coc.value==='metw3'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT14'&& mn1.value==='OPT7' && coc.value==='metw3'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT15'&& mn1.value==='OPT7' && coc.value==='metw3'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

//////////////////////////////////////////////////////

else if(e.target.value=='OPT10'&& mn1.value==='OPT7' && coc.value==='metw1'){
    mn5.className=mn5.className.replace("hide",'show');
    temp=mn5.value;
    mn3.className='hide';
    mn4.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT11'&& mn1.value=='OPT7' && coc.value=='metw1'){
    mn4.className=mn4.className.replace("hide",'show');
    temp=mn4.value;
    mn3.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT12'&& mn1.value==='OPT7' && coc.value==='metw1'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT13'&& mn1.value==='OPT7' && coc.value==='metw1'){
    mn3.className=mn3.className.replace("hide",'show');
    temp=mn3.value;
    mn4.className='hide';
    mn5.className='hide';
    mn6.className="hide";
}

else if(e.target.value=='OPT14'&& mn1.value==='OPT7' && coc.value==='metw1'){
    mn6.className=mn6.className.replace("hide",'show');
    temp=mn6.value;
    mn3.className='hide';
    mn4.className='hide';
    mn5.className="hide";
}

else if(e.target.value=='OPT15'&& mn1.value==='OPT7' && coc.value==='metw1'){
    mn5.className=mn5.className.replace("hide",'show');
    temp=mn5.value;
    mn3.className='hide';
    mn4.className='hide';
    mn6.className="hide";
}

};

/*********************************************/ 

coc.onchange=(e)=>{
    if(e.target.value=='metw1') {
        mn1.className=mn1.className.replace('hide','show');
        temp=loc.value;
        mn2.className='hide';
        mn3.className="hide";
        mn4.className='hide';
        mn5.className='hide';
        mn6.className="hide";
}else if (e.target.value=='metw2'){
mn1.className=mn1.className.replace('hide','show');
temp=loc.value;
mn2.className='hide';
mn3.className="hide";
mn4.className='hide';
mn5.className='hide';
mn6.className="hide";
}else if (e.target.value=='metw3'){
mn1.className=mn1.className.replace('hide','show');
temp=loc.value;
mn2.className='hide';
mn3.className="hide";
mn4.className='hide';
mn5.className='hide';
mn6.className="hide";
}};
    
function byton(){
console.log(temp);
if(mn1.value=="ero00"){

  alert("من فضلك اختر الفصل الدراسي");
}

else if (mn2.value=="OPT9"&&loc.value=="ebte4"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/4/Egtema4-2-1.html';
}
else if (mn2.value=="OPT10"&&loc.value=="ebte4"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/4/islam4-2-1.html';
}
else if (mn2.value=="OPT11"&&loc.value=="ebte4"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/4/ryath4-2-1.html';
}
else if (mn2.value=="OPT12"&&loc.value=="ebte4"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/4/olom4-2-1.html';
}
else if (mn2.value=="OPT13"&&loc.value=="ebte4"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/4/rakmyah4-2-1.html';
}
else if (mn2.value=="OPT14"&&loc.value=="ebte4"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/4/lokate4-2-1.html';
}
else if (mn2.value=="OPT15"&&loc.value=="ebte4"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/4/englsh4-2-1.html';
}
/////////////////////////////////////////////////////////////

else if (mn2.value=="OPT9"&&loc.value=="ebte5"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/5/Egtema5-2-1.html';
}
else if (mn2.value=="OPT10"&&loc.value=="ebte5"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/5/islam5-2-1.html';
}
else if (mn2.value=="OPT11"&&loc.value=="ebte5"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/5/ryath5-2-1.html';
}
else if (mn2.value=="OPT12"&&loc.value=="ebte5"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/5/olom5-2-1.html';
}
else if (mn2.value=="OPT13"&&loc.value=="ebte5"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/5/rakmyah5-2-1.html';
}
else if (mn2.value=="OPT14"&&loc.value=="ebte5"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/5/lokate5-2-1.html';
}
else if (mn2.value=="OPT15"&&loc.value=="ebte5"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/5/englsh5-2-1.html';
}
////////////////////////////////////////////////////////////////

else if (mn2.value=="OPT9"&&loc.value=="ebte6"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/6/Egtema6-2-1.html';
}
else if (mn2.value=="OPT10"&&loc.value=="ebte6"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/6/islam6-2-1.html';
}
else if (mn2.value=="OPT11"&&loc.value=="ebte6"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/6/ryath6-2-1.html';
}
else if (mn2.value=="OPT12"&&loc.value=="ebte6"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/6/olom6-2-1.html';
}
else if (mn2.value=="OPT13"&&loc.value=="ebte6"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/6/rakmyah6-2-1.html';
}
else if (mn2.value=="OPT14"&&loc.value=="ebte6"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/6/lokate6-2-1.html';
}
else if (mn2.value=="OPT15"&&loc.value=="ebte6"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/ebted3e/6/englsh6-2-1.html';

}
////////////////////////////////////////////////////////////////////////

else if (mn2.value=="OPT9"&&coc.value=="metw1"&&mn6.value=="OPT24"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/Egtemam1-2-1.html';
}
else if (mn2.value=="OPT9"&&coc.value=="metw1"&&mn6.value=="OPT25"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/Egtemam1-2-2.html';
}


else if (mn2.value=="OPT10"&&coc.value=="metw1"&&mn5.value=="OPT21"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/islamm1-2-1.html';
}
else if (mn2.value=="OPT10"&&coc.value=="metw1"&&mn5.value=="OPT22"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/islamm1-2-2.html';
}
else if (mn2.value=="OPT10"&&coc.value=="metw1"&&mn5.value=="OPT23"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/islamm1-2-3.html';
}


else if (mn2.value=="OPT11"&&coc.value=="metw1"&&mn4.value=="OPT17"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/ryathm1-2-1.html';
}
else if (mn2.value=="OPT11"&&coc.value=="metw1"&&mn4.value=="OPT18"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/ryathm1-2-2.html';
}
else if (mn2.value=="OPT11"&&coc.value=="metw1"&&mn4.value=="OPT19"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/ryathm1-2-3.html';
}
else if (mn2.value=="OPT11"&&coc.value=="metw1"&&mn4.value=="OPT20"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/ryathm1-2-4.html';
}



else if (mn2.value=="OPT12"&&coc.value=="metw1"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/olomm1-2-1.html';
}



else if (mn2.value=="OPT13"&&coc.value=="metw1"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/rakmyahm1-2-1.html';
}



else if (mn2.value=="OPT14"&&coc.value=="metw1"&&mn6.value=="OPT24"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/lokatem1-2-1.html';
}
else if (mn2.value=="OPT14"&&coc.value=="metw1"&&mn6.value=="OPT25"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/lokatem1-2-2.html';
}



else if (mn2.value=="OPT15"&&coc.value=="metw1"&&mn5.value=="OPT21"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/englshm1-2-1.html';

}
else if (mn2.value=="OPT15"&&coc.value=="metw1"&&mn5.value=="OPT22"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/englshm1-2-2.html';

}
else if (mn2.value=="OPT15"&&coc.value=="metw1"&&mn5.value=="OPT23"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/1/englshm1-2-3.html';

}
//////////////////////////////////////////////////////////////////

else if (mn2.value=="OPT9"&&loc.value=="metw2"&&mn5.value=="OPT21"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/Egtemam2-2-1.html';
}
else if (mn2.value=="OPT9"&&loc.value=="metw2"&&mn5.value=="OPT22"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/Egtemam2-2-2.html';
}
else if (mn2.value=="OPT9"&&loc.value=="metw2"&&mn5.value=="OPT23"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/Egtemam2-2-3.html';
}


else if (mn2.value=="OPT10"&&loc.value=="metw2"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/islamm2-2-1.html';
}



else if (mn2.value=="OPT11"&&loc.value=="metw2"&&mn5.value=="OPT21"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/ryathm2-2-1.html';
}
else if (mn2.value=="OPT11"&&loc.value=="metw2"&&mn5.value=="OPT22"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/ryathm2-2-2.html';
}
else if (mn2.value=="OPT11"&&loc.value=="metw2"&&mn5.value=="OPT23"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/ryathm2-2-3.html';
}



else if (mn2.value=="OPT12"&&loc.value=="metw2"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/olomm2-2-1.html';
}


else if (mn2.value=="OPT13"&&loc.value=="metw2"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/rakmyahm2-2-1.html';
}



else if (mn2.value=="OPT14"&&loc.value=="metw2"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/lokatem2-2-1.html';
}


else if (mn2.value=="OPT15"&&loc.value=="metw2"&&mn6.value=="OPT24"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/englshm2-2-1.html';

}
else if (mn2.value=="OPT15"&&loc.value=="metw2"&&mn6.value=="OPT25"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/2/englshm2-2-2.html';

}
///////////////////////////////////////////////////////////////

else if (mn2.value=="OPT9"&&loc.value=="metw3"&&mn5.value=="OPT21"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/Egtemam3-2-1.html';
}
else if (mn2.value=="OPT9"&&loc.value=="metw3"&&mn5.value=="OPT22"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/Egtemam3-2-2.html';
}
else if (mn2.value=="OPT9"&&loc.value=="metw3"&&mn5.value=="OPT23"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/Egtemam3-2-3.html';
}



else if (mn2.value=="OPT10"&&loc.value=="metw3"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/islamm3-2-1.html';
}




else if (mn2.value=="OPT11"&&loc.value=="metw2"&&mn6.value=="OPT24"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/ryathm3-2-1.html';

}
else if (mn2.value=="OPT11"&&loc.value=="metw2"&&mn6.value=="OPT25"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/ryathm3-2-2.html';

}



else if (mn2.value=="OPT12"&&loc.value=="metw3"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/olomm3-2-1.html';
}




else if (mn2.value=="OPT13"&&loc.value=="metw3"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/rakmyahm3-2-1.html';
}




else if (mn2.value=="OPT14"&&loc.value=="metw3"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/lokatem3-2-1.html';
}




else if (mn2.value=="OPT15"&&loc.value=="metw3"&&mn3.value=="OPT16"){
    window.location.href='https://www.almonshe3.net/pdf/metwas/3/englshm3-2-1.html';

}

};

let submitBoto = document.getElementById("submitBoto");
submitBoto.onclick=()=>{
    byton();
};