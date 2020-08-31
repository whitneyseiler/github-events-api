# github-events-api
Completed as a coding exercise. Live demo can be found [here](https://whitneyseiler.github.io/github-events-api/).

# How to Run Locally
1. Install dependencies: `-npm install`
4. Run React Webpack: `-npm run react-dev`,
5. Start server: `-npm server`

To start, in your browser navigate to: http://localhost:3000

# Notes:
Once the owner and repo name are entered, the dropdown event types list is automatically populated with event type associated with that specific repo. A debounce function was used to prevent the API call from running before user finishes typing repo name. 

# Changes I would have made given more time: 
- [ ] make the actor login in results table a hyperlink to their GitHub URL
- [ ] non case sensitive owner and repo name inputs
- [ ] autocomplete repo name input based on repos associated with the user entered owner name
- [ ] error handling for user entering owner name or repo name that do not exist
- [ ] padding around title header
- [ ] text overflow handling in input areas, event type dropdown and table data
