import Component from "../../BasicComponent";

class TabsContent extends Component {

    constructor() {

        super("div");
        this.newClass(["tab-content"]);
        this.HTMLRootElementTag.id = "myTabContent";
        this.HTMLRootElementTag.style.backgroundColor = "white";
        this.inner(`
            <div class="tab-pane fade show active p-3" id="procesor" role="tabpanel" aria-labelledby="procesor-tab">
                <p>Procesor (engl. central processing unit - CPU, hrv. "središnja jedinica za obradbu", obradnik), glavni je dio računala koji vođen zadanim programskim naredbama izvodi osnovne radnje nad podacima. Središnji procesor nadzire odnosno izvršava glavni program i tipično upravlja i svim ostalim dijelovima računala. Danas (2020.) središnja jedinica za obradbu načinjena je od tranzistora, tipično u CMOS izvedbi, planarnom tehnologijom na siliciju ili drugom poluvodičkom monokristalu. Visoko integrirani krugovi koji sadrže sve funkcije središnje jedinice za obradbu nazivaju se mikroprocesori.</p>
            </div>
            <div class="tab-pane fade p-3" id="gpu" role="tabpanel" aria-labelledby="gpu-tab">
                <p>Grafička kartica je podsustav u računalu koji služi za prikazivanje slike na zaslonu monitora. Ona je zaslužna za ono što vidimo na zaslonu, bio to tekst, program ili igra. No, kako bi grafička kartica funkcionirala potrebno je instalirati odgovarajući upravljački program (eng. driver) koji dolazi na mediju za pripadnu grafičku karticu (obično na CD-u), ali se može naći i na Internetu. Grafička kartica može biti integrirana na matičnoj ploči ili dolazi kao zaseban dio. Povezana je računalom putem sabirnice. Svaka kartica na sebi ima procesor, solidnu količinu memorije važnu za igranje te još neke elemente. Grafička kartica može imati jedan ili više izlaza. Većina novih grafičkih kartica ima 3 izlaza.</p>
            </div>
            <div class="tab-pane fade p-3" id="hdd" role="tabpanel" aria-labelledby="hdd-tab">
                <p>Tvrdi disk (engl. Hard Disk, prevodi se i kao kruti disk ili čvrsti disk) sekundarna je jedinica za pohranu podataka u računalima. Tvrdi diskovi su se pojavili na tehnološkoj sceni 1956. godine, kao izum tvrtke IBM, i nakon svog izlaska na tržište postala dominantna tehnologija za sekundarno pohranjivanje podataka u tipičnim računalnim sistemima tokom 1960-tih. Danas (2019.) tvrdi diskovi rabe se u mnogim računalnim sustavima, a nedavne inovacije u tehnologijama kao tvrdi diskovi bez pokretnih koji rabe tehnologije flash memorija i NAND tehnologije, polako počinju potiskivati magnetske diskove s pojedinih sustava kao što su prijenosnici. Tvrdi diskovi zbog neprekidnog razvoja i usvajanja novih tehnoloških rješenja još su najprivlačniji kao tehnologija za sekundarno pohranjivanje podataka što se tiče odnosa sljedećih svojstava: nosivosti, brzine prijenosa podataka i cijene.</p>
            </div>
            <div class="tab-pane fade p-3" id="ram" role="tabpanel" aria-labelledby="ram-tab">
                <p>RAM (kratica od Random Access Memory - memorija s nasumičnim pristupom) je oblik primarne računalne memorije čijem se sadržaju može izravno pristupiti, za razliku od sekvencijskih memorijskih uređaja kao što su magnetne vrpce, CD i DVD diskovi te tvrdi diskovi, u kojima pristup određenom sadržaju ovisi o položaju čitača. RAM omogućuje upisivanje i čitanje podataka, za razliku od ROM-a, iz kojeg se podatci mogu samo čitati. U RAM se upisuju aktivni programi, te informacije potrebne za trenutačan rad računala. Ima mnogo veću memoriju od ROM-a.</p>
            </div>      
        `);

    }

}

module.exports = TabsContent;