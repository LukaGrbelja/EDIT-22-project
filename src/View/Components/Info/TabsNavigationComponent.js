import Component from "../../BasicComponent";

class TabsNavigation extends Component {

    constructor() {

        super("ul");
        this.newClass(["nav","nav-tabs"]);
        this.HTMLRootElementTag.role = "tablist";
        this.HTMLRootElementTag.id = "myTab";
        this.inner(`
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="procesor-tab" data-bs-toggle="tab" data-bs-target="#procesor" type="button" role="tab" aria-controls="procesor" aria-selected="true">Procesor</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="gpu-tab" data-bs-toggle="tab" data-bs-target="#gpu" type="button" role="tab" aria-controls="gpu" aria-selected="false">Grafička kartica</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="hdd-tab" data-bs-toggle="tab" data-bs-target="#hdd" type="button" role="tab" aria-controls="hdd" aria-selected="false">Tvrdi disk</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="ram-tab" data-bs-toggle="tab" data-bs-target="#ram" type="button" role="tab" aria-controls="ram" aria-selected="false">RAM</button>
            </li>
        `);

    }

}

module.exports = TabsNavigation;