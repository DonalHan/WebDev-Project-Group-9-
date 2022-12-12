
//(WORK PACKAGES: DONAL HAWNAY)----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    // Functionality for the naviagation bar 
    var nav = document.querySelector('.main-nav'); // Holding the main navigation styling in a variable
    var logo = document.querySelector('.logo'); // Holding the logo styling in a variable


    // Adding an event listener(to scroll functionality) that will append new styling to the header once the user scrolls past 100px
    window.addEventListener('scroll', function() 
        {
            if(window.pageYOffset > 100) // Appending the small version styling to the nav bar once the scroll threshold is reached
            {
                nav.classList += ' small';
                logo.classList += ' logo-small';
            }
            else  // Appending the default styling to the nav bar once the scrolling is within the threshhold
            {
                nav.classList = 'main-nav';
                logo.classList = ' logo';
            }
        }
    )

    //Functionality for the slider on the video page to swap out the main video with user selection 

    function videoUrl(vidInput) // This function takes in a video paramter that is linked to the thumbnail the user clicked, IT replaces the video src(slider) with this video.
    {
        document.getElementById("slider").src = vidInput
    }




//(WORK PACKAGES: SHAUN KALAGIN)----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    
    /* EMail Validation
    Using regular expression to ensure that a proper format was entered for email field
    basic breakdown is a String + @ + String + . + string
    allowance made for 'triple barreled' domains like like @student.ncirl.ie
    */

    function emailValidation() {
    // line below calling the regexp test() method directly to the value of email in bookingform
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(bookingform.mail.value)) 
    {
    // console message if boolean value returns true, email matches regular expression
    // console message used to not create unnecessary clutter on true result
    console.log('User provided a valid EMail'); 
        return (true)
    }
    // create jquery warning if values don't match regexp acceptable values
    new Simplert("error", "Please enter a valid e-mail address.").show(); 
        return (false)
    }

    /* Name validation
    Again, done using regular expression with more detailed breakdown in report.
    First name and last name required, two strings separated by a space, no special characters allowed
    excepting ' and - because some last names have them e.g John Smith-doe or Grace O'Malley
    */

    function validateName()
    {
        // regular expression, " - " and " ' " included in the last name portion to accommodate double barrel names + e.g O'Malleys
        var regName = /^[a-zA-Z]+ [a-zA-Z'-]+$/;
        // variable name is equal to name in bookingform
        var name = document.forms["bookingform"]["name"].value;
        // conditional if name does not equal to the acceptable values in var regName
        if(!regName.test(name)){ 
            new Simplert("error", 'Please provide your first and last name').show();
            document.getElementById(name).focus();
            return false;
        }else{
            console.log('User provided a valid name'); 
            return true;
        }
    }


    /* Simple jQuery alert 'Simplert' from user 'thestevenmick' publish on GitHub.
    adjustments made to suit styling of our project, comments explaining functionality found in 'simplert.js'
    N.B Discovery of backslash to allow for neater coding, can linebreak code without disrupting its function
    N.B \u00A0 is the equivalent of non-breaking space in javascript. Below code is very unattractive, but the
    only way I found possible to separate the alert message into seperate lines. \n was tried but could not get it to work.
    Below code I accept is unattractive, but functional.
    */

    function videoalert() // function will create a small notice when User selects videography using Jquery 'Simplerts' 
        {
        if  (document.getElementById('dropdown2').value ==="3"){ // conditional to ensure function only happens once dropdown item with value 3 selected (videography) */
            new Simplert ("success",'Due to popular demand and extensive set-up requirements at least three weeks notice is required \
             for those wishing to avail of our videography services.\
             \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \
             \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \
             \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \
             \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \
             \u00A0\u00A0\u00A0\u00A0 \
            For urgent cases please feel free to outline your needs in our message box and we will do our best to accomodate you!').show();
        }
    }


//default gulp task
exports.default = series (scssTask, jsTask, browserSyncServe, watchTask);

//Build Gulp Task

exports.build = series (scssTask, jsTask);


