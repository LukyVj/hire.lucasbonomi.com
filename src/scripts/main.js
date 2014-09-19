$(document).ready(function() {

  function randomBackground() {
        // Backgrounds list 
        var list = [
        'dist/images/bg_1.jpg',
        'dist/images/bg_2.jpg',
        'dist/images/bg_3.jpg',
        'dist/images/bg_4.jpg',
        'dist/images/bg_5.jpg', 
        'dist/images/bg_6.jpg', 
        'dist/images/bg_7.jpg',
        'dist/images/bg_8.jpg',
        'dist/images/bg_9.jpg',
        'dist/images/bg_10.jpg',
        'dist/images/bg_11.jpg',
        'dist/images/bg_12.jpg',
        'dist/images/bg_13.jpg',
        'dist/images/bg_14.jpg',
        'dist/images/bg_15.jpg',
        'dist/images/bg_16.jpg',
        'dist/images/bg_17.jpg',
        'dist/images/bg_18.jpg',
        'dist/images/bg_19.jpg',
        'dist/images/bg_20.jpg',
        'dist/images/bg_21.jpg',
        'dist/images/bg_22.jpg',
        'dist/images/bg_23.jpg',
        'dist/images/bg_24.jpg'
        ];
        
        var x = list.length;
        var random = Math.floor(Math.random() * x);

        var scene = $('.scene');

        scene.css('background', 'url(' + list[random] + ')no-repeat center center').css('background-size', 'cover');
      }


      function h1Display() {
        setTimeout(function() {
          $('h1, .scene__links').css('opacity', '1')
        }, 995)
      }




      function deploy() {

        setTimeout(function() {
          randomBackground();
          h1Display();
        }, 01)

        setInterval(function() {
          randomBackground();
        }, 120000);

      }

      deploy();

    });
