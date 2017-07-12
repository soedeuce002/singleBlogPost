const blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};

// Start Editing Here
let div = document.querySelector(".container");

function blog(title, date, image, content, name, url) {

  let bPost = `
  <h1>${title}</h1>
  <h2>Written on ${date}</h2>
  <div>
    <img src="${image}">
    <p>${content}</p>
  </div>
  <footer>${name} ${url}</footer> `

  return bPost;

}
 div.innerHTML = blog(blogPost.title, blogPost.meta.date, blogPost.post.image, blogPost.post.content,
  blogPost.site.name, blogPost.site.url);
