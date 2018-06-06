
var game7state = {

    arrayObject: 0,   // contient les position des objects poser.
    iconDesktop: 0,
    iconCloset: 0,
    iconBed: 0,
    startNbIcon: 0,
    object: 0,      // objet selectionner
    iconSelected: 0,
    mMove: 0,
    mUp: 0,
    preload: function() {
    },

    create: function() {
      pauseVar = 0;

      //PAUSE
      pauseButton = game.add.image(0, 0, 'pause');
      pauseButton.scale.setTo(0.10, 0.10);
      pauseButton.x = (WIDTH - pauseButton.width);
      pauseButton.y = 0;

      game.input.onUp.add(function ()
      {
        if (game.input.x > (WIDTH - pauseButton.width) && game.input.y < pauseButton.height && pauseVar == 0) {
          Pause(1);
        }
        else if (game.input.x > (WIDTH - (pauseButton.width + 5)) && game.input.y < (pauseButton.height + 5) && pauseVar == 1) {
         Pause(0);
        }
      }, game);

      var rec_width = 600;
      var rec_height = 450;

      arrayObject = [];
      var iconSelected = 0;

      room = game.add.sprite(0, 0, 'room');
      //room.scale.setTo(0.45, 0.45);
      room.x = WIDTH / 2 - room.width / 2;
      room.y = HEIGHT / 2 - room.height / 2;

      startNbIcon = 3;


      iconDesktop = game.add.sprite(0, 0, 'desktop');
      iconDesktop.scale.setTo(0.17, 0.17);
      iconDesktop.x = 20 + iconDesktop.width;
      iconDesktop.y = HEIGHT / 2 - iconDesktop.height / 2;
      iconDesktop.inputEnabled = true;
      iconDesktop.events.onInputDown.add(this.createObject, {sprite : 'desktop', icon : iconDesktop});

      iconBed = game.add.sprite(0, 0, 'bed');
      iconBed.scale.setTo(0.14, 0.14);
      iconBed.x = 20 + iconDesktop.width;
      iconBed.y = iconDesktop.y - iconBed.height - 40;
      iconBed.inputEnabled = true;
      iconBed.events.onInputDown.add(this.createObject, {sprite : 'bed', icon : iconBed});

      iconCloset = game.add.sprite(0, 0, 'closet');
      iconCloset.scale.setTo(0.16, 0.16);
      iconCloset.x = 20 + iconDesktop.width;
      iconCloset.y = iconDesktop.y + iconDesktop.height + 40;
      iconCloset.inputEnabled = true;
      iconCloset.events.onInputDown.add(this.createObject, {sprite : 'closet', icon : iconCloset});

      /*iconBed.inputEnabled = true;
      iconBed.events.onInputDown.add(this.test, this);*/
      /*room = new Phaser.Rectangle(WIDTH / 2 - rec_width / 2, HEIGHT / 2 - rec_height / 2, rec_width, rec_height);

      bed = new Phaser.Rectangle(WIDTH / 2 - rec_width / 2, HEIGHT / 2 - rec_height / 2, 300, 450);

      armoire = new Phaser.Rectangle(WIDTH / 2 - rec_width / 2 + 450, HEIGHT / 2 - rec_height / 2 + 300, 150, 150);

      bureau = new Phaser.Rectangle(WIDTH / 2 - rec_width / 2 + 400, HEIGHT / 2 - rec_height / 2, 200, 300);
*/
      mMove = 0;
      mUp = 0;

      game.input.onUp.add(function ()
      {
          mUp++;
      }, game);

      timer = game.time.create(false);
      timer.start();

      // instructions7

      instructions7 = game.add.image(0, 0, 'instructions7');
      instructions7.x = WIDTH / 2 - instructions7.width / 2;
      instructions7.y = HEIGHT / 8;

      time_text = game.add.text(0, 0, "", time_text_style);
      launchgame7();
    },

    update: function() {
      print_timer(time_text);
      if (timer.seconds >= TIME_LIMIT)
        defeat();
      else if (mMove == 1 && object != 0)
      {
          this.copyPos(object);
          if (mUp > 0)
          {
            if (this.objectPosOk(object) == 0)
                defeat("Tu feras mieux la prochaine fois...");
            else if (arrayObject.length == startNbIcon)
                victory("Bien joué tu es un as du puzzle !", 7);
            //console.log(this.isIntersection(object, room));
            // verif object intersection
            mMove = 0;
            mUp = 0;
            this.deleteIcon(iconSelected);
            iconSelected = 0;
          }
      }
      /*game.debug.geom(room,'#ffffff');
      game.debug.geom(bed,'#ff0000');
      game.debug.geom(armoire,'#00ff00');
      game.debug.geom(bureau,'#0000ff');*/
  },
  createObject: function() {
      mMove = 1;
      object = game.add.sprite(0, 0, this.sprite); // bed
      /*if (this.sprite == "closet")
        object.scale.setTo(0.4, 0.4);
      else if (this.sprite == "bed")
        object.scale.setTo(0.5, 0.5);
      else
        object.scale.setTo(0.4, 0.4);*/
      object.inputEnabled = true;
      iconSelected = this.icon;
  },
  copyPos: function(object) {
      if (game.device.desktop)
      {
          object.x = game.input.mousePointer.x;
          object.y = game.input.mousePointer.y;
      }
      else
      {
          object.x = game.input.pointer1.x;
          object.y = game.input.pointer1.y;
      }
  },
  deleteIcon: function(object){
      object.events.onInputDown.removeAll();
      object.destroy();
  },
  objectPosOk: function(object){
      // compare room
      if ((object.x >= room.x && object.x + object.width >= room.x) &&
          (object.x <= room.x + room.width && object.x + object.width <= room.x + room.width) &&
          (object.y >= room.y && object.y + object.height >= room.y) &&
          (object.y <= room.y + room.height && object.y + object.height <= room.y + room.height)
      )
      {
          if (arrayObject)
          {
              // intersection avec les autres objects
              var i = 0;
              while (i < arrayObject.length)
              {
                  if (this.isIntersection(object, arrayObject[i]))
                  {
                    /*console.log("object array x : "+object.x);
                    console.log("object array y : "+object.y);
                    console.log("object array width : "+object.width);
                    console.log("object array height : "+object.height);
                    console.log("object array "+i+" x : "+arrayObject[i].x);
                    console.log("object array "+i+" y : "+arrayObject[i].y);
                    console.log("object array "+i+" width : "+arrayObject[i].width);
                    console.log("object array "+i+" height : "+arrayObject[i].height);
                    console.log("intersection defeat");*/
                    return (0);
                  }
                  i++;
              }
          }
          // remplir array
          arrayObject.push(object);
      }
      else {
          //console.log("not in room");
          return (0);
      }
      return (1);
  },
  isIntersection: function(obj1, obj2){
      if ((obj1.x < obj2.x && obj1.x + obj1.width < obj2.x) ||
          (obj1.x > obj2.x + obj2.width && obj1.x + obj1.width > obj2.x + obj2.width) ||
          (obj1.y < obj2.y && obj1.y + obj1.height < obj2.y) ||
          (obj1.y > obj2.y + obj2.height && obj1.y + obj1.height > obj2.y + obj2.height)
      )
        return (0);
      else
          return (1);
  }
};

function launchgame7() {
  timer.pause();
  pauseVar = 1;
  //black tween
  black = game.add.image(0, 0, 'black');
  black.alpha = 1;
  tween = game.add.tween(black).to( { alpha: 0 }, 5000, "Linear", true);
  tween.onComplete.add(function(){
    timer.resume();
    pauseVar = 0;
  }, this);
}
