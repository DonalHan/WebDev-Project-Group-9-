var nav = document.querySelector('.main-nav')
var logo = document.querySelector('.logo')

window.addEventListener('scroll', function()
    {
        if(window.pageYOffset > 100)
        {
            nav.classList += ' small';
            logo.classList += ' logo-small';
        }
        else
        {
            nav.classList = 'main-nav';
            logo.classList = ' logo';
        }
    }
)

// Functionality for the slider on the video page to swap out the main video with user selection

function videoUrl(vidInput)
{
    document.getElementById("slider").src = vidInput
}




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


    function videoAlert() // function will create a small notice when User selects videography
	{
   	if(document.getElementById('dropdown').value ==="3"){
   new Simplert("",'As delicious as it is, this burger is extremely larurself warned.').show()
    }
}