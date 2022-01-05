const SUPABASE_URL = 'https://oyvsfhojsmxsetqtdhli.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTI0MjkxMiwiZXhwIjoxOTU2ODE4OTEyfQ._CbEmorU3mUqLWCBYLKqFX5z_mlXgc9dhhLfrkvqpcs';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// FETCH CITY
export async function fetchCity() {
    const response = await client
        .from('cities')
        .select()
        .match({ user_id: client.auth.user().id })
        .single();

    return checkError(response);
}

// CREATE CITY FOR DEFAULT CITY
export async function createCity(city) {
    const response = await client
        .from('cities')
        .insert([city])
        // .match({ user_id: client.auth.user().id })
        .single();

    return checkError(response);
}

// UPDATE NAME
export async function updateName(newName) {
    const response = await client
        .from('cities')
        .update({ name: newName })
        .match({ user_id: client.auth.user().id })
        .single();

    return checkError(response);
}

// UPDATE VILLAGE
export async function updateVillage(newVillage) {
    const response = await client
        .from('cities')
        .update({ village: newVillage })
        .match({ user_id: client.auth.user().id })
        .single();

    return checkError(response);
}

// UPDATE CASTLE
export async function updateCastle(newCastle) {
    const response = await client
        .from('cities')
        .update({ castle: newCastle })
        .match({ user_id: client.auth.user().id })
        .single();

    return checkError(response);
}

// UPDATE WATER
export async function updateWater(newWater) {
    const response = await client
        .from('cities')
        .update({ water: newWater })
        .match({ user_id: client.auth.user().id })
        .single();

    return checkError(response);
}

// UPDATE SLOGANS
export async function updateSlogans(newSlogansArr) {
    const response = await client
        .from('cities')
        .update({ slogans: newSlogansArr })
        .match({ user_id: client.auth.user().id })
        .single();

    return checkError(response);
}

// DELETE CITY
export async function deleteCity() {
    const response = await client
        .from('cities')
        .delete()
        .match({ user_id: client.auth.user().id })
        .single();

    return checkError(response);
}




//TEMPLATE USER FUNCTIONS
export async function getSession() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getSession();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getSession()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '/';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
