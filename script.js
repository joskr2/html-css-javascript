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



const miListDesordenada = document.querySelector( 'ul' )

console.log( miListDesordenada )

miListDesordenada.style = "list-style:none"



let validarInputCorreo = ( correo ) => {
  const expresionRegularCorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return expresionRegularCorreo.test( correo );
}

// let estaActivo = false;

const miSubmitBoton = document.querySelector( '#submit-button' )

const miInputCorreo = document.querySelector( '#email' )
const modal = document.querySelector( '.modal' )
const main = document.querySelector( 'main' )
const dissmiss = document.querySelector( '.dismiss' )
// modal.style = "display:block;"

miSubmitBoton.addEventListener( 'click', ( evento ) => {
  evento.preventDefault();
  if ( validarInputCorreo( miInputCorreo.value ) ) {
    // estaActivo = true;
    miSubmitBoton.disabled = false;
    miSubmitBoton.style = "background-color:blue; cursor: pointer;"
    modal.classList.add( 'modal--open' )
    main.style = "blur(5px); opacity:0.1;"
    console.log( modal )
  } else {
    // estaActivo = false;
    console.log( 'no es un correo valido' )
    miSubmitBoton.disabled = true;
    miSubmitBoton.style = "background-color:grey; cursor: not-allowed;"
  }
} )

dissmiss.addEventListener( 'click', () => {
  modal.classList.remove( 'modal--open' )
  main.style = "blur(0px); opacity:1;"
} )


const nuevoElemento = document.createElement( 'p' )
nuevoElemento.innerText = 'Hola soy un nuevo elemento'

// const otroNuevoElemento = document.createElement('div')

// otroNuevoElemento.innerHTML = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

//   <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">

//   <title>Frontend Mentor | Newsletter sign-up form with success message</title>

//   <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
//   <link rel="stylesheet" href="style.css">
//   <style>
//     .attribution {
//       font-size: 11px;
//       text-align: center;
//     }

//     .attribution a {
//       color: hsl(228, 45%, 44%);
//     }
//   </style>
// </head>
// <body>
//   <main>
//     <section class="mobile">
//       <img src="./assets/images/illustration-sign-up-mobile.svg" alt="Dashboard" />
//     </section>
//     <section class="main--content">
//       <h1>Stay updated!</h1>
//       <p>Join 60,000+ product managers receiving monthly updates on:</p>
//       <ul>
//         <li>Product discovery and building what matters</li>
//         <li>Measuring to ensure updates are a success</li>
//         <li>And much more!</li>
//       </ul>
//       <form>
//         <label for="email">Email address</label>
//         <input type="email" id="email" name="email" placeholder="" />
//         <button id="submit-button" type="submit">
//           Subscribe to monthly newsletter
//         </button>
//       </form>
//     </section>
//     <section class="desktop">
//       <img src="./assets/images/illustration-sign-up-desktop.svg" alt="Dashboard" />
//     </section>
//   </main>
//   <section class="modal">
//     <img src="./assets/images/icon-success.svg" alt="imagen" />
//     <h1>Thanks for subscribing!</h1>
//     <p>A confirmation email has been sent to
//       <strong>
//         mail@mail.com
//       </strong>. Please open it and click the button inside to confirm your subscription.
//     </p>
//     <button type="button" class="dismiss">Volver al inicio</button>
//   </section>

//   <div class="attribution">
//     Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener">Frontend Mentor</a>.
//     Coded by <a href="#">Your Name Here</a>.
//   </div>
//   <script src="./script.js">
//   </script>
// </body>
// </html>
// `


const miNuevoTexto = document.createElement( 'div' )

miNuevoTexto.innerHTML = `
  <h2>Hola soy un nuevo texto</h2>
  <p>Este es un parrafo</p>
`

const miTitulo = document.querySelector( 'h1' )

miTitulo.appendChild( miNuevoTexto )


const misImagenes = document.querySelectorAll( 'img' )

misImagenes.forEach( ( imagen ) => {
  imagen.style = "width:100%;"
}
)


setTimeout( () => {
  miTitulo.removeChild( miNuevoTexto )
  alert( 'Hola soy un alert' )
}, 5000 )


// setInterval( () => {
//     console.log( 'Hola soy un intervalo' )
// }, 2000 )


//ES6

