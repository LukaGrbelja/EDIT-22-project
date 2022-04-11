import Component from "../../BasicComponent";
import buildController from "./BuildController";

class PCComponentList extends Component {

    constructor(detail,params) {

        super("div");
        this.HTMLRootElementTag.style.whiteSpace = "nowrap";
        this.HTMLRootElementTag.style.overflow = "auto";

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'top-computer-parts.p.rapidapi.com',
                'X-RapidAPI-Key': '7a8d5a0befmshbb2a2a67720020ep177018jsn7a06eeb87e91'
            }
        };
        
        fetch(detail.apiUrl, options)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                element = element.split(",");
                if (detail.filter(element,params)){
                    let newComp = new Component("div");
                    newComp.HTMLRootElementTag.style.display = "inline-block";
                    newComp.HTMLRootElementTag.style.float = "none";
                    newComp.HTMLRootElementTag.style.height = "300px";
                    newComp.inner(`
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Brand: ${element[2]}</li>
                                <li class="list-group-item">Model: ${element[3]}</li>
                            </ul>
                            <div class="card-footer">
                                <a href="${element[7]}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    `);
                    newComp.HTMLRootElementTag.addEventListener("click", () => {
                        buildController.set(detail);
                    });
                    this.appendC(newComp);
                }
            });
        }).catch(err => console.error(err));
    }

}

module.exports = PCComponentList;