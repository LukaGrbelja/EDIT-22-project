import Component from "../../BasicComponent";

class LogInComponent extends Component {

    constructor() {

        super("div");
        this.newClass(["card"]);
        setTimeout(() => {
            document.getElementsByTagName("button")[0].addEventListener("click", () => {
                document.getElementsByTagName("h5")[0].innerHTML = "Dobrodošli";
                document.getElementsByTagName("form")[0].innerHTML = document.getElementById("inputUserName").value;
            })
            ,100
        });
        this.inner(`
            <div class="card-body">
                <h5 class="card-title">Prijavi se ili registriraj</h5>
                    <form>
                        <label for="inputUserName" class="form-label">Korisničko ime</label>
                        <input required type="text" class="form-control" id="inputUserName">
                        <label for="inputPassword" class="form-label">Lozinka</label>
                        <input required type="password" class="form-control" id="inputPassword">
                        <button type="submit" class="btn btn-primary">Prijavi se</button>
                    </form>
                <hr />
                <a href="https://github.com/LukaGrbelja/EDIT-22-project">Github</a>
            </div>
        `);

    }

}

module.exports = LogInComponent;