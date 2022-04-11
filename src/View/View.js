import Component from "./BasicComponent";
import HomePage from "./Components/HomePage/HomePageComponent";
import InformationPage from "./Components/Info/InformationComponent";
import BuildPC from "./Components/BuildPC/BuildPCComponent";
import controller from "../Controller/Controller";
import model from "../Model/Model";


class View extends Component {

    constructor() {

        super("div");

        this.newClass(["container-fluid","min-vh-100"]);

        this.homePageInit();

        controller.addEventListener("initHomePage", () => {
            this.homePageInit();
        });

        controller.addEventListener("initInfoPage", () => {
            this.informationPageInit();
        });

        controller.addEventListener("initBuildPage", () => {
            this.buildApcInit();
        });

    }

    homePageInit() {
        
        this.inner("");
        let homePage = new HomePage();
        this.appendC(homePage);
        console.log(model);

    }

    informationPageInit() {

        this.inner("");
        let informationPage = new InformationPage();
        this.appendC(informationPage);
        console.log(model);

    }

    buildApcInit() {

        this.inner("");
        let buldApc = new BuildPC();
        this.appendC(buldApc);
        console.log(model);

    }

}

module.exports = View;