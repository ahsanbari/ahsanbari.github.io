$(document).ready(function(){
    $(".s1").hover(function(){
        a1.play();
        },
    function(){
        a1.load();
    });
});
$(document).ready(function(){
    $(".s2").hover(function(){
        a2.play();
        },
    function(){
        a2.load();
    });
});
$(document).ready(function(){
    $(".s3").hover(function(){
        a3.play();
        },
    function(){
        a3.load();
    });
});

$(document).ready(function(){
    $(".s4").hover(function(){
        a4.play();
        },
    function(){
        a4.load();
    });
});

$(document).ready(function(){
    $(".s5").hover(function(){
        a5.play();
        },
    function(){
        a5.load();
    });
});

$(document).ready(function(){
    $(".s6").hover(function(){
        a6.play();
        },
    function(){
        a6.load();
    });
});

$(document).ready(function(){
    $(".s7").hover(function(){
        a7.play();
        },
    function(){
        a7.load();
    });
});

$(document).ready(function(){
    $(".s8").hover(function(){
        a8.play();
        },
    function(){
        a8.load();
    });
});

$(document).ready(function(){
    $(".s9").hover(function(){
        a9.play();
        },
    function(){
        a9.load();
    });
});

$(document).ready(function(){
    $(".s10").hover(function(){
        a10.play();
        },
    function(){
        a10.load();
    });
});


(function($) {
  // Menu Functions
  $(document).ready(function() {
    $("#menuToggle").click(function(e) {
      var $parent = $(this).parent("nav");
      $parent.toggleClass("open");
      var navState = $parent.hasClass("open") ? "Hide" : "Show";
      $(this).attr("title", navState + " Menu");
      // Set the timeout to the animation length in the CSS.
      setTimeout(function() {
        console.log("timeout set");
        $("#menuToggle > span").toggleClass("navClosed").toggleClass("navOpen");
      }, 200);
      e.preventDefault();
    });
  });
})(jQuery);

