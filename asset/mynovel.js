//execute Motor
(async ()=>{
    //obtener datos del usuario
    var edad = await Box.rango( '¿Cual es tu edad?', 13 , 99 );

    var pregunta2 = await Box.select('Que te gusta mas?' , {
      'chicas' : 'las chicas',
      'chicos' : 'los chicos',
      'ambos' : 'ambos',
      'ninguno' : 'ninguno'
    });

    var pregunta3 = await Box.select( 'Te identificas como?' , {
      'chico' : 'chico',
      'chica' : 'chica',
    });

    var password = await Box.password( 'Dame un password culiado ya!!' );

    var text = await Box.input( 'Te gustan las patas? :v' );

    var text = await Box.msgBox( 'Gracias' , 'Por jugar este juego ');

    await Box.logro( 'Ganaste un voleto a la shingada', 'asset/avatars/logro1.gif' );

    //Definir progragonista
    let protagonista = new Protagonista( {
      default : 'asset/avatars/av44.png',
      avatar : 'asset/avatars/av45.png'
    } , 'Xue Hua Piao Piao' , 'hatso' , 18 , 'masculino'  ); //protagonista

    let estaban = new Husbando({
      default : 'asset/avatars/esteva1.jpg',
    } , 'Esteban julio Ricardo' , 'Montolla de la Rosa Ramirez' , 30 , 'femenino'  );

    let policia = new Tsundere({
      default : 'asset/avatars/hot1.png',
    } , 'Samonmon' , 'Salmon' , 30 , 'femenino'  );

    //crear mundos

    var preloader = await new World('asset/worlds/city1.jpg','asset/music/PiaoPiao.mp3');
    var habitacion = await new World('asset/worlds/habitacion1.jpg','asset/music/sexySax.mp3');

    protagonista.setEdad( edad.value );

    await Novel.detener(); // forzar usuario a dar continuar
    //Comienzan los actos

    preloader.show();
    protagonista.show();
    // preloader.stopMusic();
    protagonista.setAnimo('avatar');
    protagonista.show(`Hola mi nombre es: ${protagonista.nombre} , tengo ${protagonista.edad}`);
    await Novel.detener();
    // await Novel.delay( 10000 );
    protagonista.setAnimo('default');
    protagonista.show('Xue Hua Piao Piao Xue Hua Piao Piao Xue Hua Piao Piao');
    await Novel.detener();

    preloader.stopMusic();
    protagonista.remove();
    //eescena rara
    habitacion.show();
    estaban.show(`que hermosa erees  ${policia.nombre}`);
    await Novel.detener();
    policia.show(`ohhh que sexy te miras ${estaban.nombre}`);

    var pregunta = await Box.select( 'Te identificas como?' , {
      'chico' : 'chico',
      'chica' : 'chica',
    });
    console.log(pregunta);


})(); //end code
