import model from "../Model/Model";

class Controller extends EventTarget {

    constructor() {

        super();

    }

    initInfoComp() {

        model.current = "informationPage";
        this.dispatchEvent(
            new CustomEvent("initInfoPage")
        );

    }

    initHomeComp() {

        model.current = "homePage";
        this.dispatchEvent(
            new CustomEvent("initHomePage")
        );

    }

    initBuildComp() {

        model.current = "buildPage";
        this.dispatchEvent(
            new CustomEvent("initBuildPage")
        );

    }

}
let controller = new Controller();
module.exports = controller;