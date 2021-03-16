const get = document.querySelector(".get")
const post = document.querySelector(".post")
const result = document.querySelector(".result")

get.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
        result.innerHTML = JSON.stringify(json)
    });
})


post.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => {
        result.innerHTML = JSON.stringify(json)
    });
})

