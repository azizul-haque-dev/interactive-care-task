# Why Use `styleType` for Style Props?

Using a `styleType` object to manage style keys in your components offers several benefits:

1. **Consistency and Safety**  
   Defining style keys like `"keyboard"` or `"question"` in one place (`styleType`) helps avoid typos and ensures consistent usage throughout your app.

2. **Autocomplete and IntelliSense**  
   By exporting and importing `Button.style`, code editors can suggest valid style options, making development faster and less error-prone.

3. **Centralized Style Management**  
   Having a single source of truth for style keys means you can easily add, remove, or rename styles without searching through all your code.

4. **Easier Refactoring**  
   If you want to change a style key’s value (e.g., `"keyboard"` to `"keyboard_style"`), updating it once in `styleType` applies the change everywhere automatically.



---

### Example Usage

```js
const styleType = {
  KEYBOARD: "keyboard",
  QUESTION: "question"
};

function Button({ style = styleType.KEYBOARD }) {
  const className = `button_${style}`;
  // ...
}
Button.style = styleType;



// use like this
<Button style={Button.style.KEYBOARD}>A</Button>

``` 
