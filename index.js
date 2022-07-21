const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')

const PORT =  8000
const app = express()
app.use(cors())
const url = 'https://www.theguardian.com/uk'


app.get('/' , (req , res)=>{
    res.json("This is my webscrper")
})

app.get('/results' , (req , res)=>{
    axios(url).then(response =>{
            const html = response.data;
            const $ = cheerio.load(html)
            const articles = []
            $('.fc-item__content' ,html).each(function(){
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })
            res.json(articles)
        }).catch(err =>{console.log(err)})

})


app.listen(PORT , ()=>{
    console.log(`server listening on port ${PORT}`);
})