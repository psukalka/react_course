## Game App

- Information flows from one component to another with `props` 
- React components can have state by setting `this.state` in their constructor
- Lifting up state: Storing state information at parent level if it has to be communicated frequently between the children. This would give control on what to do if combination of states is to be taken into consideration. `props` is used by children to react to state passed by parent
- **Immutability** : Several benefits like easy to detect changes, complex features become simple, ..
- Function components: If a class has only render() method and no state of its own, it can be converted to `function(props)` taking props as input.

