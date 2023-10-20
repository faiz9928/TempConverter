let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");
let celK = document.getElementById("celK");
let kelF = document.getElementById("kelF");
let fahK = document.getElementById("fahK");

cel.addEventListener("input" , function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    if(!Number.isInteger(f)){
      f = f.toFixed(4);
    }
    fah.value = f;
});

fah.addEventListener("input" , function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    if(!Number.isInteger(c)){
      c = c.toFixed(4);
    }
    cel.value = c;
});


kel.addEventListener("input" , function(){
    let k = this.value;
    let c = k - 273.15;
    celK.value = c;
    
});

celK.addEventListener("input" , function(){
    let c = this.value;
    let k = c + 273.15;
    kel.value = k;
});

kelF.addEventListener("input" , function(){
  let k = this.value;
  let f = (k - 273.15) * 9/5 + 32;
  fahK.value = f;
});


fahK.addEventListener("input" , function(){
  let f = this.value;
  let k = (f - 32) * 5/9 + 273.15;
  kelF.value = k;
});