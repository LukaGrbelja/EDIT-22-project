class Component {

    constructor(HTMLRootElementTag) {

        this.HTMLRootElementTag = document.createElement(HTMLRootElementTag);

    }

    appendC(newElement) {

        this.HTMLRootElementTag.appendChild(newElement.HTMLRootElementTag);

    }

    inner(string) {

        this.HTMLRootElementTag.innerHTML = string;

    }

    newClass(array) {

        array.forEach(element => {
            this.HTMLRootElementTag.classList.add(element);
        });

    }

}

module.exports = Component;