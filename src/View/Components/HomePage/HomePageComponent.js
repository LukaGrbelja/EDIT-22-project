import Row from "../RowComponent";
import Component from "../../BasicComponent";
import LogInComponent from "./LogInComponent";
import StartComponent from "./StartComponent";

class HomePage extends Row {

    constructor() {

        super();
        
        let firstCol = new Component("div");
        firstCol.newClass(["col-lg-3","col-md-2","col-xs-0"]);
        this.appendC(firstCol);

        let secondCol = new Component("div");
        secondCol.newClass(["col-lg-3","col-md-4","col-sm-6","col-xs-12","p-3"]);
        secondCol.HTMLRootElementTag.style.marginTop = "10rem";
        let logInComponent = new LogInComponent();
        secondCol.appendC(logInComponent);
        this.appendC(secondCol);

        let thirdCol = new Component("div");
        thirdCol.newClass(["col-lg-3","col-md-4","col-sm-6","col-xs-12","p-3"]);
        thirdCol.HTMLRootElementTag.style.marginTop = "10rem";
        let startComponent = new StartComponent();
        thirdCol.appendC(startComponent);
        this.appendC(thirdCol);

    }

}

module.exports = HomePage;