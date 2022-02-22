function letPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showDisplay(data) );
}

function showDisplay(data){
    console.log(data);
    const showDisplay = document.getElementById('show-display');
    for (const post of data){
        const HtmlTag = document.createElement('div');
     
        HtmlTag.innerHTML = (`<h1> title: ${post.title} </h1> <p>  ${post.body} </p>    <p> id:${post.id}</p> `);
        HtmlTag.className = 'border-pad';
        showDisplay.appendChild(HtmlTag);
        
    }

}