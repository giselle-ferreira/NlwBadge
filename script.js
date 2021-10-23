//Buildig the object
const linksSocialMedia = {
  github: 'giselle-ferreira',
  facebook: 'giselle.fs',
  instagram: 'giselle_ferrer',
  linkedin: 'in/giselleferreiras'
}

//Function to change que social media links
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
