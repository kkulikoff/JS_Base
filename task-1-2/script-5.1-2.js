const btn_1 = document.querySelector('.push-CB');
const btn_2 = document.querySelector('.arrangement-figures');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generateCB() {
    const insertCB = document.querySelector('.push-chess-board');
    const HTML_CB = `<div class="chess-board">
    <div class="top-text">
        <p class="abc tp">ABCDEFGH</p>
    </div>
    <div class="field">
        <div class="left-numeric">
            <p class="ln">87654321</p>
        </div>
        <table>
            <tr>
                <td id="A8"></td>
                <td id="B8" class="black"></td>
                <td id="C8"></td>
                <td id="D8" class="black"></td>
                <td id="E8"></td>
                <td id="F8" class="black"></td>
                <td id="G8"></td>
                <td id="H8" class="black"></td>
            </tr>
            <tr>
                <td id="A7" class="black"></td>
                <td id="B7"></td>
                <td id="C7" class="black"></td>
                <td id="D7"></td>
                <td id="E7" class="black"></td>
                <td id="F7"></td>
                <td id="G7" class="black"></td>
                <td id="H7"></td>
            </tr>
            <tr>
                <td id="A6"></td>
                <td id="B6" class="black"></td>
                <td id="C6"></td>
                <td id="D6" class="black"></td>
                <td id="E6"></td>
                <td id="F6" class="black"></td>
                <td id="G6"></td>
                <td id="H6" class="black"></td>
            </tr>
            <tr>
                <td id="A5" class="black"></td>
                <td id="B5"></td>
                <td id="C5" class="black"></td>
                <td id="D5"></td>
                <td id="E5" class="black"></td>
                <td id="F5"></td>
                <td id="G5" class="black"></td>
                <td id="H5"></td>
            </tr>
            <tr>
                <td id="A4"></td>
                <td id="B4" class="black"></td>
                <td id="C4"></td>
                <td id="D4" class="black"></td>
                <td id="E4"></td>
                <td id="F4" class="black"></td>
                <td id="G4"></td>
                <td id="H4" class="black"></td>
            </tr>
            <tr>
                <td id="A3" class="black"></td>
                <td id="B3"></td>
                <td id="C3" class="black"></td>
                <td id="D3"></td>
                <td id="E3" class="black"></td>
                <td id="F3"></td>
                <td id="G3" class="black"></td>
                <td id="H3"></td>
            </tr>
            <tr>
                <td id="A2"></td>
                <td id="B2" class="black"></td>
                <td id="C2"></td>
                <td id="D2" class="black"></td>
                <td id="E2"></td>
                <td id="F2" class="black"></td>
                <td id="G2"></td>
                <td id="H2" class="black"></td>
            </tr>
            <tr>
                <td id="A1" class="black"></td>
                <td id="B1"></td>
                <td id="C1" class="black"></td>
                <td id="D1"></td>
                <td id="E1" class="black"></td>
                <td id="F1"></td>
                <td id="G1" class="black"></td>
                <td id="H1"></td>
            </tr>
        </table>
        <div class="right-numeric">
            <p class="Rn">87654321</p>
        </div>
    </div>
    <div class="bottom-text">
        <p class="abc">ABCDEFGH</p>
    </div>
                    </div>`;
    insertCB.innerHTML = HTML_CB;
}

let idCell = ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7',
    'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'];
let nameFigure = ['чЛ', 'чК', 'чС', 'чКр', 'чФ', 'чС', 'чК', 'чЛ', 'чП', 'чП', 'чП', 'чП', 'чП', 'чП', 'чП', 'чП', 'бП', 'бП', 'бП', 'бП', 'бП', 'бП', 'бП', 'бП', 'бЛ', 'бК', 'бС', 'бКр', 'бФ', 'бС', 'бК', 'бЛ'];

async function arrangement() {
    for (let i = 0, j = 0; i < idCell.length; ++i, ++j) {
        document.getElementById(idCell[i]).innerHTML = nameFigure[j];
        await sleep(50);
    }
}

btn_1.addEventListener('click', generateCB);
btn_2.addEventListener('click', arrangement);
