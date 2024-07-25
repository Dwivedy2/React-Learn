
function render(element, container) {
    // version - 0.1.0
    /*
    const newElement = document.createElement(element.type);
    newElement.setAttribute('href', element.props.href);
    newElement.setAttribute('target', element.props.target);
    newElement.innerHTML = element.value;

    container.appendChild(newElement);
    */

    // version - 0.1.1

    const newElement = document.createElement(element.type);
    for (const key in element.props) {
        if(key === 'children') continue;
        newElement.setAttribute(key, element.props[key]);
    }
    newElement.innerHTML = element.value;
    
    container.appendChild(newElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank',
    },
    value: 'Visit Google'
};

const root = document.getElementById('root');

/*
    @param(which_element, where)
*/
render(reactElement, root);