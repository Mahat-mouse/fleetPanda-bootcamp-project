async function fetchBlogs(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
}

fetchBlogs()