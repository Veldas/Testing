require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () { jj

        console.log("Yo, I am alive!");

        // Grab the div where we will put our Raphael paper
        var centerDiv = document.getElementById("centerDiv");

        // Create the Raphael paper that we will use for drawing and creating graphical objects
        var paper = new Raphael(centerDiv);

        // put the width and heigth of the canvas into variables for our own convenience
        var pWidth = paper.canvas.offsetWidth;
        var pHeight = paper.canvas.offsetHeight;
        console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);

        // Just create a nice black background
        var bgRect = paper.rect(0,0,pWidth, pHeight);
        bgRect.attr({"fill": "black"});

        // A dot for us to play with
        var dot = paper.circle(pWidth/2, pHeight/2, 20);
        dot.attr({"fill": "green"});


        // Add some properties to dot just to keep track of it's "state"
        dot.xpos=pWidth/2;
        dot.ypos=pHeight/2;
        dot.xrate=5;
        dot.yrate=5;

        // For counting calls to the 'draw' routine
        var count=0;

        // our drawing routine, will use as a callback for the interval timer
        var draw = function(){

            // Count and keep track of the number of times this function is called
            count++;
            //console.log("count = " + count);
            //console.log("dot pos is ["+dot.xpos + "," + dot.ypos + "]");

            // Update the position where we want our dot to be
            dot.xpos += dot.xrate;
            dot.ypos += dot.yrate;

            // Now actually move the dot using our 'state' variables
            dot.attr({'cx': dot.xpos, 'cy': dot.ypos});


            // keep the object on the paper
            if (dot.xpos > pWidth) {dot.xrate = -dot.xrate;}
            if (dot.ypos > pHeight) {dot.yrate = - dot.yrate};
            if (dot.xpos < 0) {dot.xrate = -dot.xrate;}
            if (dot.ypos < 0) (dot.yrate = - dot.yrate);
        }

        // call draw() periodically
        setInterval(draw, 20);

});