// motor principal
let Box = new Boxes(); // agrega libreria de preguntas

let Novel = {
    version : '1.0a1',
    tts : new Artyom(),
    scene : 0, // iterador de scena
    scenes : [],
    avatars : [],
    fondo : [],
    userInfo : {},
    stop: false,
    continuar(){
      this.stop = false;
      console.log('avanzar');
      console.log(this.stop);
    },
    // detener( recursive = false ){ //detiene el tiempo de ejecucion de la novela hasta que el usurio da en continuar
    //   if(recursive == false){
    //     this.stop = true;
    //   }
    //   var obj = this;
    //   console.log(obj.stop);
    //   // return new Promise((resolve) => setTimeout( ()=>{
    //   //     if( obj.stop != false ){
    //   //       resolve();
    //   //     }else{
    //   //       obj.detener(true);
    //   //     }
    //   // } , 100 ));
    // },
    async detener( i = 0 ){  // execute:  await delay( time_on_ms );
        if( i == 0 ){
          this.stop = true;
        }
        if(this.stop == true){
          await this.delay(100);
          i++;
          await this.detener( i );
        }else {
          return false;
        }
    },

    delay(ms){  // execute:  await delay( time_on_ms );
        var obj = this;
        return new Promise( function(resolve, reject) {
            setTimeout(function () {
                return resolve(obj);
            }, ms);
        });
    },
    setWindowTitle( stringTitle ){
      document.title = stringTitle.toString();
      return this;
    },
    setHTML( stringHTML ){
      document.body.innerHTML = stringHTML.toString();
      return this;
    },
    async preStart(){
      this.setWindowTitle(` ${ this.version } `).setHTML(` ${ this.version } `);
      return this;
    },
    startUp(){  // <td class="p1"></td>
      this.setHTML(`<div class="scene">
                              <table>
                                <tbody>
                                  <tr id="personajes_scena">
                                  </tr>
                                </tbody>
                              </table>
                    </div>

                    <section id="ComentBox" style="display:block" class="nes-container with-title textBox">
                        <div class="nes-container is-dark with-title">
                          <p id="title" class="title">{Personajes}</p>
                          <p id="msg">{mensaje}</p>
                        </div>
                        <button id="next" onclick=" Novel.continuar(); " type="button" class="nes-btn is-primary showcode">Continuar</button>
                        <button id="tts" onclick=" Novel.readTTSMsg(); " type="button" class="nes-btn is-default">Leer</button>
                    </section>`);
    },

    async StopForNext(){ // ir a la siguiente escena
        alert('stop');
    },

    setMensaje( title , msg ){  // mostrar mensajes en pantalla
        document.querySelector('#title').innerHTML = title;
        document.querySelector('#msg').innerHTML = msg;
    },

    hideComentBox(){
        document.querySelector('#ComentBox').style.visibility = 'hidden';
    },

    showComentBox(){
        document.querySelector('#ComentBox').style.visibility = 'visible';
    },

    readTTSMsg(){ // leer mensajes con tts
        Novel.tts.say( document.querySelector('#msg').innerText );
    }

}; //end objet


Novel.startUp();
// Novel.hideComentBox();

// let artyom = new Artyom();

// var commandHello = {
//     indexes:["hola"], // These spoken words will trigger the execution of the command
//     action:function(){ // Action to be executed when a index match with spoken word
//     Novel.tts.say("este mensaje funciona el tts");
//     }
// };

// Novel.tts.addCommands(commandHello); // Add the command with addCommands method. Now

// Novel.tts.initialize({
//     lang:"es-ES",// A lot of languages are supported. Read the docs !
//     // continuous:true,// recognize 1 command and stop listening !
//     listen:true, // Start recognizing
//     debug:true, // Show everything in the console
//     speed:1 // talk normally
// }).then(function(){
//     console.log("Ready to work !");
// });
