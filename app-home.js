
  var home = {
  
      waypoints: [],
      init:function(){
  
          //blasting headinga
        //   document.querySelector("h1,h2").blast({
        //       delimiter: "character",
        //       tag: "span"
        //   });
  
         this.initSection_home();
         this.initWaypoints();
  
      },
      destroy:function(){
  
  
          if(typeof(initOciliator) !== 'undefined') { //if mobile
              //home destroy
              initOciliator(true);
          }
  
          document.querySelector('script#oscil').remove();
  
         //suite.context.close();destroy music
  
          //waypoints destroy
          home.waypoints.forEach(function(element, index, array) {
             element.destroy();
          });
  
          //my work destroy
          window.jQuery.colorbox.remove();
  
          //skills destroy
          document.querySelector('script#tagcanvas').remove();
          document.querySelector('#myCanvas').remove();
  
          if (typeof(app.contactForm) !== 'undefined') {
              app.contactForm.destroy();
          }
  
  
  
      },
      initWaypoints:function(){
  
          [].slice.call(document.querySelectorAll('.js-way')).forEach(function(el){
  
              home.waypoints.push(new Waypoint({
                  element: el,
                  handler: function(direction) {
                      //initializes particular section initSection_work etc..
                    //   home['initSection_' + window.jQuery(this.element).attr('data-load')]();
                    console.log('data', window.jQuery(this.element).attr('data-load'));
                    switch (window.jQuery(this.element).attr('data-load')) {
                        // console.log();
                        case 'about':
                            home.initSection_about();
                            break;
                        case 'work':
                            home.initSection_work();
                            break;
                        case 'contact':
                            home.initSection_contact();
                            break;
                        default:
                            break;
                    }
                      if (window.jQuery(this.element).attr('data-load') === 'about') {
                        home.initSection_about();
                      }
                      this.destroy();
  
                  },
                  offset:'80%'
              }));
          });
  
  
      },
      initSection_home:function () {
  
          var sectionHome = window.jQuery('#section-home');
  
            console.log("sectionHome", sectionHome);
        //   if(jQuery(window).width() > 768) {
              //load canvas script and init
              var myScript = document.createElement("script");
              myScript.setAttribute("src",'./osciliator.js');
            //   console.log("path", path);
              myScript.setAttribute("id", 'oscil');
              document.body.appendChild(myScript);
  
              myScript.addEventListener('load', function (e) {
  
                  initOciliator(false);
  
              });
        //   }
  
  
        //   sectionHome.addClass('loaded');
  
  
          //OLD AMINATION
          var a = 0;
          var b = 0;
          sectionHome.find(".blast").each(function(){
  
              if(a==300){
                  a=400;
              }
  
              if(a==1100){
                  a=1200;
              }
  
              var el = $(this);
              if(a==400){
  
                  setTimeout(function(){
                      sectionHome.find("h1 img").addClass('animation-logo');
                  },800);
              }
  
              setTimeout(function(){
                  el.addClass('animated bounceIn');
  
              },a);
  
              if(a < 1200) {
                  a = a + 100;
              }else {
                  a = a + 80;
              }
  
          });
          setTimeout(function(){
  
              sectionHome.find(".blast").removeClass('animated bounceIn');
              sectionHome.find(".blast").css('opacity',1);
  
              sectionHome.find(".blast").mouseenter(function (){
  
                  var el = window.jQuery(this);
  
                  window.jQuery(this).addClass('animated rubberBand');
                  window.jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  
                      el.removeClass('animated rubberBand');
  
                  });
  
              });
  
          },3000);
      },
      initSection_work:function(){

        var sectionWork = window.jQuery('#section-work');

        var a = 0;

        sectionWork.find(".word .char").each(function(){

            var el = window.jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 180;
        });


        setTimeout(function(){

            sectionWork.find(".word .char").removeClass('animated bounceIn');
            sectionWork.find(".word .char").css('opacity',1);

            sectionWork.find(".word .char").mouseenter(function (){

                var el = window.jQuery(this);

                window.jQuery(this).addClass('animated rubberBand');
                window.jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },2000);
      },

      initSection_about: function() {
        var sectionAbout = window.jQuery('#section-about');

        var a = 0;

        sectionAbout.find(".word .char").each(function(){

            var el = window.jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });
        setTimeout(function(){

            sectionAbout.find(".word .char").removeClass('animated bounceIn');
            sectionAbout.find(".word .char").css('opacity',1);

            sectionAbout.find(".word .char").mouseenter(function (){

                var el = window.jQuery(this);

                window.jQuery(this).addClass('animated rubberBand');
                window.jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },2000);
      },
      initSection_contact:function(){

        var sectionContact = window.jQuery('#section-contact');

        var a = 0;

        sectionContact.find(".word .char").each(function(){

            var el = window.jQuery(this);

            setTimeout(function(){
                el.addClass('animated bounceIn');

            },a);

            a = a + 80;
        });


        setTimeout(function(){

            sectionContact.find(".word .char").removeClass('animated bounceIn');
            sectionContact.find(".word .char").css('opacity',1);

            sectionContact.find(".word .char").mouseenter(function (){

                var el = window.jQuery(this);

                window.jQuery(this).addClass('animated rubberBand');
                window.jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },2000);
    }
  }

  let div = home.init();
  //# sourceURL=https://jacekjeznach.com/wp-content/themes/new/js/app/app-home.js