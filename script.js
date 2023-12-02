// const submitButton = document.getElementById('submit-button');

const submitButton = document.querySelector( '#submit-button' );

const miModal = document.querySelector( '.modal' );

const multiplesElementos = document.querySelectorAll( '.modal' );

const email = document.getElementById( 'email' )

const validateEmailInput = ( email ) => {
  return String( email )
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePasswordInput = ( password ) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test( password );
}

const validateForm = ( email, password ) => {
  if ( validateEmailInput( email ) && validatePasswordInput( password ) ) {
    return true;
  }
  return false;
}

submitButton.addEventListener( 'click', ( event ) => {
  event.preventDefault();
  document.querySelector( 'email' ).value;

  console.log( document.querySelector( 'email' ).value )


  if ( validateEmailInput( email ) ) {
    miModal.classList.add( 'modal--open' );
  }

} );



const miListDesordenada = document.querySelector('ul')

console.log(miListDesordenada)

miListDesordenada.style = "list-style:none"



let validarInputCorreo = (correo) => {
  const expresionRegularCorreo =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return expresionRegularCorreo.test(correo);
}

// let estaActivo = false;

const miSubmitBoton = document.querySelector('#submit-button')

const miInputCorreo = document.querySelector('#email')
const modal = document.querySelector('.modal')
const main = document.querySelector('main')
const dissmiss = document.querySelector('.dismiss')
// modal.style = "display:block;"

miSubmitBoton.addEventListener('click', (evento)=>{
  evento.preventDefault();
  if(validarInputCorreo(miInputCorreo.value)){
    // estaActivo = true;
    miSubmitBoton.disabled = false;
    miSubmitBoton.style = "background-color:blue; cursor: pointer;"
    modal.classList.add('modal--open')
    main.style = "blur(5px); opacity:0.1;"
    console.log(modal)
  }else{
    // estaActivo = false;
    console.log('no es un correo valido')
    miSubmitBoton.disabled = true;
    miSubmitBoton.style = "background-color:grey; cursor: not-allowed;"
  }
})

dissmiss.addEventListener('click', ()=>{
  modal.classList.remove('modal--open')
  main.style = "blur(0px); opacity:1;"
})
