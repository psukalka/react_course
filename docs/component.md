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
