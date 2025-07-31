/*
1.
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
        posts.forEach((post: any) => console.log(post.title))
    });

2.
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((post)=>{
        console.log(`Title: ${post.title}`)
        console.log(`Body: ${post.body}`)
    })

3.
*/
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users)=>{
        users.forEach((user: any) => {
            console.log(`Name: ${user.name} | Email: ${user.email}`);
        })
    })


