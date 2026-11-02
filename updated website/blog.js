const posts = [

{
title:"5 Sustainable Travel Tips",

content:"Reduce waste and support local businesses."
},

{
title:"Benefits of Eco Tourism",

content:"Eco tourism protects wildlife and ecosystems."
}

];

const container =
document.getElementById("blog-posts");

posts.forEach(post => {

const div =
document.createElement("div");

div.classList.add("blog-card");

div.innerHTML = `
<h3>${post.title}</h3>
<p>${post.content}</p>
`;

container.appendChild(div);

});