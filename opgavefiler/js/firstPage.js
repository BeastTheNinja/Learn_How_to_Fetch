/* Opgave 1*/
// din kode her
const myDataFileUrlStory = "../../opgavefiler/data/story.json";
const myStoryElementStory = document.getElementById("theStory");

// Fetch the story data and display ONLY the Danish version
fetch(myDataFileUrlStory)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Display only the Danish version for Opgave 1
    const danishStory = data.DK;
    
    // Clear the element first
    myStoryElementStory.innerHTML = '';
    
    // Create headline element
    let headline = document.createElement('h2');
    headline.innerText = danishStory.headline;
    
    // Create image element
    let image = document.createElement('img');
    image.src = '../../opgavefiler/img/felix.jpg';
    image.alt = 'Felix katten';
    
    // Create paragraph element for the story text
    let storyText = document.createElement('p');
    storyText.innerHTML = danishStory.text; // Using innerHTML to support <br> tags
    
    // Add all elements to the story container
    myStoryElementStory.appendChild(headline);
    myStoryElementStory.appendChild(image);
    myStoryElementStory.appendChild(storyText);
  })
  .catch((error) => {
    console.error('Error fetching story:', error);
    myStoryElementStory.innerHTML = '<p>Der opstod en fejl ved indlæsning af historien.</p>';
  });



/* Opgave 2 - skriv videre på koden her: */
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStoryTwo");
let myStorydata = null;

// Fetch the story data and display the Danish version
fetch(myDataFileUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    myStorydata = data;
    setUpStory2('DK'); // Load Danish version by default
  })
  .catch((error) => {
    console.error('Error fetching story:', error);
    myStoryElement.innerHTML = '<p>Der opstod en fejl ved indlæsning af historien.</p>';
  });

function setUpStory2(myLanguage) {
  let myStory = null;
  
  switch (myLanguage) {
    case 'DK':
      myStory = myStorydata.DK;
      break;
    case 'FI':
      myStory = myStorydata.FI;
      break;
    case 'SE':
      myStory = myStorydata.SE;
      break;
    case 'UK':
      myStory = myStorydata.UK;
      break;
    default:
      myStory = myStorydata.DK;
      break;
  }
  createStory2(myStory);
}

function createStory2(myStory) {
  myStoryElement.innerHTML = '';
  createButtons2();
  
  let myHeadline = document.createElement('h2');
  myHeadline.innerText = myStory.headline;
  let myImage = document.createElement('img');
  myImage.src = '../../opgavefiler/img/felix.jpg';
  myImage.alt = 'Felix katten';
  let myParagraf = document.createElement('p');
  myParagraf.innerHTML = myStory.text; // Using innerHTML to support <br> tags
  
  myStoryElement.appendChild(myHeadline);
  myStoryElement.appendChild(myImage);
  myStoryElement.appendChild(myParagraf);
}

function createButtons2() {
  let myDkbutton = document.createElement('button');
  myDkbutton.innerText = 'Dansk';
  myDkbutton.addEventListener('click', (e) => {
    setUpStory2("DK");
  });
  
  let mySebutton = document.createElement('button');
  mySebutton.innerText = 'Svenska';
  mySebutton.addEventListener('click', (e) => {
    setUpStory2("SE");
  });
  
  let myFibutton = document.createElement('button');
  myFibutton.innerText = 'Finsk';
  myFibutton.addEventListener('click', (e) => {
    setUpStory2("FI");
  });
  
  let myUkbutton = document.createElement('button');
  myUkbutton.innerText = 'English';
  myUkbutton.addEventListener('click', (e) => {
    setUpStory2("UK");
  });
  
  myStoryElement.appendChild(myDkbutton);
  myStoryElement.appendChild(mySebutton);
  myStoryElement.appendChild(myFibutton);
  myStoryElement.appendChild(myUkbutton);
}





/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

// Fetch user data from JSONPlaceholder API
fetch(userURI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    buildUsers(data);
  })
  .catch((error) => {
    console.error('Error fetching users:', error);
    myUserlistElement.innerHTML = '<p>Der opstod en fejl ved indlæsning af brugere.</p>';
  });

function buildUsers(myUserData) {
  myUserData.map((myUser) => {
    let myUserHTML = `<h2>${myUser.name}</h2>
    <p>Adresse: ${myUser.address.street} ${myUser.address.suite}<br>
    post nummer: ${myUser.address.zipcode}<br>
    by: ${myUser.address.city}</p>`;
    myUserlistElement.innerHTML += myUserHTML;
  });
}


/* Opgave 4*/
// din kode her
const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
const theDogElement = document.getElementById("theDog");

// Fetch a random dog image when the page loads
fetch(dogApiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Display the random dog image
    displayRandomDog(data.message);
  })
  .catch((error) => {
    console.error('Error fetching dog image:', error);
    theDogElement.innerHTML = '<p>Der opstod en fejl ved indlæsning af hunde billede.</p>';
  });

function displayRandomDog(imageUrl) {
  // Clear the element first
  theDogElement.innerHTML = '';
  
  // Create image element for the random dog
  let dogImage = document.createElement('img');
  dogImage.src = imageUrl;
  dogImage.alt = 'Random Dog';
  dogImage.style.maxWidth = '100%';
  dogImage.style.height = 'auto';
  
  // Add image to the container
  theDogElement.appendChild(dogImage);
}
