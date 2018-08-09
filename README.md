# github-events-api
Completed as a coding exercise for SeeClickFix.Live demo can be found [here](https://whitneyseiler.github.io/github-events-api/).

#How to Run Locally
1. Install dependencies: `-npm install`
4. Run React Webpack: `-npm run react-dev`,
5. Start server: `-npm server`

To start, in your browser navigate to: http://localhost:3000

#Notes for SeeClickFix:
Once the owner and repo name are entered, the dropdown event types list is automatically populated with event type associated with that specific repo. A debounce function was used to prevent the API call from running before user finishes typing repo name. 

Some changes I would have made given more time: 
1. Make the owner and repo names non case sensitive
2. Make the repo input autocomplete based on repos associated with the user entered owner name
3. Add error handling for user entering owner name or repo name that do not exist
4. In the results table, make the actor login name a hyperlink to their GitHub URL
5. Increase padding around title header
6. Clip text overflow in input areas and table
7. Add error handling for user entering owner name or repo name that do not exist
