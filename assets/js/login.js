
$(function() {
    
    $("form[name='login']").validate({
      
      rules: {
        username: "required",
        email: {
          required: true,
          email: true
        },
        npassword: {
          required: true,
          minlength: 8
        },
        rpassword: {
          required: true,
          minlength: 8
        }
      },
      messages: {
        username: "Please enter your username",
        npassword: { 
          required: "Please enter your new password",
          minlength: "Your password must be at least 8 characters long"
        },
        rpassword: {
          required: "Please re-enter your password",
          minlength: "Your password must be at least 8 characters long"
        },
        email: "Please enter a valid email address"
      },

      submitHandler: function(form) {
        window.location.href = "../index.html";
      }
    });
  });
 