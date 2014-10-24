




$(document).ready(function () {

    //if (isAppleDevice()) {
    //    fixMobileSafariViewport();
    //}

    InitMain();
});

function InitMain() {
    StartSlider();
    InitPhotoSetGallery();
}

//hack because mobile safari doeesnt work with 100vh when dealing with DOM manipulation
function fixMobileSafariViewport() {
    $.stylesheet('.screenheight', 'height', '1500px');
    $.stylesheet('.screenheight', 'min-height', '1500px');
    $.stylesheet('.halfscreen', 'height', '750px');
    $.stylesheet('.halfscreen', 'min-height', '750px');
}

function isAppleDevice() {
    return (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
}



//slider
function StartSlider() {
    try {
        $('.slider').glide({
            autoplay: 5000,
            arrows: true,
            arrowRightText: '',
            arrowLeftText: '',
            navigation: true
        });
    }
    catch (e) {
    }
}

//photogrid
function InitPhotoSetGallery() {
    try {
        $('.photoset-grid-custom').photosetGrid({
            highresLinks: true,
            gutter: '5px',
            layout: '413',  // 4 images first row, 1 image second row, 3 images third row
            //rel: 'gallery1',

            onInit: function () { },
            onComplete: function () {
                // Show the grid after it renders
                $('.gallery1').removeAttr('style');

                $('.gallery1').magnificPopup({
                    delegate: 'a', // child items selector, by clicking on it popup will open
                    type: 'image',
                    gallery: { enabled: true }
                });
            }
        });
    }
    catch (e) {
    }

}

//form code
var _mainuserid = -1;
function UserFormPost(form) {
    var data = $(form).serialize();

    $(form).find('.lg-sending').show();
    $(form).find('.lg-send, .lg-formsent, .lg-formerror').hide();
    $(form).find('input, textarea, button').prop('disabled', true);

    _mainuserid = "295";

    $.ajax({
        type: 'POST',
        url: "https://www.singlepage.guru/app/api/generic/" + _mainuserid,
        data: data,
        crossDomain: true,
        success: function (response) {
            $(form).find('.lg-formsent').show();
            $(form).find('input, textarea').val('');
        },
        error: function (response) {
            $(form).find('.lg-formerror').show();
			//$(form).find('.lg-formerror').text(JSON.stringify(response));

        },
        complete: function (response) {
            $(form).find('.lg-send').show();
            $(form).find('.lg-sending').hide();
            $(form).find('input, textarea, button').prop('disabled', false);
        }
    });

    return false;
}



