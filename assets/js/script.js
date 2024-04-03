/* Start by laying out the variables that are referencing the input lines in the
HTML file to give us the ability to manipulate them. Make an array to store the blog posts in.*/


const chosenName = document.querySelector("#name");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const button = document.querySelector("#post");
const themeSwitcher = document.querySelector('#theme-switcher');
const mode = document.querySelector('.background')
    
let posts = [];

// Make a function that checks if there are posts in local storage. If there are, fill the post variable//

function init(){
    const blogPosts = JSON.parse(localStorage.getItem('posts'));

    if (blogPosts !== null){
    posts = blogPosts;
    }
}

//Make a function that creates the blog posts, stores them, adds them to the array, and changes pages.

function writeABlog(){
    const blogPost = {
        userName: chosenName.value.trim(),
        blogTitle: title.value.trim(),
        blogContent: content.value.trim()
    }

    posts.unshift(blogPost);
    blogPost.value = "";

    localStorage.setItem(`posts`, JSON.stringify(posts));

    location.replace("./blog.html")
}

//Make an event that triggers the function, and double checks that the fields are not blank.

button.addEventListener('click', function (event) {;
    event.preventDefault();

    if (chosenName.value === '' || title.value === '' || content.value === '') {
        alert("Please fill in all fields!");
        
    return;
    }

    writeABlog();
    
});

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

    