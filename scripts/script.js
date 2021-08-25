// Кастомный селект

jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
    }
  });
});

// input:focus

$('body').on('input blur', '.form-group__input', function(event) {
  let $elem = $(this);
  if ($elem.next('.form-group__placeholder').length > 0) {
      if ($elem.val().length == 0) {
          $elem.removeClass('is_changed');
      } else {
          $elem.addClass('is_changed');
      }
  }
});
$('body').on('focus', '.form-group__input', function(event) {
  let $elem = $(this);
  if ($elem.next('.form-group__placeholder').length > 0) {
      $elem.addClass('is_changed');
  }
});

// слайдер "Похожие товары"

var swiper = new Swiper(".similar-posts-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 20
});
