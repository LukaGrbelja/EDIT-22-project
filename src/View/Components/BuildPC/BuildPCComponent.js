import Row from "../RowComponent";
import Component from "../../BasicComponent";
import StartButton from "./StartButtonComponent";
import PCComponentForm from "./PCComponentForm";
import PCComponentList from "./PCComponentsList";
import buildController from "./BuildController";
import controller from "../../../Controller/Controller";

class BuildPC extends Row {

    constructor() {

        super();
        
        this.newClass(["p-3"]);

        this.startButtonInit();

        buildController.addEventListener("start", () => {
            this.startButtonInit();
        });

        buildController.addEventListener("search", (event) => {
            this.componentFormInit(event.detail);
        });

        buildController.addEventListener("choose", (event) => {
            this.componentListInit(event.detail);
        });

    }

    startButtonInit() {

        this.inner("");

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

        let col = new Component("div");
        col.newClass(["col-12"]);
        let startButton = new StartButton();
        col.appendC(startButton);
        col.HTMLRootElementTag.style.marginTop = "10rem";
        this.appendC(col);

    }

    componentFormInit(detail) {

        let col = new Component("div");
        col.newClass(["col-md-4","col-sm-6","col-xs-12","bg-white","p-3"]);
        let pccomponentForm = new PCComponentForm(detail);
        col.appendC(pccomponentForm);
        col.HTMLRootElementTag.style.marginTop = "10rem";
        this.appendC(col);

    }

    componentListInit(detail) {

        let col = new Component("div");
        col.newClass(["col-md-8","col-sm-6","col-xs-12","bg-white","p-3"]);
        let pccomponentList = new PCComponentList(detail.detail,detail.params);
        col.appendC(pccomponentList);
        col.HTMLRootElementTag.style.marginTop = "10rem";
        this.appendC(col);

    }

}

module.exports = BuildPC;