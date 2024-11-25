# React + Vite

Methodology:
    We have given you a nearly completed project, but we are still missing some key components to help our webpage provide information about movies.

    When you clone the repository you need to be able to load the project and ensure the dependencies are installed.

    When scaffolding a new react project you would use the terminal to

STEP 1: Install dependencies

    Navigate to the main project in your terminal "CineSearch_Demo".

    npm i

    the command:
    npm run dev
    will start a localhost on port 5174 for you

    Shortcut: o + enter to open the browser to this port!

Step 2: Create a new component MovieListHeading.jsx

    This component will highlight the sections of videos to the user.

    1. Import react as a dependency;

    2. Create a function that returns valid html
        Many sections will use this heading so we will create a parameter that accepts data from a property called "heading".

        Reminder: Each element must be closed properly before returning!

    3. Export the function to be used in App.jsx

Step 3: Implement new component

    1. Import the new component
    
    2. Determine where a listing header is needed and set the heading as a property.

Step 4: Create MovieDetails.jsx

    This component will be responsible for displaying information about movies to the user when they show interest.

    1. import React with useEffect and useState from react and
        useParams and useNavigate from react-router-dom

    2. instantiate variables
        useParams() to obtain the id of this movie
        useNavigate() for creating a back button within content
        setMovie through useState() to obtain data for this movie
    
    3. useEffect() to call an asynchronous function upon rendering of the page. gather the specific data from the

    4. Build a container to hold the information for the movie 



Step 5: Link to new route
    1. Within MovieList.jsx encapsulate the image with a Link
        that includes a common prefix "/movie/" and a unique identifier at the end.
 
Step 6: Handle new route
    Create a new Route in App.jsx to handle the prefix/identifier that will utilize the new component.

