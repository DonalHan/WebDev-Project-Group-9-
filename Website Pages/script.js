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
