class Boxes {
  // { 'heladoDeFresa' : 'helado de fresa' , 'vainila' : 'vainilla' }
  async select( pregunta , jsonOptions = {'sinPregunta': 'no hay preguntas'} ){
    return await Swal.fire({
        allowOutsideClick: false,
        title: pregunta,
        input: 'select',
        inputOptions: jsonOptions ,
        inputPlaceholder: 'Selecciona una opcion',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
              resolve()
          })
        }
      });
  }

  async password( pregunta ){
      return await Swal.fire({
            title: pregunta ,
            input: 'password',
            inputPlaceholder: pregunta ,
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
        });
  }

  async msgBox( title , mensaje ){ // mostrar mensaje en pantalla
      Swal.fire( title, mensaje, 'question' );
  }

  // type : text , number , email
  async input( pregunta , type = 'text' ){ //pregunta simple
      return await Swal.fire({
         title: pregunta ,
         input: type,
         inputPlaceholder: 'Escribe tu respuesta'
      });
  }

  async logro( title ){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 1000
        });
  }

  async textArea( pregunta ){ // mostrar un campo
      return await Swal.fire({
        input: pregunta,
        inputPlaceholder: pregunta,
        inputAttributes: {
          'aria-label': pregunta
        },
        showCancelButton: true
      });
  }

  async rango( pregunta , min , max , step = 1 , init = 0 ){
    return await Swal.fire({
        allowOutsideClick: false,
        title: pregunta ,
        icon: 'question',
        input: 'range',
        inputAttributes: {
          min: min,
          max: max,
          step: step
        },
        inputValue: min
      });
  }

}//end class
