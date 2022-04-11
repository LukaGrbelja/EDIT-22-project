let PCBase = {
    CPU: "",
    GPU: "",
    HDD: "",
    RAM: "",
}

let base = {
    CPU: {
        componentName: "CPU",
        firstInput: {
            name: "Brend",
            options: ["Intel","AMD"]
        },
        secondInput: {
            name: "Generacija",
            options: ["3","5","7","9"]
        },
        apiUrl: "https://top-computer-parts.p.rapidapi.com/top/500/cpu",
        filter: function(elementData,params) {
            if (elementData[2] == params.firstParam) {
                if (elementData[3][6] == params.secondParam && elementData[3][6] != "X") {
                    return true;
                }
                else if(elementData[3][6] == "T" && elementData[3][7] == "R" && params.secondParam == "9") {
                    return true;
                }
                else if(elementData[3][6] == "E" && params.secondParam == "3") {
                    return true;
                }
                else if(elementData[3][5] == "W" && params.secondParam == "7") {
                    return true;
                }
                else if(elementData[3][5] == "X" && params.secondParam == "3") {
                    return true;
                }
                else if(elementData[3][5] == "E" && params.secondParam == "3") {
                    return true;
                }
                else if(elementData[3][5] == "L" && params.secondParam == "3") {
                    return true;
                }
                else if(elementData[3][5] == "2" && params.secondParam == "3") {
                    return true;
                }
                else if(elementData[3][0] == "P" && elementData[3][1] == "L" && params.secondParam == "3") {
                    return true;
                }
                else if(elementData[3][0] == "P" && elementData[3][1] == "H" && params.secondParam == "3") {
                    return true;
                }
                else if(elementData[3][0] == "A" && params.secondParam == "3") {
                    return true;
                }
                else if(elementData[3][0] == "F" && params.secondParam == "3") {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    },
    HDD: {
        componentName: "HDD",
        firstInput: {
            name: "Brend",
            options: ["WD","HGST","Seagate","Toshiba","Hitachi","Samsung"]
        },
        secondInput: {
            name: "Kapacitet (TB)",
            options: ["12","10","8","6","5","4","3","2.5","2","1.5","1"]
        },
        apiUrl: "https://top-computer-parts.p.rapidapi.com/hdd",
        filter: function(elementData,params) {
            if (elementData[2] == params.firstParam) {
                if(elementData[3].indexOf("TB") != -1) {
                    let element = elementData[3].split("TB");
                    element = element[0].split(" ");
                    element = element[element.length - 1];
                    if (element == params.secondParam) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    },
    RAM: {
        componentName: "RAM",
        firstInput: {
            name: "Brend",
            options: ["G.SKILL","Crucial","Corsair","HyperX"]
        },
        secondInput: {
            name: "Nema parametara",
            options: []
        },
        apiUrl: "https://top-computer-parts.p.rapidapi.com/ram",
        filter: function(elementData,params) {
            if (elementData[2] == params.firstParam) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    GPU: {
        componentName: "GPU",
        firstInput: {
            name: "Brend",
            options: ["Nvidia","Zotac","Asus","MSI","Gigabyte","EVGA","AMD"]
        },
        secondInput: {
            name: "Nema parametara",
            options: []
        },
        apiUrl: "https://top-computer-parts.p.rapidapi.com/gpu",
        filter: function(elementData,params) {
            if (elementData[2] == params.firstParam) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

module.exports = { PCBase, base };