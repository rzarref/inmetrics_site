var inmetrics = function () {

  var init = function () {
    if ($("body").hasClass("animated")) {
      if ($(window).width() > 768)
        setDataSkrollr();
      removeCurtain();
    }
    $("[data-toggle=slide]").on({ click: slideToggle });
    $(".descriptions a").magnificPopup({ type: 'inline' });
    $(".selections a").on({
      mouseenter: selectionsHoverIn,
      mouseleave: selectionsHoverOut,
      click: selectionsClick
    });
    $('.contact-form form').on({ 
      submit: contactFormSubmit
    })
    .validate(contactFormValidations());
  };

  var slideToggle = function () {
    var target = $($(this).attr("href"));
    if (target.data("slide-toggle") != "on") {
      target.slideDown('fast', function () {
        target.data("slide-toggle", "on");
      });
    }
    else {
      target.slideUp('fast', function () {
        target.data("slide-toggle", "off");
      });
    }
    return false;
  };

  var selectionsHoverIn = function () {
    var selection = $(this).data("selection");
    $(this).closest(".columns-overlap")
           .find("[data-selection-row=" + selection + "]")
           .addClass("hovered");
  };

  var selectionsHoverOut = function () {
    var selection = $(this).data("selection");
    $("[data-selection-row=" + selection + "]").removeClass("hovered");
  };

  var selectionsClick = function () {
    var selection = $(this).data("selection");
    $(this).toggleClass("selected");
    var isSelected = $(this).hasClass("selected");
    if ($("[data-selection=" + selection + "].selected").length > 0)
      $("[data-selection-row=" + selection + "]").addClass("selected");
    else
      $("[data-selection-row=" + selection + "]").removeClass("selected");
    var selectionIds = $(this).data("selection-ids");
    var selections = $(".contact-form form").data("selections") || [];
    if (isSelected) {
      selections.push(selectionIds);
    }
    else {
      i = selections.indexOf(selectionIds);
      if (i != -1) selections.splice(i, 1);
    }
    $(".contact-form form").data("selections", selections);
    $("#selections-input").val(selections.join(";"));
    return false;
  };

  var contactFormSubmit = function () {    
    var form = $(this);
    $.ajax({
      url: form.attr("action"),
      type: "POST",
      data: form.serialize(),
      success: function (data, textStatus, request) {
        if (request.getResponseHeader('inmetrics_plan_request') == 'success')
          form[0].reset();
        $(".result-message").html(data).fadeIn();
      },
      error: function (r, status, error) {
        console.info("Ajax Error, status = " + status);
        console.info(error);
      }
    });
    return false;
  };

  var contactFormValidations = function () {
    return {
      rules: {
        'plan_request[name]': "required",
        'plan_request[email]': { required: true, email: true },
        'plan_request[email_confirmation]': { equalTo: '#email_input' },
        'plan_request[message]': "required"
      },
      messages: {
        'plan_request[name]': window.config.errors.required,
        'plan_request[email]': {
          required: window.config.errors.required,
          email: window.config.errors.invalid_email,
        },
        'plan_request[email_confirmation]': {
          equalTo: window.config.errors.email_nomatch,
        },
        'plan_request[message]': window.config.errors.required,
      }
    };
  };

  var removeCurtain = function () {
    $.get(window.config.base + 'images/animados/olho_aladoanima.png', function () {
      setTimeout(function () {
        $('body').removeClass('loading-on');
      }, 1200);
    });
  };

  isMobile = function () {
    return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
  };

  var setDataSkrollr = function () {
    if (isMobile()) {
      animations.PortableVersion();
    } else {
      animations.DesktopVersion();
    }
  };

  return { init: init }
}();

$(document).ready(inmetrics.init);