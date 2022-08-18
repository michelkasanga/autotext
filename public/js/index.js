

let title = document.getElementById('autotext');

let text = "je m'appelle ... je suis dev web";
let index =0;


 const play = () => {

    


        title.innerHTML  = "bonjour "+text.slice(0, index)
    index++;
    if(index>text.length){
        index = 0;

    }
    }

          
  
    

let  timer = setInterval(play,150)
