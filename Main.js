
const Tent_sound = new Audio();
Tent_sound.src="foley_blanket_shake_004.mp3";
const car_sound = new Audio();
car_sound.src="zapsplat_vehicles_car_horn_2x_short_beeps_2017_toyota_corolla_79490.mp3";
const breaking_bad_intro = new Audio();
breaking_bad_intro.src="breakingBad.mp4";
const container_sound = new Audio();
container_sound.src="Metal Bang Sound Effect.mp3";
const cave_sound = new Audio()
cave_sound.src ="Cave1.ogg.mp3";
const backGroundSound = new Audio();
backGroundSound.src ="backGroundSound.mp4";
const mexican = new Audio();
mexican.src ="hola esto es américa.mp3";

sound = document.createElement("audio")
sound.src= "backGroundSound.mp4"
sound.setAttribute("preload","auto")
sound.setAttribute("controls","none")
sound.style.display = "none";
document.body.appendChild(sound);



var bombs_per_second = 0; // hvor mye vi får hvert sekund
var bombs_per_click = 1 // hvor mye vi får per klikk
var bombs = 0; // hvor mange bomber vi har
var tentCost = 15; // pris på telt
var tents = 0; // hvor mange telt
var bo_bil_cost = 100; 
var bo_bil = 0;
var bombs_per_bobil = 0;
var bo_bil_count =0;
var container_cost = 1100;
var container = 0;
var container_count =0;
var bombs_per_container = 0;
var caveCost = 12000;
var cave = 0;
var bombs_per_cave = 0;



function buyTents (){
  
  
  if (bombs>=tentCost) {
    Tent_sound.play()
    let x = Math.floor((Math.random() * 8) + 1);
    console.log("The number is:", x)
    let img = document.createElement('img');
    if (x == 1) {
      img.src = 'telt.png'
      img.width = 25
      img.height = 25
      document.getElementById('teltbox1').appendChild(img);
    }
    if (x == 2){
      img.src = 'telt.png'
      img.width = 25
      img.height = 25
      document.getElementById('teltbox2').appendChild(img);

    }
    if (x == 3){
      img.src = 'telt.png'
      img.width = 25
      img.height = 25
      document.getElementById('teltbox3').appendChild(img);

    }
    if (x == 4){
      img.src = 'telt.png'
      img.width = 25
      img.height = 25
      document.getElementById('teltbox4').appendChild(img);

    }
    if (x == 5) {
      img.src = 'telt.png'
      img.width = 25
      img.height = 25
      document.getElementById('teltbox5').appendChild(img);
    }
    if (x == 6){
      img.src = 'telt.png'
      img.width = 25
      img.height = 25
      document.getElementById('teltbox6').appendChild(img);

    }
    if (x == 7){
      img.src = 'telt.png'
      img.width = 25
      img.height = 25
      document.getElementById('teltbox7').appendChild(img);

    }
    if (x == 8){
      img.src = 'telt.png'
      img.width = 25
      img.height = 25
      document.getElementById('teltbox8').appendChild(img);

    }

    bombs = bombs - tentCost;
    tents = tents +1;
    bombs_per_click = Math.round (bombs_per_click + 1)
    tentCost = Math.round(tentCost * 1.15);
    document.getElementById('bombAmount').innerHTML = bombs;
    document.getElementById('tentCost').innerHTML = tentCost;
    document.getElementById('tents').innerHTML = tents;
    
  }
}




function buybo_bil (){
  if (bombs>=bo_bil_cost) {
    car_sound.play()
    let x = Math.floor((Math.random() * 8) + 1);
    console.log("The number is:", x)
    let img = document.createElement('img');
    bo_bil_count += 1
    if (bo_bil_count == 10 ) {
      console.log('10 bobils, play breaking bad')
      breaking_bad_intro.play()
      bo_bil_count = 0
    }
    bombs = bombs - bo_bil_cost;
    bo_bil = bo_bil +1;
    bombs_per_second = Math.round (bombs_per_second + 1)
    bo_bil_cost = Math.round(bo_bil_cost * 1.50);
    document.getElementById('bombAmount').innerHTML = bombs;
    document.getElementById('bo_bil_cost').innerHTML = bo_bil_cost;
    document.getElementById('bo_bil').innerHTML = bo_bil;


    if (x == 1) {
      img.src = 'bo bil.png'
      img.width = 25
      img.height = 25
      document.getElementById('rvbox1').appendChild(img);
    }
    if (x == 2){
      img.src = 'bo bil.png'
      img.width = 25
      img.height = 25
      document.getElementById('rvbox2').appendChild(img);

    }
    if (x == 3){
      img.src = 'bo bil.png'
      img.width = 25
      img.height = 25
      document.getElementById('rvbox3').appendChild(img);

    }
    if (x == 4){
      img.src = 'bo bil.png'
      img.width = 25
      img.height = 25
      document.getElementById('rvbox4').appendChild(img);

    }
    if (x == 5) {
      img.src = 'bo bil.png'
      img.width = 25
      img.height = 25
      document.getElementById('rvbox5').appendChild(img);
    }
    if (x == 6){
      img.src = 'bo bil.png'
      img.width = 25
      img.height = 25
      document.getElementById('rvbox6').appendChild(img);

    }
    if (x == 7){
      img.src = 'bo bil.png'
      img.width = 25
      img.height = 25
      document.getElementById('rvbox7').appendChild(img);

    }
    if (x == 8){
      img.src = 'bo bil.png'
      img.width = 25
      img.height = 25
      document.getElementById('rvbox8').appendChild(img);

    }
    
      }
    }
    function buycontainer (){
  if (bombs>=container_cost) 
    container_sound.play()
    let x = Math.floor((Math.random() * 8) + 1);
    let img = document.createElement('img');
    container_count +=1
    if (container_count == 10 ){
    mexican.play()
      container_count =0}
    

    if (x == 1) {
      img.src = 'container.png'
      img.width = 25
      img.height = 25
      document.getElementById('containerbox1').appendChild(img);
      
      bombs = bombs - container_cost;
      container = container +1;
      bombs_per_second = Math.round (bombs_per_second + 10)
      container_cost = Math.round(container_cost* 1.50);
      document.getElementById('bombAmount').innerHTML = bombs;
      document.getElementById('container_cost').innerHTML = container_cost;
      document.getElementById('container').innerHTML = container;
    }
    if (x == 2){
      img.src = 'container.png'
      img.width = 25
      img.height = 25
      document.getElementById('containerbox2').appendChild(img);

    }
    if (x == 3){
      img.src = 'container.png'
      img.width = 25
      img.height = 25
      document.getElementById('containerbox3').appendChild(img);

    }
    if (x == 4){
      img.src = 'container.png'
      img.width = 25
      img.height = 25
      document.getElementById('containerbox4').appendChild(img);

    }
    if (x == 5) {
      img.src = 'container.png'
      img.width = 25
      img.height = 25
      document.getElementById('containerbox5').appendChild(img);
    }
    if (x == 6){
      img.src = 'container.png'
      img.width = 25
      img.height = 25
      document.getElementById('containerbox6').appendChild(img);

    }
    if (x == 7){
      img.src = 'container.png'
      img.width = 25
      img.height = 25
      document.getElementById('containerbox7').appendChild(img);

    }
    if (x == 8){
      img.src = 'container.png'
      img.width = 25
      img.height = 25
      document.getElementById('containerbox8').appendChild(img);

    }

    
    
      }
    
    function buyCave (){
  if (bombs>=caveCost) {
    let x = Math.floor((Math.random() * 8) + 1);
    console.log("The number is:", x)
    let img = document.createElement('img');

    if (x == 1) {
      img.src = 'cave.png'
      img.width = 25
      img.height = 25
      document.getElementById('cavebox1').appendChild(img);
    }
    if (x == 2){
      img.src = 'cave.png'
      img.width = 25
      img.height = 25
      document.getElementById('cavebox2').appendChild(img);

    }
    if (x == 3){
      img.src = 'cave.png'
      img.width = 25
      img.height = 25
      document.getElementById('cavebox3').appendChild(img);

    }
    if (x == 4){
      img.src = 'cave.png'
      img.width = 25
      img.height = 25
      document.getElementById('cavebox4').appendChild(img);

    }
    if (x == 5) {
      img.src = 'cave.png'
      img.width = 25
      img.height = 25
      document.getElementById('cavebox5').appendChild(img);
    }
    if (x == 6){
      img.src = 'cave.png'
      img.width = 25
      img.height = 25
      document.getElementById('cavebox6').appendChild(img);

    }
    if (x == 7){
      img.src = 'cave.png'
      img.width = 25
      img.height = 25
      document.getElementById('cavebox7').appendChild(img);

    }
    if (x == 8){
      img.src = 'cave.png'
      img.width = 25
      img.height = 25
      document.getElementById('cavebox8').appendChild(img);

    }
    bombs = bombs - caveCost;
    cave_sound.play()
    cave = cave +1;
    bombs_per_second = Math.round (bombs_per_second + 127)
    caveCost = Math.round(caveCost* 1.50);
    document.getElementById('bombAmount').innerHTML = bombs;
    document.getElementById('caveCost').innerHTML = caveCost;
    document.getElementById('cave').innerHTML = cave;
    
    
      }
    }
    
    function addBomb(){
      bombs += bombs_per_click;
      document.getElementById ("bombAmount").innerHTML = bombs;
      sound.play();
    }

    // kjører hvert sekund, fra start av
    setInterval(function(){
      bombs += bombs_per_second
      document.getElementById("bombAmount").innerHTML = bombs;

    }, 1000); // 1000ms = 1 second)

  
    
    
  
    var nightmode = false;
    
    function switchmode(){
        switchmode = !switchmode;
        if (nightmode)
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white"
    }
  
    
    
    document.getElementById ("bomb").addEventListener("click",addBomb)
