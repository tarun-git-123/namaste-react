const heading = React.createElement(
    "h1",
    {
        id:'heading'
    },
    "hello World"
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)