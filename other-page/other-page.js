import { 
    checkAuth, 
    logout,
    fetchCity,
    createCity,
    updateName,
    updateVillage,
    updateCastle,
    updateWater
} from '../fetch-utils.js';


//DOM ELEMENTS
const logoutButton = document.getElementById('logout');

const villageDropdown = document.querySelector('#village-dropdown');
const castleDropdown = document.querySelector('#castle-dropdown');
const waterDropdown = document.querySelector('#water-dropdown');

const villageImageContainer = document.querySelector('#village-container');
const castleImageContainer = document.querySelector('#castle-container');
const waterImageContainer = document.querySelector('#water-container');

const sloganInput = document.querySelector('#slogan-input');
// const sloganButton = document.querySelector('#slogan-button');
const sloganDisplay = document.querySelector('#slogan-display');
const sloganForm = document.querySelector('#slogan-form');

const cityNameInput = document.querySelector('#city-name-input');
const cityNameButton = document.querySelector('#city-name-button');
const cityNameDisplay = document.querySelector('#city-name-display');

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
        const defaultCity = {
            name: 'Portland',
            village: 'rich',
            castle: 'asian',
            water: 'bathhouse',
            slogans: []
        };
        city = await createCity(defaultCity);
    }

    //     - Display city - name, images, slogans
    displayCity(city);


});

cityNameButton.addEventListener('click', async()=>{
    // -- Grabs the user input name from the value
    const newName = cityNameInput.value;

    // -- Updates the name for the user in supabase
    const updatedCity = await updateName(newName);

    // -- Updates the Dom with fetched name from supabase
    displayCity(updatedCity);

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


sloganForm.addEventListener('submit', (e)=> {
    e.preventDefault();
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