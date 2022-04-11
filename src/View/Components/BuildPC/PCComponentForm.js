import Component from "../../BasicComponent";
import buildController from "./BuildController";

class PCComponentForm extends Component {

    constructor(detail) {

        super("form");
        this.HTMLRootElementTag.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        let header = new Component("h2");
        header.inner(detail.componentName);
        this.appendC(header);

        let labelOne = new Component("label");
        labelOne.newClass(["form-label"]);
        labelOne.inner(detail.firstInput.name);
        this.appendC(labelOne);

        let selectOne = new Component("select");
        selectOne.newClass(["form-select"]);

        detail.firstInput.options.forEach(element => {
            let option = new Component("option");
            option.inner(element);
            selectOne.appendC(option);
        });

        this.appendC(selectOne);

        let labelTwo = new Component("label");
        labelTwo.newClass(["form-label"]);
        labelTwo.inner(detail.secondInput.name);
        this.appendC(labelTwo);

        let selectTwo = new Component("select");
        selectTwo.newClass(["form-select"]);

        detail.secondInput.options.forEach(element => {
            let option = new Component("option");
            option.inner(element);
            selectTwo.appendC(option);
        });

        this.appendC(selectTwo);
        this.appendC(new Component("hr"));

        let submit = new Component("button");
        submit.newClass(["btn","btn-primary","float-end"]);
        submit.inner("Submit");
        submit.HTMLRootElementTag.type = "submit";
        submit.HTMLRootElementTag.addEventListener("click", () => {
            submit.newClass(["disabled"]);
            let params = {
                firstParam: selectOne.HTMLRootElementTag.value,
                secondParam: selectTwo.HTMLRootElementTag.value
            }
            buildController.choose(detail,params);
        });
        this.appendC(submit);

    }

}

module.exports = PCComponentForm;