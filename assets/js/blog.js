//Make a function that writes the blog posts, parsing the JSON.
const blogList = document.getElementById("blog-list")

function postABlog(){
    const blogPosts = JSON.parse(localStorage.getItem('posts')) || [];
    console.log(blogPosts)
    for (let blog = 0; blog < blogPosts.length; blog++) {
        const ul = document.createElement('ul');
    
        const title = document.createElement('h2');
        title.textContent = blogPosts[blog].blogTitle;
        title.classList.add("h2");
        const author = document.createElement('span');
        author.textContent = "By: "+ blogPosts[blog].userName;
        author.classList.add("span");
        const content = document.createElement('p');
        content.textContent = blogPosts[blog].blogContent;
        content.classList.add("p");
        ul.appendChild(title);
        ul.appendChild(author);
        ul.appendChild(content);
        blogList.appendChild(ul);
        console.log(ul)
    }
}

postABlog()