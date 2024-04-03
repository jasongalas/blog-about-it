const button = document.querySelector("#post");
const chosenName = document.querySelector("#name");
const title = document.querySelector("#title");
const content = document.querySelector("#content");

let posts = JSON.parse(localStorage.getItem('posts')) || [];

const blogTemplate = [
    {
        userName: "test",
        blogTitle: "First test",
        blogContent: "Manual testing"
    }
]

function init(){
    // If there are no posts currently stored, initialize with the blogTemplate.
    if(posts.length === 0){
    
        localStorage.setItem('posts', JSON.stringify(posts));

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
    
    location.replace("./blog.html");
}

init()
//Make an event that triggers the function, and double checks that the fields are not blank.

button.addEventListener('click', function (event) {;
    event.preventDefault();

    if (chosenName.value === '' || title.value === '' || content.value === '') {
        alert("Please fill in all fields!");
        
    return;
    }

    writeABlog();
    
});