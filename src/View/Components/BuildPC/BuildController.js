import { PCBase, base } from "./BuildModel";

class BuildController extends EventTarget {

    constructor() {

        super();

    }

    start() {

        Object.keys(PCBase).forEach(key => {
            PCBase[key] = "";
        });

        this.dispatchEvent(
            new CustomEvent("start")
        );
        
        this.search();

    }

    search() {

        let currentComponent = "";

        const array = Object.keys(PCBase);
        for (let index = 0; index < array.length; index++) {

            const emptyCheck = PCBase[array[index]];
            if (emptyCheck == "") {
                
                currentComponent = array[index];
                break;

            }
            
        }

        const baseArray = Object.keys(base);
        for (let index = 0; index < baseArray.length; index++) {

            const matchCheck = baseArray[index];
            if (matchCheck == currentComponent) {
                
                this.dispatchEvent(
                    new CustomEvent("search",{
                        detail: base[matchCheck]
                    })
                );

            }
            
        }

    
    }

    choose(detail,params) {

        this.dispatchEvent(
            new CustomEvent("choose",{
                detail: {
                    detail: detail,
                    params: params
                }
            })
        );

    }

    set(detail) {

        PCBase[detail.componentName] = detail;
        this.search();

    }

}

let buildController = new BuildController();
module.exports = buildController;