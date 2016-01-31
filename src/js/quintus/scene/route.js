module.exports = function (Q) {

  Q.scene('route', function (stage) {
    var paperboy = stage.insert(new Q.PaperBoy());
    stage.add('viewport').follow(paperboy, {x: true, y: false}); 

  }); /* end of scene */



 Q.scene('hud', function(stage){
   var score = stage.insert(new Q.Score({
      x: 700,
      y: 40,
      }));
    var lives = stage.insert(new Q.Lives({
      x: 700,
      y: 70,
      }));
    var label = stage.insert(new Q.UI.Text({
      x: 400,
      y: 10,
     label: stage.options.label,
    //  console.log(lives, score)
    }));

  }); /* end of HUD */

};
