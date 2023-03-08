### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

The main difference between them is that a PureComponent implements a shouldComponentUpdate method with a shallow
comparison of props and state instead of a `Component` that will need to implement if it's necessary to control the
rendering.

*Example:* Because of the comparison is only a shallow comparison this could cause a problem if the update is in a
deeply
nested object causing an unexpected behaviour.

### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

Because the context could change but if the component has implemented the `ShouldComponentUpdate` this could cause that
the nested component is not aware of the change in the context because it was prevented to re-render.

### 3. Describe 3 ways to pass information from a component to its PARENT.

Callback: Passing a method from the parent to the child for being called in the child and return a value to the parent.

Using React Context: We can update the value in the child and share the change with the parent.

Using Redux: Similar to React Context but with the Redux library

### 4. Give 2 ways to prevent components from re-rendering.

useMemo: This allows to memoize the result of expensive computations to avoid unnecessary re-renderings.

React.memo: This allows to memoize functional component to avoid unnecessary re-renders when the parent changes
frequently, so it's not necessary to update the child.

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

Because it's necessary to create component that wraps child elements without adding and additional DOM element.

*Example:* This could break the app if we have a list and the app relies on the key although this is not render in the
dom to identify them.

### 6. Give 3 examples of the HOC pattern.

withRouter: From React Router

isAuth: To redirect the users to another page

```javascript
function isAuth(WrappedComponent) {
    return function AuthWrapper(props) {
        const isAuthenticated = checkIfIsAuthenticated();
        if (!isAuthenticated) {
            return <Redirect to="/login"/>;
        }
        return <WrappedComponent {...props} />;
    };
}
```

withTheme: To provide theme props to the component

```javascript
const withTheme = (WrappedComponent, theme) => {
    return class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} theme={theme}/>;
        }
    };
};

export default withTheme;
```

### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

Promises: provide the `catch` method to handle the errors

Async/await: we do that by try/catch

Callbacks: we return the errors as argument

### 8. How many arguments does setState take and why is it async.

setState takes two arguments, the first one is the new value and the second is a callback to be called when the state is
updated

It is async because this can handle multiple updates and all of them be updated at the same time performing only one
rerender.

### 9. List the steps needed to migrate a Class to Function Component.

Remove the class and use only a function
Migrate the state variables to use useState hooks
Migrate methods to regular functions inside the component
Replace lifecycles methods like `componentDidMount` with appropriate hooks like `useEffect`

### 10. List a few ways styles can be used with components.

Inline Styles: Use styles directly in the style prop.

CSS classes: Import a CSS file and set the className on the related elements

CSS in JS libraries: We can use something like StyledComponents to set the styles in the JS of each component

### 11. How to render an HTML string coming from the server.

We can use `dangerouslySetInnerHTML` but it's important to sanitize the html to avoid security issues
