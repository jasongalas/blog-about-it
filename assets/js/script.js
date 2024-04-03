/* Start by laying out the variables that are referencing the input lines in the
HTML file to give us the ability to manipulate them. Make an array to store the blog posts in.*/

const chosenName = document.querySelector("#name");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const themeSwitcher = document.querySelector('.theme-switcher');
const mode = document.querySelector('.background')


// Make a function that checks if there are posts in local storage. If there are, fill the post variable//

function init(){
    const blogPosts = JSON.parse(localStorage.getItem('posts'));

    if (!blogPosts){
    posts = blogPosts;
    }
}

init();

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

    