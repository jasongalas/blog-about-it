var blogTemplate = [
    {
        userName: "test",
        blogTitle: "First test",
        blogContent: "Manual testing"
    }
]

function init(){
    let blogPosts = JSON.parse(localStorage.getItem('posts'));

if(!blogPosts){
    blogPosts.push(blogTemplate)
    localStorage.setItem("posts",JSON.stringify(blogPosts))
}
}

init()

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