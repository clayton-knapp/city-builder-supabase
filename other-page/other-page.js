import { checkAuth, logout } from '../fetch-utils.js';


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

cityNameButton.addEventListener('click', ()=>{
});

villageDropdown.addEventListener('change', ()=>{
});

castleDropdown.addEventListener('change', ()=>{
});

waterDropdown.addEventListener('change', ()=>{
});


sloganForm.addEventListener('submit', (e)=> {
    e.preventDefault();
});



// FUNCTIONS

function displaySlogans() {
}