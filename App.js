/*
 * <div id="parent">
 *    <div id="child">
 *        <h1>I am H1 Tag</h1>
 *        <h2>I am H1 Tag</h2>
 *    <div>
 *    <div id="child">
 *        <h1>I am H1 Tag</h1>
 *        <h2>I am H1 Tag</h2>
 *    <div>
 * <div>
 */

const main = React.createElement('div',
    {
        id:"parent",
    },
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",
            {

            },
            "I am H1 Tag"
        ),React.createElement("h2",
            {

            },
            "I am H2 Tag"
        )]

    ),
    React.createElement("div",{id:"child"},
        [React.createElement("h1",
            {

            },
            "I am H1 Tag"
        ),React.createElement("h2",
            {

            },
            "I am H2 Tag"
        )]

    )]
);

//JSX
console.log(main)
const root = ReactDOM.createRoot(document.getElementById('root'));
const adminRoot = ReactDOM.createRoot(document.getElementById('admin-root'));
root.render(main);  

adminRoot.render(main)