class Avatar {
  //  { default: 'url textura' } ,string , string  , int , string
  constructor( texture , nombre , apellido , edad , genero , altura = '1.62' , peso = '60' , orientacion = 'hetero' ) {
      this.id = nombre.replace(/ /g,'');
      this.genero = genero;
      this.orientacion = orientacion;
      //descripcion
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.altura = altura;
      this.peso = peso;
      //funcional
      this.texture = texture;
      this.sound = {}; // sonidos por acciones
      this.status = {
          hambre : false, // debe comer
          sed: false, // debe tomar agua
          energia: false, // debe dormir
          animo : 'default', // debe mejorar su estado de animo
          vida : false, // se debe curar
          higiene: true, //se debe duchar
          estadoMental: true, // si debe ir al psiquiatrico o pueede enloquecer
          esLegal: true, // en caso de las lolis es false
          lujuria: false,
          relacion: {}
      };
  }//end constructor

  show( msg ){
      if( document.querySelectorAll(`#${this.id}`).length > 0 ){ //no existe
          document.querySelector( `#${this.id}` ).remove();
      }
      var td = document.createElement("td");
      td.id = this.id;
      td.className = 'avatar';
      td.style.background = `url(${this.texture[ this.status.animo ]})`;
      document.querySelector('#personajes_scena').appendChild(td);
      Novel.setMensaje( this.id , msg );
  }
  remove(){
      document.querySelector( `#${this.id}` ).remove();
  }
  hambre(){
      this.status.hambre = true;
  }
  comer(){
      this.status.hambre = false;
  }
  enloquecer(){
      this.status.estadoMental = false;
  }
  ensuciar(){
      this.status.higiene = false;
  }
  duchar(){
      this.status.higiene = true;
  }
  morir(){
      this.status.vida = false;
  }
  revivir(){
      this.status.vida = true;
  }
  setRelacion( avatarObj , status ){
      relacion[ avatarObj.name ] = status;
  }
  setAnimo( animo ){
      this.status.animo = animo;
  }

}//end class avatar

class Protagonista extends Avatar {
    setName( name ){
        this.name = name;
    }
    setGender( genero ){
        this.genero = genero;
    }
    setEdad( edad ){
        this.edad = edad;
    }
    setPreferencia( orientacion ){
        this.status.orientacion = orientacion;
    }
}


class Husbando extends Avatar {

}

class Tsundere extends Avatar {
    // matar( avatarObj ){
    //     avatarObj.morir();
    // }
}

class Yandere extends Avatar {

}

class Loli extends Avatar {

}
