
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
    // Email validation

    function emailValidation(mail) 
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(bookingform.mail.value))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
    }


    function validateForm() // validates the bookingform using booleans
    {

        // the user must enter a name
        var name = document.forms["bookingform"]["name"].value;
        if (name == null || name == "") //if name is null or blank
        
            alert("Please enter a name");
            return false;
        }




    function videoalert() // function will create a small notice when User selects videography
        {
        if  (document.getElementById('dropdown2').value ==="3"){
            new Simplert ("success",'Due to popular demand and extensive set-up requirements at least three weeks notice is required for those wishing to avail of our videography services.\n\n\n\n\n\nFor urgent cases please feel free to outline your needs in our message box and we will do our best to accomodate you!').show();
        }
    }





