$(document).ready(function() {

  function randomBackground() {
        // Backgrounds list 
        var list = [
        'http://payload116.cargocollective.com/1/8/282864/4631161/DSC_0624_900.jpg',
        'http://payload251.cargocollective.com/1/8/282864/7325755/DSC_0837-1_900.jpg',
        'http://payload93.cargocollective.com/1/8/282864/4163623/DSC_3644_900.jpg',
        'http://payload175.cargocollective.com/1/8/282864/5815627/DSC_0479_900.jpg',
        'http://payload88.cargocollective.com/1/8/282864/4079530/mountain_900.jpg', 'http://33.media.tumblr.com/4eddd2720bc36d688800d61c287bea26/tumblr_na06w1Jhm91tubinno1_1280.jpg', 'http://31.media.tumblr.com/9bd6ea478ef6c2a5393ce8e16653b138/tumblr_na06ugx0AA1tubinno1_1280.jpg',
        'http://33.media.tumblr.com/3dde93f097de5e9db4f11b67729d6a2e/tumblr_na06dk1vWM1tubinno1_1280.jpg', 'http://31.media.tumblr.com/5621cca678402698daf3ff1b1d2bec7c/tumblr_n8q3q72WjE1tubinno1_1280.jpg',
        'http://33.media.tumblr.com/7fec78a6d43691f34d47a90a979e6484/tumblr_n9k4ndM26z1slhhf0o1_1280.jpg',
        'http://33.media.tumblr.com/d68a526d4a74fd411b6c369b5aecfdd3/tumblr_nb3zofHNDL1tkzbduo1_1280.jpg',
        'http://33.media.tumblr.com/7f90b5d835298a4de0a8cad101144d55/tumblr_nb0avp5pGR1tkzbduo1_r1_1280.jpg',
        'http://static.pexels.com/wp-content/uploads/2014/09/beans-coffee-kitchen-2742-830x550.jpg',
        'http://static.pexels.com/wp-content/uploads/2014/09/palms-2736-825x550.jpg',
        'http://static.pexels.com/wp-content/uploads/2014/08/cloud-2600-834x550.jpg',
        'http://31.media.tumblr.com/a6e8a15700dda596fd1deb5012140bb5/tumblr_nav9qruff31tomxvuo4_1280.jpg',
        'http://33.media.tumblr.com/d59fde7754e24629be674872632e7556/tumblr_nb1udanVmD1st5lhmo1_1280.jpg'
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
          $('.scene').mousemove(function(e) {
            var amountMovedX = (e.pageX * -1 / 26);
            var amountMovedY = (e.pageY * -1 / 26) - 100;
            $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
            $(this).css('background-size', 'cover');
          });
        }

        $(window).resize(function() {
          if ($(this).width() < 1000) {
            location.reload();
          } else {
            $('.scene').mousemove(function(e) {
              var amountMovedX = (e.pageX * -1 / 26);
              var amountMovedY = (e.pageY * -1 / 26) - 100;
              $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
              $(this).css('background-size', 'cover');
            });
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