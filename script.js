$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            pname:{
                required:true,
                minlength:4
            },
            emailAdd:{
                required:true,
                email:true
            },
            mobile:{
                minlength:10,
                maxlength:10,
                required:true,

            },
            msg:{
                minlength:20
            }
        }
       
    })
})