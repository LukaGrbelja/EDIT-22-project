import Component from "../../BasicComponent";
import buildController from "./BuildController";

class StartButton extends Component {

    constructor() {

        super("button");
        this.newClass(["btn","btn-lg","btn-primary","position-absolute","start-50","translate-middle"]);
        this.inner("Započni");
        this.HTMLRootElementTag.addEventListener("click", () => {
            buildController.start();
        });

    }

}

module.exports = StartButton;