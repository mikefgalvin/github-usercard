import axios from 'axios';
console.log(axios);
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const profile = axios.get('https://api.github.com/users/mikefgalvin');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
// console.log('profile', profile);

const entryPoint = document.querySelector('.cards');

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// axios.get('https://api.github.com/users/mikefgalvin')
//   .then((res) => {
//     console.log('data came thru', res);
//     const profileContent = res.data;
//     console.log('profile content', profileContent);
//     const newProfileCard = profileMaker(profileContent);
//     entryPoint.appendChild(newProfileCard);
//   })
//   .catch((error) => {
//     console.log('it didnt work', error);
//   })

// followersArray.forEach((item) => { 
//   const newProfile = profileMaker(item);
//   entryPoint.appendChild(newProfile);
// });

const followersArray = [
  'https://api.github.com/users/mikefgalvin',
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell',
  ];

followersArray.forEach((item) => { 
  axios.get(item)
  .then((res) => {
    console.log('data came thru', res);
    const profileContent = res.data;
    console.log('profile content', profileContent);
    const newProfileCard = profileMaker(profileContent);
    entryPoint.appendChild(newProfileCard);
  })
  .catch((error) => {
    console.log('it didnt work', error);
  })
})


  

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// 'https://api.github.com/users/mikefgalvin'
// 'https://api.github.com/users/dustinmyers'
// 'https://api.github.com/users/justsml'
// 'https://api.github.com/users/luishrd'
// 'https://api.github.com/users/bigknell'




// const followerProfiles = followersArray.map((x) => {
//   return makeProfiles;
// });

// makeProfiles.forEach((profile) => {
//   entryPoint.appendChild(profile);
// });

// followersArray.forEach((item) => { 
//   const newProfile = profileMaker(item);
//   entryPoint.appendChild(newProfile);
// });

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function profileMaker(profile) {

  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profileAddress = document.createElement('p');
  const profileURL = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profileAddress);
  profileAddress.appendChild(profileURL);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  image.src = profile.avatar_url; 
  // console.log('image', image);
  name.textContent = profile.name;
  username.textContent = profile.login;
  location.textContent = profile.location; 
  profileAddress.textContent = profile.url;
  following.textContent = profile.following;
  followers.textContent = profile.followers;
  bio.textContent = profile.bio;
  profileURL.setAttribute('href', profile.html_url);

    console.log('card', card);
  // console.log('profile function', profile);
  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
