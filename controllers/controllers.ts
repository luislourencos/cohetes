/****************Creat Rocket*************************/
let arrRockets: any = new Array();
let arrBoosters:string[] = new Array();
let rocketButton = <HTMLInputElement>document.getElementById('rocket-button');
let rocketInput:any = <HTMLInputElement>document.getElementById('rocket-input');


rocketButton.addEventListener('click', createRocket);

function createRocket(){
    if(rocketInput.value.length >=8){
        rocketButton.style.border ='3px solid green'
        rocketInput.style.border ='3px solid green'
        arrRockets.push(new Rocket(rocketInput.value))
        console.log(arrRockets);
        setInterval(function(){
            rocketButton.style.border ='';
            rocketInput.style.border ='';
        },2000)
        mySelect(rocketInput.value)
        rocketInput.value =''
       
    }else{
        rocketButton.style.border ='3px solid red'
        rocketInput.style.border ='3px solid red'
        setInterval(function(){
            rocketButton.style.border ='';
            rocketInput.style.border ='';
        },2000)
    }
}
function mySelect(rocket:any) {
    let selectController = <HTMLCollection>document.getElementsByClassName('selectController');
    for (let i = 0; i < selectController.length; i++) {
        let option = document.createElement("option");
        option.text = rocket;
        selectController[i].appendChild(option)  
    }  
  }


/****************Creat Booster*************************/

let plus = <HTMLInputElement>document.getElementById('plus');
let sub = <HTMLInputElement>document.getElementById('sub');
let showBoosters = <HTMLInputElement>document.getElementById('showBoosters');
let boosterInput =<HTMLInputElement>document.getElementById('booster-input');
let creatBoosters = <HTMLInputElement>document.getElementById('create-boosters');
let rocketSelect =<HTMLInputElement>document.getElementById('rocket-select');
 
sub.addEventListener('click',function(){
    showBoostersFunctionPlus ('sub');
});
plus.addEventListener('click',function(){
    showBoostersFunctionPlus ('plus');
});
creatBoosters.addEventListener('click',creatBoostersFunction);

function showBoostersFunctionPlus (parametro:string) {
    var txt: string='';
    if(boosterInput.value === ''){
        showBoosters.innerHTML ='Deve rellenar el campo';
        showBoosters.style.border='1px solid red';
    }else if(parametro==='plus'){
        showBoosters.style.border='';
        arrBoosters.push(boosterInput.value);
        for(var booster of arrBoosters){
            txt += booster +',';
        }
        showBoosters.innerHTML = txt;
        boosterInput.value='';
    }
    if(parametro==='sub'){
        showBoosters.style.border='';
        arrBoosters.pop();
        for(var booster of arrBoosters){
            txt += booster +',';
        }
        showBoosters.innerHTML = txt;
    }
}  
 
function creatBoostersFunction(){
    if(rocketSelect.value !== '' && arrBoosters.length !== 0){
        arrRockets.forEach(element1 => {
            if(element1.rocket === rocketSelect.value){
                arrBoosters.forEach(element2 =>{
                    element1.addBooster(new Booster(parseInt(element2)))
                });
            }
        });
        arrBoosters =[];
        showBoosters.innerHTML = 'Boosters añadidos';
     
    }
}
console.log(arrRockets)

//****************Controler********************** 

let selectRocket1 = <HTMLInputElement>document.getElementById('selectRocket1');
let showRocketButton1 = <HTMLInputElement>document.getElementById('showRocketButton1');
let showRocket1 = <HTMLInputElement>document.getElementById('showRocket1');
let speed1 =<HTMLInputElement>document.getElementById('speed1');
let break1 = <HTMLInputElement>document.getElementById('break1');
let showSpeed1 =<HTMLInputElement>document.getElementById('showSpeed1');
let selectRocket2 = <HTMLInputElement>document.getElementById('selectRocket2');
let showRocketButton2 = <HTMLInputElement>document.getElementById('showRocketButton2');
let showRocket2 = <HTMLInputElement>document.getElementById('showRocket2');
let speed2 =<HTMLInputElement>document.getElementById('speed2');
let break2 = <HTMLInputElement>document.getElementById('break2');
let showSpeed2 =<HTMLInputElement>document.getElementById('showSpeed2');

showRocketButton1.addEventListener('click', function(){
    functionRocket(selectRocket1,showRocket1);
});
showRocketButton2.addEventListener('click', function(){
    functionRocket(selectRocket2,showRocket2);
});
speed1.addEventListener('click',function(){
     functionSpeed(selectRocket1,showSpeed1);
});
speed2.addEventListener('click',function(){
    functionSpeed(selectRocket2,showSpeed2);
});
break1.addEventListener('click',function(){
    functionBreak(selectRocket1,showSpeed1);
})
break2.addEventListener('click',function(){
    functionBreak(selectRocket2,showSpeed2);
})


function functionRocket(select:any,show:any){
    var txt = ''
    if(select.value===''){
        select.style.border = '1px solid red'
    }else{
        select.style.border = '1px solid black'
        arrRockets.forEach(element => {
            if(select.value === element.rocket){
                txt += 'Rocket: '+element.rocket+'<br> Boosters: '
               ;
                for(var i=0; i<element.booster.length;i++){
                    if(i<element.booster.length-1){
                        txt += element.booster[i].booster +','
                    }else{
                        txt += element.booster[i].booster;
                    }
                }
            }
        });
        show.innerHTML=txt;
    }
}

function functionSpeed(select:any,show:any){
    var txt:any = '';
    var aux:number =0;
    if(select.value===''){
        select.style.border = '1px solid red'
    }else{
        select.style.border = '1px solid black'
        arrRockets.forEach(element => {
            if(select.value === element.rocket){
                element.addSpeed();
               element.booster.forEach(element => {
                aux += element.booster;
               });
               txt += 'Rocket: '+element.rocket+'<br> Speed: '+aux +'Km/h'
            }
        });
        show.innerHTML=txt;
    }
}

function functionBreak(select:any,show:any){
    var txt:any = '';
    var aux:number =0;
    if(select.value===''){
        select.style.border = '1px solid red'
    }else{
        select.style.border = '1px solid black'
        arrRockets.forEach(element => {
            if(select.value === element.rocket){
                element.break();
               element.booster.forEach(element => {
                aux += element.booster;
               });
               txt += 'Rocket: '+element.rocket+'<br> Speed: '+aux +'Km/h'
            }
        });
        show.innerHTML=txt;
    }
}
