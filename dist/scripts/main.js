$(document).ready(function(){function i(){var i=["dist/images/DSC_0624_900.jpg","dist/images/DSC_0837-1_900.jpg","dist/images/DSC_3644_900.jpg","dist/images/DSC_0479_900.jpg","dist/images/mountain_900.jpg","dist/images/tumblr_na06w1Jhm91tubinno1_1280.jpg","dist/images/tumblr_na06ugx0AA1tubinno1_1280.jpg","dist/images/tumblr_na06dk1vWM1tubinno1_1280.jpg","dist/images/tumblr_n8q3q72WjE1tubinno1_1280.jpg","dist/images/tumblr_n9k4ndM26z1slhhf0o1_1280.jpg","dist/images/tumblr_nb3zofHNDL1tkzbduo1_1280.jpg","dist/images/tumblr_nb0avp5pGR1tkzbduo1_r1_1280.jpg","dist/images/beans-coffee-kitchen-2742-830x550.jpg","dist/images/palms-2736-825x550.jpg","dist/images/cloud-2600-834x550.jpg","dist/images/tumblr_nav9qruff31tomxvuo4_1280.jpg","dist/images/tumblr_nb1udanVmD1st5lhmo1_1280.jpg","dist/images/image_full_back.png","dist/images/cover_5.png","dist/images/cover_6.png"],s=i.length,t=Math.floor(Math.random()*s),e=$(".scene");e.css("background","url("+i[t]+")no-repeat center center").css("background-size","cover")}function s(){setTimeout(function(){$("h1").css("opacity","1")},995)}function t(){$(window).width()<1e3||$(".scene").mousemove(function(i){var s=-1*i.pageX/126,t=-1*i.pageY/126;$(this).css("background-position",s+"px "+t+"px"),$(this).css("background-size","cover")}),$(window).resize(function(){i(),$(this).width()<1e3?$("body").addClass("mobile"):$(".scene").mousemove(function(i){var s=-1*i.pageX/36,t=-1*i.pageY/36;$(this).css("background-position",s+"px "+t+"px"),$(this).css("background-size","cover")})})}function e(){t(),setTimeout(function(){i(),s()},1),setInterval(function(){i()},12e4)}e()});