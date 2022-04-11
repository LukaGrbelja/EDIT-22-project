import Component from "../../BasicComponent";
import controller from "../../../Controller/Controller";

class StartComponent extends Component {

    constructor() {

        super("div");
        this.newClass(["card"]);

        setTimeout(() => {
            document.getElementsByTagName("a")[2].addEventListener("click", () => {
                controller.initInfoComp();
            });
            document.getElementsByTagName("a")[1].addEventListener("click", () => {
                controller.initBuildComp();
            })
            ,100
        });

        this.inner(`
            <div class="card-body">
                <h5 class="card-title">Zapocnite</h5>
                <p class="card-text">Zelite sloziti PC?</p>
                <a href="#build" class="btn btn-primary">Krenite</a>
                <hr />
                <p class="card-text">Neznate puno o PC-u</p>
                <a href="#informacije" class="btn btn-primary">Informirajte se</a>
            </div>
        `);

    }

}

module.exports = StartComponent;