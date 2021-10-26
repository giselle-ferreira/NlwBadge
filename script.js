//Building the object
const linksSocialMedia = {
  github: 'giselle-ferreira',
  facebook: 'giselle.fs',
  instagram: 'giselle_ferrer',
  linkedin: 'in/giselleferreiras'
}

//Function to change the social media links
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks() //calling the function

//Function to fetch the profile info from the github
function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos() //don't forget to call the function ;)

//Rocket flying / flying stars
function stars() {
  let count = 20
  let scene = document.querySelector('.scene')
  let i = 0
  while (i < count) {
    let star = document.createElement('i')
    let x = Math.floor(Math.random() * window.innerWidth)

    let duration = Math.random() * 1
    let h = Math.random() * 100

    star.style.left = x + 'px'
    star.style.width = 1 + 'px'
    star.style.height = 35 + h + 'px'
    star.style.animationDuration = duration + 's'

    scene.appendChild(star)
    i++
  }
}

stars()
