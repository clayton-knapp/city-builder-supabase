## The Golden Rule: 

π¦Έ π¦ΈββοΈ `Stop starting and start finishing.` π

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)



## PLAN

### EVENT Listeners

- On Load
    - Checks to see if user has a city - fetchCity
    - If no city - create a default city for the user
    - Display city - name, images, slogans

-Submit Name Button
    -- Grabs the user input name from the value
    -- Updates the name for the user in supabase
    -- Updates the Dom with fetched name from supabase

-Village Dropdown
    - On change of dropdown update supabase with selection
    - Display update in DOM

-Castle Dropdown
    - On change of dropdown update supabase with selection
    - Display update in DOM

-Pool Dropdown
    - On change of dropdown update supabase with selection
    - Display update in DOM

-Submit Slogan Button
    - Fetch stored Citys Slogans Array
    - Push new slogan to the Slogans Array
    - Update city in supabase with mutated array
    - Display returned slogans in the DOM with for loop

-- Delete Button
    -Deletes the signed in users city - calls fetch function that uses delete method
    - Create a default city for the user
    - Display the default city

## FUNCTIONS
- displayCity(city)
    - takes in the name/village/castle/water/slogans and displays in Dom
    - set textContent for city display
    - set background image style url or img src of 3 images
    - displays slogans using for loop