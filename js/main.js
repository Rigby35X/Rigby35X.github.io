/**
 * Ajax
 */



//import 'smooth-scrollbar/dist/smooth-scrollbar.js';

function FormSubmit () {

    event.preventDefault();

  
    var first = document.getElementById('first_name');
    var last = document.getElementById('last_name');
    var email = document.getElementById('email');
    var first_error = document.getElementById('first_error');
    var last_error = document.getElementById('last_error');
    var email_error = document.getElementById('email_error');

    // Validation Error
    if(first.value == '') {
        first_error.classList.add('sendgrid-message-error--active');
        return false;
    } else {
        first_error.classList.remove('sendgrid-message-error--active');
    }

    if(last.value == '') {
        last_error.classList.add('sendgrid-message-error--active');
        return false;
    } else {
        last_error.classList.remove('sendgrid-message-error--active');
    }

    if(email.value == '') {
        email_error.classList.add('sendgrid-message-error--active');
        return false;
    } else {
        email_error.classList.remove('sendgrid-message-error--active');
    }

    var formData = new FormData();

    formData.append( 'action',  'custom_mailchimp' );

    formData.append(' first_name', jQuery( '#first_name').val() );
    
    formData.append( 'last_name',  jQuery( '#last_name').val() );
    
    formData.append( 'email',  jQuery( '#email').val() );

    jQuery.ajax({

        cache: false,

        url: jQuery( '#js-form-alfacharlie' ).attr( 'action' ),

        type: 'POST',

        data: formData,

        contentType: false,

        processData: false,

        beforeSend: function () {
        },
        success: function ( response ) {

            console.log("end");

            if ( response.success ) {
             
                jQuery('#js-form-alfacharlie').addClass('sendgrid-form__form--opacity');

                setTimeout(function(){
                    jQuery('#js-form-alfacharlie').addClass('sendgrid-form__form--hidden');
                }, 500);
        
                setTimeout(function(){ 
                    jQuery('#message').addClass('sendgrid-form__success--active');
                }, 600);

            }

        }
    });
    return false;
}



// For newly opened link (e.g in new tab)
const hash = window.location.hash;
const scrollbar = Scrollbar.init(document.body, {
    continuousScrolling: false,
    alwaysShowTracks: true,
    plugins: {}
});
if (hash) {
    const target = document.getElementById(hash.substring(1));
    if (target) {
        scrollbar.scrollIntoView(target, {
            offsetTop: -scrollbar.containerEl.scrollTop,
        });
    }
}

// For opening link in the same page
window.addEventListener('hashchange', function () {
    const hash = window.location.hash;
    if (hash) {
        const target = document.getElementById(hash.substring(1));
        if (target) {
            scrollbar.scrollIntoView(target, {
                offsetTop: -scrollbar.containerEl.scrollTop,
            });
        }
    }
}, false);

scrollbar.scrollIntoView(document.querySelector(hash), {
    offsetTop: -scrollbar.containerEl.scrollTop,
});

// const bar = Scrollbar.init(document.querySelector('.scroll-content'));
//
// bar.containerEl.querySelectorAll("a[href*='#']").forEach(el => {
//     el.addEventListener("click", () => {
//         bar.scrollIntoView(document.getElementById(el.getAttribute("href").substring(1)))
//     })
// })