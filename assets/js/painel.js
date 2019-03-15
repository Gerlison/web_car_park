const defaultIcons = [
    "far fa-credit-card",
    "fas fa-cash-register",
    "fas fa-car-side"
  ];

  if (window.matchMedia("(min-width: 900px)").matches) {
    document.querySelectorAll(".action-button").forEach((item, i) => {
      $("button#" + item.id + " i").attr("class", defaultIcons[i]);
      $("button#" + item.id).attr("onclick", "console.log('openModal')");
      $("button#" + item.id).addClass('bigger');
    });
  }

  function changeView(id) {
    $("button#" + id).attr("onclick", 'console.log("openModal")');
    $("button#" + id + " i").attr("class", "fas fa-plus");

    document.querySelectorAll(".action-button").forEach((item, i) => {
      if (item.id != id) {
        $("button#" + item.id + " i").attr("class", defaultIcons[i]);
        $("button#" + item.id).attr("onclick", "changeView(id)");
      }
    });

    $(".painel").css({
      display: "none"
    });
    $("#" + id + "-painel").show();
  }


  function openMenu(){
    $('#menu-backdrop').fadeIn('slow');
    $('#menu-container').slideDown('fast');
    $('html').css({
      'overflow': 'hidden'
    })

    $('#profile a').attr('href','javascript:closeMenu()')
  }

  function closeMenu(){
    $('#menu-backdrop').fadeOut('slow');
    $('#menu-container').fadeOut('fast');
    $('html').css({
      'overflow': 'auto '
    })
    $('#profile a').attr('href','javascript:openMenu()')
  }