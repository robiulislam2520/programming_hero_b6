# Module 47 - How to react work..

## 47.1.1 What is NPM and NPX?

- npm (node package manager)
- npx (node package execute)

Npm run all package for node and need a website, here have huge of packages which created by others man. So, you need to know what it's it. If you need some new file or new framework or some new package you need npm install there. When you run this code on your terminal it's install it.

        npm install axios

you can use shorthand of install some dependencies

        npm i axios

It will be add yor package.json file as a dependencies.

**Now Npx**
Npx means node package execute. It will help you run cli(command line interface) code. It easy to use and you call it easily.

NPX ar age, amra npm use kortam akta create-react-app use korar jonnu, atai akta problem chilo, If create-react-app cli will be update we are not use it, so it will be painful. Then come to NPX, which all time use updated version those. So, we will use npx

        npx create-react-app file_name

## 47.1.2 What is create-react-app?

According to create-react-app website,
they said, create-react-app is a **_Set up a modern web app by running one command._**
It's means that we will use one command but running a huge production. This is a best CLI command all react developer.

## 47.2 What is JSX?

- Jsx is Javascript XML

We are use javascript in html file and run js function or many others method.

JSX is the very helpful for us, bcz we are write in HTMl but it gone JS. Babel work behind the scene.

React all items create as a javascript document, so it nothing for you to convert it.

**HTML**

        function Component(){
            return(
                <>
                    <h1 className="greeting">
                        Hello, world!
                    </h1>
                    <div className="div" name={name} age='32'>
                        <p>Paragraph</p>
                    </div>
                </>
            )
    }

**Convert it react**

        function Components() {
            return
            /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
                className: "greeting"
            }, "Hello, world!"),
            /*#__PURE__*/React.createElement("div", {
                className: "div",
                name: name,
                age: "32"
            },
            /*#__PURE__*/React.createElement("p", null, "Paragraph")));
        }

So, JSX is very beautiful and easy to understand.
