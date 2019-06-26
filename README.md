
# Mini Project

The goals of this mini project is to **create a Star Wars Fans Application** with React and consolidate some of the foundational concepts you've seen so far. 


## Exercise

- [ ] Use API from  https://swapi.co/
- [ ] Create your app using `create-react-app`
- [ ] There should be a page that displays a list of character in the following path `/` or `/person`
- [ ] There should be a page that displays a single photo in the following path `/person/:id`
- [ ] When the user clicks on a photo in `/person` the app should take the user to `/person/:id`

### Notes

Use `react-router` v4 for the routing:

```
npm install --save react-router-dom
```

## Core learning objectives to be consolidated 

- Componentization, folder structure and thinking in React
  - Think about the structure of your application, do the files mirror your component tree?
  - What about applying a pattern that we saw earlier to separate UI and logic?
- Data fetching
  - Where should we do our data fetching in a React App?
  - Remember to look at the [fetch docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) or use Axios
- Routing
  - Remember, in react we need to install [react-router](https://reacttraining.com/react-router/)
  - You'll need to implement at least 2 routes, where should you declare these routes?

## Bonus

- [ ] Add some style with [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/) or [http://material-ui.com/](http://material-ui.com/)
- [ ] You can specify a NOT_FOUND route in the Root of your app. (`<Route component={NotFound} />`)