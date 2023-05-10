
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
          jQuery.colorbox.remove();
  
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
                      home['initSection_'+jQuery(this.element).attr('data-load')]();
  
                      this.destroy();
  
                  },
                  offset:'80%'
              }));
          });
  
  
      },
      initSection_home:function () {
  
          var sectionHome = document.querySelector('#section-home');
  
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
  
                  var el = document.querySelector(this);
  
                  document.querySelector(this).addClass('animated rubberBand');
                  document.querySelector(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  
                      el.removeClass('animated rubberBand');
  
                  });
  
              });
  
          },3000);
  
  
      },
  
  }

  let div = home.init();
  //# sourceURL=https://jacekjeznach.com/wp-content/themes/new/js/app/app-home.js