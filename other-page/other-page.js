import { 
    checkAuth, 
    logout,
    fetchCity,
    createCity,
    updateName,
    updateVillage,
    updateCastle,
    updateWater,
    updateSlogans,
    deleteCity
} from '../fetch-utils.js';


//DOM ELEMENTS
const logoutButton = document.getElementById('logout');

const villageDropdown = document.querySelector('#village-dropdown');
const castleDropdown = document.querySelector('#castle-dropdown');
const waterDropdown = document.querySelector('#water-dropdown');

const villageImageContainer = document.querySelector('#village-container');
const castleImageContainer = document.querySelector('#castle-container');
const waterImageContainer = document.querySelector('#water-container');

const sloganDisplay = document.querySelector('#slogan-display');
const sloganForm = document.querySelector('#slogan-form');

const cityNameForm = document.querySelector('#name-form');
const cityNameDisplay = document.querySelector('#city-name-display');

const deleteButton = document.querySelector('#delete-button');

const youtubeForm = document.querySelector('#youtube-form');


checkAuth();

// EVENT LISTENERS
logoutButton.addEventListener('click', () => {
    logout();
});

// - On Load
window.addEventListener('load', async()=> {
    //     - Checks to see if user has a city - fetchCity
    let city = await fetchCity();

    //     - If no city - create a default city for the user
    if (!city) {
        //passing it an empty object will user supabase defined defaults
        const defaultCity = {}; //an empty object
        city = await createCity(defaultCity);
    }

    //     - Display city - name, images, slogans
    displayCity(city);


});

cityNameForm.addEventListener('submit', async(e)=>{
    e.preventDefault();

    // -- Grabs the user input name from the value
    const data = new FormData(cityNameForm);
    const newName = data.get('name-input');

    // -- Updates the name for the user in supabase
    const updatedCity = await updateName(newName);

    // -- Updates the Dom with fetched name from supabase
    displayCity(updatedCity);

    cityNameForm.reset();

});

villageDropdown.addEventListener('change', async()=>{
    // - On change of dropdown update supabase with selection
    const newVillage = villageDropdown.value;
    const updatedCity = await updateVillage(newVillage);

    // - Display update in DOM
    displayCity(updatedCity);
});

castleDropdown.addEventListener('change', async()=>{
    // - On change of dropdown update supabase with selection
    const newCastle = castleDropdown.value;
    const updatedCity = await updateCastle(newCastle);

    // - Display update in DOM
    displayCity(updatedCity);    
});

waterDropdown.addEventListener('change', async()=>{
    // - On change of dropdown update supabase with selection
    const newWater = waterDropdown.value;
    const updatedCity = await updateWater(newWater);

    // - Display update in DOM
    displayCity(updatedCity);        
});


sloganForm.addEventListener('submit', async(e)=> {
    e.preventDefault();
    // Get the new user Slogan
    const data = new FormData(sloganForm);
    const newSlogan = data.get('slogan-input');
    // console.log(newSlogan);

    // - Fetch stored City which has Slogans Array
    const city = await fetchCity();
    // console.log(city.slogans);

    // - Push new slogan to the Slogans Array
    city.slogans.push(newSlogan);

    // - Update city in supabase with mutated array
    const newCity = await updateSlogans(city.slogans);

    // - Display returned slogans in the DOM with for loop
    displayCity(newCity);

    sloganForm.reset();
});

//DELETE BUTTON
deleteButton.addEventListener('click', async()=> {
    // -Deletes the signed in users city - calls fetch function that uses delete method
    const city = await deleteCity();
    // console.log(city);

    // - Create a default city for the user
    const newCity = await createCity({});

    // - Display the default city
    displayCity(newCity);


});

youtubeForm.addEventListener('submit', async(e)=>{
    e.preventDefault();

    // -- Grabs the user input name from the value
    const data = new FormData(youtubeForm);
    const youtubeLink = data.get('youtube-input');

    // -- Updates the youtube link in supabase


    // -- Updates the Dom

    youtubeForm.reset();

});



// FUNCTIONS

function displayCity(city) {
    // - takes in the name/village/castle/water/slogans and displays in Dom
    // - set textContent for city display
    cityNameDisplay.textContent = city.name;

    // - set background image style url or img src of 3 images
    villageImageContainer.style.backgroundImage = `url(../assets/village-${city.village}.jpeg)`;
    castleImageContainer.style.backgroundImage = `url(../assets/castle-${city.castle}.jpeg)`;
    waterImageContainer.style.backgroundImage = `url(../assets/water-${city.water}.jpeg)`;
    
    // - displays slogans using for loop
    sloganDisplay.textContent = '';
    for (let eachSlogan of city.slogans) {
        const p = document.createElement('p');
        p.textContent = eachSlogan;
        p.classList.add('slogans');
        sloganDisplay.append(p);
    }


}