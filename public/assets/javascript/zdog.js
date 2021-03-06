var yellow = '#ED0';
var gold = '#EA0';
var orange = '#E62';
var garnet = '#804012';
var lettuce = "#4ebd03";
var tomato = "#bd1903";
const TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  rotate: { x: -TAU/8 },
});

var burger = new Zdog.Anchor({
  addTo: illo,
  translate: { y: 24 },
  rotate: { x: TAU/4 },
});

// top bun
var topBun = new Zdog.Hemisphere({
  addTo: burger,
  diameter: 96,
  translate: { z: 64 },
  // translate: { z: 44 },
  stroke: 24,
  color: orange,
  // backface: gold,
});

// Tomato
new Zdog.Ellipse({
  addTo: burger,
  diameter: 90,
  stroke: 15,
  color: tomato,
  translate: { z: 44 },
  fill: true,
});

// lettuce
new Zdog.Polygon({
  addTo: burger,
  sides: 5,
  radius: 60,
  stroke: 10,
  color: lettuce,
  translate: { z: 34 },
  fill: true,
});


// cheese
new Zdog.Rect({
  addTo: burger,
  width: 92,
  height: 92,
  translate: { z: 24 },
  stroke: 16,
  color: yellow,
  fill: true,
});

// patty
new Zdog.Ellipse({
  addTo: burger,
  diameter: 96,
  stroke: 32,
  color: garnet,
  fill: true,
});

// bottom bun
new Zdog.Cylinder({
  addTo: burger,
  diameter: topBun.diameter,
  length: 16,
  translate: { z: -36 },
  stroke: topBun.stroke,
  color: topBun.color,
});

var seedAnchor = new Zdog.Anchor({
  addTo: topBun,
});

var seedZ = ( topBun.diameter + topBun.stroke ) / 2 + 1;
// seed
new Zdog.Shape({
  addTo: seedAnchor,
  path: [ { y: -3 }, { y: 3 } ],
  translate: { z: seedZ },
  stroke: 8,
  color: gold,
});

seedAnchor.copyGraph({
  rotate: { x: 0.6 },
});
seedAnchor.copyGraph({
  rotate: { x: -0.6 },
});
seedAnchor.copyGraph({
  rotate: { y: -0.5 },
});
seedAnchor.copyGraph({
  rotate: { y: 0.5 },
});

// 


function animate() {
    // rotate illo each frame
    illo.rotate.y += 0.01;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
    }
    
    
    // start animation
    animate();
    
    
    illo.updateRenderGraph();