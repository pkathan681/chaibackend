require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = // 20240622105100
// https://api.github.com/users/pkathan681

{
  "login": "pkathan681",
  "id": 134130964,
  "node_id": "U_kgDOB_6tFA",
  "avatar_url": "https://avatars.githubusercontent.com/u/134130964?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pkathan681",
  "html_url": "https://github.com/pkathan681",
  "followers_url": "https://api.github.com/users/pkathan681/followers",
  "following_url": "https://api.github.com/users/pkathan681/following{/other_user}",
  "gists_url": "https://api.github.com/users/pkathan681/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pkathan681/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pkathan681/subscriptions",
  "organizations_url": "https://api.github.com/users/pkathan681/orgs",
  "repos_url": "https://api.github.com/users/pkathan681/repos",
  "events_url": "https://api.github.com/users/pkathan681/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pkathan681/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-05-20T07:48:19Z",
  "updated_at": "2024-03-11T09:45:42Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('pkathan681')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req,res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github', (req,res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})