import React, { Component } from 'react';

import './main.css';

class CanvasComponent extends Component {

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {

      (function(){
          var canvas = document.getElementById('canvasoverlay');
          // Set canvas height and width to respond to device screen size
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          var hexHeight,
              hexRadius,
              hexRectangleHeight,
              hexRectangleWidth,
              hexagonAngle = 0.523598776, // 30 degrees in radians
              sideLength = 125,
              boardWidth = 100,
              boardHeight = 100;

          hexHeight = Math.sin(hexagonAngle) * sideLength;
          hexRadius = Math.cos(hexagonAngle) * sideLength;
          hexRectangleHeight = sideLength + 2 * hexHeight;
          hexRectangleWidth = 2 * hexRadius;

          if (canvas.getContext){
              var ctx = canvas.getContext('2d');

              // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
              ctx.strokeStyle = "black";
              ctx.lineWidth = 1;

              drawBoard(ctx, boardWidth, boardHeight);

              window.addEventListener("resize", function(){
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                init();
              });

              canvas.addEventListener("mousemove", function(eventInfo) {
                  var x,
                      y,
                      hexX,
                      hexY,
                      screenX,
                      screenY;

                  x = eventInfo.offsetX || eventInfo.layerX;
                  y = eventInfo.offsetY || eventInfo.layerY;


                  hexY = Math.floor(y / (hexHeight + sideLength));
                  hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);

                  screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
                  screenY = hexY * (hexHeight + sideLength);

                  ctx.clearRect(0, 0, canvas.width, canvas.height);

                  drawBoard(ctx, boardWidth, boardHeight);

                  // Check if the mouse's coords are on the board
                  if(hexX >= 0 && hexX < boardWidth) {
                      if(hexY >= 0 && hexY < boardHeight) {
                          ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
                          drawHexagon(ctx, screenX, screenY, true);
                      }
                  }
              });
          }

          function drawBoard(canvasContext, width, height) {
              var i,
                  j;

              for(i = 0; i < width; ++i) {
                  for(j = 0; j < height; ++j) {
                      drawHexagon(
                          ctx,
                          i * hexRectangleWidth + ((j % 2) * hexRadius),
                          j * (sideLength + hexHeight),
                          false
                      );
                  }
              }
          }

          function drawHexagon(canvasContext, x, y, fill) {
              // var fill = fill || false;

              canvasContext.beginPath();
              canvasContext.moveTo(x + hexRadius, y);
              canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
              canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
              canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
              canvasContext.lineTo(x, y + sideLength + hexHeight);
              canvasContext.lineTo(x, y + hexHeight);
              canvasContext.closePath();

              if(fill) {
                  canvasContext.fill();
              } else {
                  canvasContext.stroke();
              }
          }
          function init(drawBoard, drawHexagon){};
          init();

      })();

    }
    render() {
        return (
            // <canvas ref="canvas" id="canvas"/>
            <canvas id="canvasoverlay"></canvas>
        );
    }
}
export default CanvasComponent;
