$(document).ready(function() {

  function randomBackground() {
        // Backgrounds list 
        var list = [
        'dist/images/DSC_0624_900.jpg',
        'dist/images/DSC_0837-1_900.jpg',
        'dist/images/DSC_3644_900.jpg',
        'dist/images/DSC_0479_900.jpg',
        'dist/images/mountain_900.jpg', 
        'dist/images/tumblr_na06w1Jhm91tubinno1_1280.jpg', 
        'dist/images/tumblr_na06ugx0AA1tubinno1_1280.jpg',
        'dist/images/tumblr_na06dk1vWM1tubinno1_1280.jpg', 
        'dist/images/tumblr_n8q3q72WjE1tubinno1_1280.jpg',
        'dist/images/tumblr_n9k4ndM26z1slhhf0o1_1280.jpg',
        'dist/images/tumblr_nb3zofHNDL1tkzbduo1_1280.jpg',
        'dist/images/tumblr_nb0avp5pGR1tkzbduo1_r1_1280.jpg',
        'dist/images/beans-coffee-kitchen-2742-830x550.jpg',
        'dist/images/palms-2736-825x550.jpg',
        'dist/images/cloud-2600-834x550.jpg',
        'dist/images/tumblr_nav9qruff31tomxvuo4_1280.jpg',
        'dist/images/tumblr_nb1udanVmD1st5lhmo1_1280.jpg',
        'dist/images/image_full_back.png',
        'dist/images/cover_5.png',
        'dist/images/cover_6.png'
        ];
        
        var x = list.length;
        var random = Math.floor(Math.random() * x);

        var scene = $('.scene');

        scene.css('background', 'url(' + list[random] + ')no-repeat center center').css('background-size', 'cover');
      }


      function h1Display() {
        setTimeout(function() {
          $('h1').css('opacity', '1')
        }, 995)
      }

      function backgroundMove() {
        if ($(window).width() < 1000) {

        } else {
         // $('.scene').mousemove(function(e) {
          //  var amountMovedX = (e.pageX * -1 / 126);
           // var amountMovedY = (e.pageY * -1 / 126);
           // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
           // $(this).css('background-size', 'cover');
         // });
        }

        $(window).resize(function() {
          randomBackground();
          if ($(this).width() < 1000) {
            $('body').addClass('mobile')
          } else {
           // $('.scene').mousemove(function(e) {
             // var amountMovedX = (e.pageX * -1 / 36);
             // var amountMovedY = (e.pageY * -1 / 36);
             // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
             // $(this).css('background-size', 'cover');
           // });
          }
        })
      }



      function deploy() {
        backgroundMove();

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
