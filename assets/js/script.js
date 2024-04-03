/* Start by laying out the variables that are referencing the input lines in the
HTML file to give us the ability to manipulate them. Make an array to store the blog posts in.*/

const themeSwitcher = document.querySelector('.theme-switcher');
const mode = document.querySelector('.background')

//light & dark mode switcher
let theme = 'light'

themeSwitcher.addEventListener('click', function(){

// If mode is light, apply dark background
    if (theme === 'light') {
        theme = 'dark';
        mode.setAttribute('class', 'dark');
      }
      // If mode is dark, apply light background
      else {
        theme = 'light';
        mode.setAttribute('class', 'light');
      }

});

    