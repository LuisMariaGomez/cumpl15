  const animationPath = './img/wired-outline-20-love-heart-hover-heartbeat.json'; // Replace with your JSON file's path
  const container = document.getElementById('corazon');

  const animation = lottie.loadAnimation({
    container: container,
    renderer: 'svg', // or 'canvas' for different rendering methods
    loop: true, // Set to true for continuous looping
    autoplay: true, // Set to true to start playing automatically
    path: animationPath,
  });

  animation.setSpeed(0.4); // Sets the speed to half of the original


  const animationPath2 = './img/disco.json'; // Replace with your JSON file's path
  const containerDisco = document.getElementById('disco');

  const animation2 = lottie.loadAnimation({
    container: containerDisco,
    renderer: 'svg', // or 'canvas' for different rendering methods
    loop: true, // Set to true for continuous looping
    autoplay: true, // Set to true to start playing automatically
    path: animationPath2,
  });

  animation2.setSpeed(0.4); // Sets the speed to half of the original