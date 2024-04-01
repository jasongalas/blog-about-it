//Make a function that writes the blog posts, parsing the JSON.
const blogList = document.getElementById("blog-list")
function postABlog(){
    const blogPosts = JSON.parse(localStorage.getItem('posts')) || [];
    console.log(blogPosts)
    for (let blog = 0; blog < blogPosts.length; blog++) {
        const ul = document.createElement('ul');
    
        const li1 = document.createElement('li');
        li1.textContent = "Blog Title: "+ blogPosts[blog].blogTitle;
        // li.setAttribute('data-index', blog);
        const li2 = document.createElement('li');
        li2.textContent = "By: "+ blogPosts[blog].userName;
        const li3 = document.createElement('li');
        li3.textContent = blogPosts[blog].blogContent;
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        blogList.appendChild(ul);
        console.log(ul)
    }
}

postABlog()