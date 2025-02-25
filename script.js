// Coffee Cup Animation
gsap.to("#steamLeft", {
    y: -5,              // move upward
    duration: 1,
    repeat: -1,         // repeat forever
    yoyo: true,         // animate back to original
    ease: "power1.inOut"
  });

  gsap.to("#steamCenter", {
    y: -5,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 0.2          // stagger the animation a bit
  });

  gsap.to("#steamRight", {
    y: -5,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 0.4
  });

  // Optional: a subtle scale "breathing" animation on the entire cup
  gsap.to("#cupBody", {
    scale: 1.02,
    transformOrigin: "center center",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

// Cake Animation
  gsap.to("#icing", {
    y: 4,              // Move down to create a "drip" effect
    duration: 1.5,     // Animation duration
    repeat: -1,        // Infinite loop
    yoyo: true,        // Moves back to the original position
    ease: "power1.inOut" // Smooth easing effect
  });

  // Optional: Candle Flames Flicker Effect
  gsap.to(["#flame1", "#flame2", "#flame3"], {
    scaleY: 1.3,       // Make the flames flicker slightly
    duration: 0.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 0.1       // Stagger effect for realism
  });


// Pacman Ghost Animation
// 1) Make the ghost float left-to-right
  gsap.to("#ghostBody", {
    x: 15,            // distance to travel horizontally
    duration: 3,       // time in seconds
    repeat: -1,        // infinite loop
    yoyo: true,        // come back to the starting point
    ease: "power1.inOut"
  });

  // 2) Add a subtle up-and-down float for extra ghostly movement
  gsap.to("#ghostBody", {
    y: 8,              // slight vertical bob
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  // 3) Animate the eyes to shift horizontally (looking left-right)
  gsap.to(["#eyeLeft", "#eyeRight"], {
    x: 1.5,            // how far the eyes move
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });


// Flame Animation
gsap.to("#flame", {
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            duration: 0.2,
            opacity: 0.8,
            ease: "power1.inOut"
        });

        gsap.to("#flame", {
            x: "random(-2, 2)",
            y: "random(-3, 3)",
            repeat: -1,
            yoyo: true,
            duration: 0.15,
            ease: "sine.inOut"
        });

        gsap.to("#log1, #log2", {
            rotate: "1.5deg",
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "sine.inOut"
        });


// Bike Animation
gsap.to(".wheel", {
            rotation: 360,
            transformOrigin: "center",
            repeat: -1,
            ease: "linear",
            duration: 1
        });

        gsap.to("#bike", {
            x: 300,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 3
        });

        gsap.to(".wheel", {
            scaleX: 0.9,
            scaleY: 1.1,
            transformOrigin: "center",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 0.2
        });