function kalkulal(){
    //Űrlapadatok
    
    const szelesseg = document.getElementById('szelesseg').value;
    const magassag = document.getElementById('magassag').value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let terulet=Math.round((szelesseg*magassag)/10000);    
     document.getElementById('terulet').innerHTML = terulet;
    let koltseg = terulet*papir;
     document.getElementById('papir').innerHTML = papir;
    
   document.getElementById('koltseg').innerHTML =  koltseg ;
    //Megjelenítés
    document.querySelector("#valasz").style.visibility = "visible";
}

