layers = document.getElementById('layers');
decrease = document.getElementById('decrease');
increase = document.getElementById('increase');
count = document.getElementById('count');
input = document.querySelector('input')
var no_of_layers = 0;

function add_layer(){
    if(no_of_layers < 5){
    no_of_layers++;
        count.innerHTML = no_of_layers;
        const newlayer = document.createElement('div');
        newlayer.classList.add('layer');
        const color = input.value;
        console.log(color);
        newlayer.style.backgroundColor = `${color}`;
        newlayer.style.width = `${100-(20*(no_of_layers-1))}%`;
        layers.prepend(newlayer);
    }
    else{
        alert("you can't add more than 5 layers");
    }
};



decrease.addEventListener('click', ()=>{
    if(no_of_layers > 0){
        no_of_layers--;
        count.innerHTML = no_of_layers;

        toplayer = document.querySelectorAll('.layer');
        toplayer[0].remove();
    }
});

increase.addEventListener('click', ()=>{
    add_layer();
});

input.addEventListener('drag', ()=>{
console.log('drag');
});

document.addEventListener("dragover", (event) => {
    event.preventDefault();
  }, false);

document.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("dropzone")) {
        add_layer();
    }
  });