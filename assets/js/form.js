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