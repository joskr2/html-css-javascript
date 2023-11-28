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
