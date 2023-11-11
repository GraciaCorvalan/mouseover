
let boton = document.querySelector('#btn');
let body = document.querySelector('body');

boton.addEventListener('click', ()  => {
  const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6 ; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      };
   body.style.background = color;
     //body.setAtributte('style','background-color : color ')
    });

let contador = 0;

boton.addEventListener('click', ()  => {
  let cant = document.querySelector('#cant');
  console.log(cant)
  contador= contador + 1;
  cant.value=contador;
});

let div = document.querySelector('.pie');
div.addEventListener('mouseenter', ()=>{
  alert("Pasaste el mouse por arriba")
})

