const feedDisplay = document.querySelector("#feed")

fetch("http://localhost:8000/results")
    .then(response => {return response.json()})
    .then(data =>{
        data.forEach(articles =>{
            const title = `<p>${articles.title}</p>`
            const url = `<h4>${articles.url}</h4>`

            feedDisplay.insertAdjacentHTML('afterend' ,title)
            feedDisplay.insertAdjacentHTML('afterend' ,url)
        })
    }).catch(err =>console.log(err))
