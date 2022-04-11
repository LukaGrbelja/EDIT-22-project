import Row from "../RowComponent";
import Component from "../../BasicComponent";
import TabsNavigation from "./TabsNavigationComponent";
import TabsContent from "./TabsContentComponent";
import controller from "../../../Controller/Controller";

class InformationPage extends Row {

    constructor() {

        super();

        setTimeout(() => {
            document.getElementsByTagName("button")[0].addEventListener("click", () => {
                controller.initHomeComp();
            });
            },100
        );

        let firstCol = new Component("div");
        firstCol.newClass(["col-xl-3","col-md-2","col-sm-12"]);
        firstCol.inner(`
            <button class="carousel-control-prev" type="button">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
        `);
        this.appendC(firstCol);

        let secondCol = new Component("div");
        secondCol.newClass(["col-xl-6","col-md-8","col-sm-12"]);
        secondCol.HTMLRootElementTag.style.marginTop = "10rem";
        let tabsNavigation = new TabsNavigation();
        secondCol.appendC(tabsNavigation);
        let tabsContent = new TabsContent();
        secondCol.appendC(tabsContent);
        this.appendC(secondCol);

    }

}

module.exports = InformationPage;