## Component
- Typically implemented as JS class that has some state and render() method

```sh
class Tweet {
	state = {};
	render() {

	}
}
```

- **state** : Data that you want to display when component is rendered
- **render** : 
  - responsible for describing what UI should look like
  - Its output is `React Element` which is a simple plain java script object that maps with `DOM Element` in memory
  - `React Element` can also be referred to as virtual DOM and is cheap to create
  - When we change state of a component, we get a new React Element . Only the part that is updated is synced with actual DOM 
  - Thus, changing state of a component will automatically update the DOM to match that state. Thus the name : `React` --> `Reacts to state changes
`
--------------------------------
- `Component` is the built-in class of React
- `render()` : returns a markup called JSX (JS XML)
- to make this code work, it has to pass through [Babel](https://babeljs.io/repl) (modern JS compiler). It converts JSX to JS that browsers can understand

- Even though, we don't use `React` in our code, it needs to be imported because it will be used in Babel-converted code.
- `ReactDOM` is used to render in actual DOM

--------------------------------

- JSX should be inside one parent div or tag. Otherwise babel won't know how to compile it
- Using Arrow function `=>` is simpler than binding each function in constructor
- Always use `setState()` method to update state. Direct update might not work as objects are immutable in React
- If you need to pass event arguments to a function do so by arrow function syntax:
```sh
onClick={() => this.handleIncrement(product)}
```

--------------------------------
- Component that owns the data should be the one modifying it

