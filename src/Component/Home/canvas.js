draw(99, Math.PI/2);
 function draw(percent, sR) {
      if (percent < 0 || percent > 100) {
        return;
      }
      if (sR < Math.PI/2 || sR >= 3/2 * Math.PI) {
        return;
      }

      var canvas = document.querySelector('#canvas'),
          cxt = canvas.getContext('2d'),
          cWidth = canvas.width,
          cHeight = canvas.height,
          baseColor = '#e1e1e1',
          coverColor = '#FD5D5C',
          newColor = '#fff',
          PI = Math.PI,
          sR = sR || 1/2 * PI; 

      var finalRadian = sR + ((PI + (PI - sR) * 2) * percent / 100); 
      var step = (PI + (PI - sR) * 2)/100; 
      var text = 0; 
      var timer = setInterval(function() {
        cxt.clearRect(0, 0, cWidth, cHeight);
        var endRadian =  sR + text * step;
        drawCanvas(cWidth/2, cHeight/2, 150, sR, sR + (PI + (PI - sR) * 2), baseColor, 6);
        drawCanvas(cWidth/2, cHeight/2, 150, sR, endRadian, coverColor, 6);
        var angle = 2*PI - endRadian; 
        xPos = Math.cos(angle) * 80 + cWidth/2; 
        yPos = -Math.sin(angle) * 80 + cHeight/2; 
        drawCanvas(xPos, yPos, 2, 0, 2*PI, newColor, 2);
        cxt.fillStyle = newColor;
        cxt.font = '40px PT Sans';
        var textWidth = cxt.measureText(text+'%').width;
        cxt.fillText(text+'%', cWidth/2 - textWidth/2, cHeight/2 + 15);
        text++;
        if (endRadian.toFixed(2) >= finalRadian.toFixed(2)) {
          clearInterval(timer);
        }
      }, 30);
      function drawCanvas(x,y,r,sRadian,eRadian,color,lineWidth) {
        cxt.beginPath();
        cxt.lineCap = "round";
        cxt.strokeStyle = color;
        cxt.lineWidth = lineWidth;
        cxt.arc(x, y, r, sRadian, eRadian, false);
        cxt.stroke();
      }
    }