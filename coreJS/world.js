class World {

  constructor( texture , music , script = function(){} ) {
      this.texture = texture;
      this.music = new Audio(music);
      this.script = script;
      this.music.load(); // leer archivo al construirse
  }

  playMusic(){
    var obj = this.music;
    return new Promise(function(resolve, reject) {
          obj.play().then( (res) => {
                resolve('ok');
          }).catch(error => {
                reject(error);
          });
    });//en prom
    // return this;
  }

  stopMusic(){
    this.music.pause();
    return this;
  }

  async show(){
    console.log(this.texture);
    document.body.style.background = `url('${this.texture}')`; //asset/worlds/city1.jpg
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    this.playMusic();
    await this.script(); // ejecuta script
  }//end show

}
