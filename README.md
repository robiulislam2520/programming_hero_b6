# Module 45 - Learn react core concept

## 45.2 - JSX

    JSx means - Javascript XML

When we work HTMl in JS, it's called JSX. which template use React framework.

    function App() {
        return (
            <>
                <h1>Hello World</h1>
                <p>This a paragraph</p>
            </>
        );
    }

এটা কে JSX বলে।

If we want to add some style in JSX use style, but this is dynamic so you need dynamic call. So, we will use {} (second bracket) for it. All of this bracket call dynamically, bcz it's dynamic.

        <h1 style={backgroundColor: red;}>hello world</h1>

It's have some same style, you can declare a object, here you can store some style and send those style through style, like

        const divStyle = {
            color: 'red',
            borderRadius: '5px 5px',
            ...etc
        }
         <h1 style={divStyle}>hello world</h1>

This is beauty of react framework. So, now we will start.
