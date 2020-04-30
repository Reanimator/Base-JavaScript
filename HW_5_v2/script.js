var figure = "";
var selected;
var player = 0;
var playFigs;
var figurTable = [['8', '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜', '8'],
                    ['7', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '7'],
                    ['6', '', '', '', '', '', '', '', '', '6'],
                    ['5', '', '', '', '', '', '', '', '', '5'],
                    ['4', '', '', '', '', '', '', '', '', '4'],
                    ['3', '', '', '', '', '', '', '', '', '3'],
                    ['2', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '2'],
                    ['1', '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖', '1']];

function chessdesk(figurTable, figure) {
    var newTable = document.createElement('table'),
        tempTable = document.createElement('table'),
        name = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        blackFigs = ['♜', '♞', '♝', '♛', '♚', '♟'],
        whiteFigs = ['♖', '♘', '♗', '♕', '♔', '♙'];

    if (player == 0) {
        playFigs = whiteFigs;
    } else {
        playFigs = blackFigs;
    }
    console.log(playFigs);
    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        var newTr = newTable.insertRow(i);
        for (var j = 0; j < 10; j++) {
            var newTd = newTr.insertCell(j);
            newTd.className = "x_" + j;
            switch (i) {
                case 0:
                    newTd.innerText = name[j];
                    break;
                case 9:
                    newTd.innerText = name[j];
                    break;
                default:
                    if (j == 0 || j == 9) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
            if (i > 0 && i < 9) {
                newTd.innerHTML = figurTable[i - 1][j];
                newTd.id = "id_" + i + "_" + j;
                if (j > 0 && j < 9) {
                    var index = 0;
                    for (var z = 0; z < 7; z++) {
                        if (index == 1) {
                            break
                        } else if (newTd.innerText == playFigs[z]) {
                            index = 1;
                            newTd.onclick = function () { //поднимание
                                if (figure == "") {
                                    figure = this.innerHTML;
                                    this.style.textShadow = "10px 10px 10px black";
                                    this.style.textAlign = "left";
                                    this.style.verticalAlign = "top";
                                    selected = this.id;
                                }
                            }
                        } else if (z == 6) {
                            newTd.onclick = function () { //опускание
                                var beg = selected.split("_");
                                var end = this.id.split("_");

                                if (blackFigs[0] == figure || whiteFigs[0] == figure) {
                                    if ((end[2] == beg[2] && end[1] != beg[1]) || (end[2] != beg[2] && end[1] == beg[1])) {
                                        document.getElementById(selected).style = "";
                                        document.getElementById(selected).innerHTML = "";
                                        console.log(this.innerHTML);
                                        winner(this.innerHTML, blackFigs[4], whiteFigs[4]);
                                        this.innerHTML = figure;
                                        playerSelect(newTable, figure, figurTable, end, beg);
                                        
                                    } else {
                                        alert("Ход недопустим!");
                                    }
                                }
                                if (blackFigs[1] == figure || whiteFigs[1] == figure) {
                                    var horse1 = (beg[1] - end[1] == 2 && ((beg[2] - end[2] == 1) || (beg[2] - end[2] == -1)));
                                    var horse2 = (beg[1] - end[1] == 1 && ((beg[2] - end[2] == 2) || (beg[2] - end[2] == -2)));
                                    var horse3 = (beg[1] - end[1] == -1 && ((beg[2] - end[2] == 2) || (beg[2] - end[2] == -2)));
                                    var horse4 = (beg[1] - end[1] == -2 && ((beg[2] - end[2] == 1) || (beg[2] - end[2] == -1)));
                                    if (horse1 || horse2 || horse3 || horse4) {
                                        document.getElementById(selected).style = "";
                                        document.getElementById(selected).innerHTML = "";
                                        this.innerHTML = figure;
                                        playerSelect(newTable, figure, figurTable, end, beg);
                                    } else {
                                        alert("Ход недопустим!");
                                    }
                                }
                                if (blackFigs[2] == figure || whiteFigs[2] == figure) {
                                    if ((beg[1] - end[1] == beg[2] - end[2]) || (end[1] - beg[1] == beg[2] - end[2])) {
                                        document.getElementById(selected).style = "";
                                        document.getElementById(selected).innerHTML = "";
                                        this.innerHTML = figure;
                                        playerSelect(newTable, figure, figurTable, end, beg);
                                    } else {
                                        alert("Ход недопустим!");
                                    }
                                }
                                if (blackFigs[3] == figure || whiteFigs[3] == figure) {
                                    var queen1 = ((end[2] == beg[2] && end[1] != beg[1]) ||
                                        (end[2] != beg[2] && end[1] == beg[1]));
                                    var queen2 = ((beg[1] - end[1] == beg[2] - end[2]) ||
                                        (end[1] - beg[1] == beg[2] - end[2]));
                                    if (queen1 || queen2) {
                                        document.getElementById(selected).style = "";
                                        document.getElementById(selected).innerHTML = "";
                                        this.innerHTML = figure;
                                        playerSelect(newTable, figure, figurTable, end, beg);
                                    } else {
                                        alert("Ход недопустим!");
                                    }
                                }
                                if (blackFigs[4] == figure || whiteFigs[4] == figure) {
                                    var king1 = ((end[2] == beg[2] && end[1] != beg[1] &&
                                            (beg[1] - end[1] == 1 || beg[1] - end[1] == -1)) ||
                                        ((end[2] != beg[2] && end[1] == beg[1]) &&
                                            (beg[2] - end[2] == 1 || beg[2] - end[2] == -1)));
                                    var king2 = (((beg[1] - end[1] == beg[2] - end[2]) &&
                                            ((beg[1] - end[1] == 1 && beg[2] - end[2] == 1) ||
                                                ((beg[1] - end[1] == -1 && beg[2] - end[2] == -1)))) ||
                                        ((end[1] - beg[1] == beg[2] - end[2]) &&
                                            ((beg[1] - end[1] == 1 && beg[2] - end[2] == -1) ||
                                                ((beg[1] - end[1] == -1 && beg[2] - end[2] == 1)))));
                                    if (king1 || king2) {
                                        document.getElementById(selected).style = "";
                                        document.getElementById(selected).innerHTML = "";
                                        this.innerHTML = figure;
                                        playerSelect(newTable, figure, figurTable, end, beg);
                                    } else {
                                        alert("Ход недопустим!");
                                    }
                                }
                                if (blackFigs[5] == figure) {
                                    if (end[2] != beg[2] || end[1] - beg[1] > 2 || end[1] - beg[1] < 0) {
                                        alert("Ход недопустим!");
                                    } else {
                                        //                                        console.log(selected);
                                        //                                        console.log(this.id);

                                        document.getElementById(selected).style = "";
                                        document.getElementById(selected).innerHTML = "";
                                        this.innerHTML = figure;
                                        playerSelect(newTable, figure, figurTable, end, beg);
                                    }
                                }
                                if (whiteFigs[5] == figure) {
                                    if (end[2] != beg[2] || beg[1] - end[1] > 2 || beg[1] - end[1] < 0) {
                                        alert("Ход недопустим!");
                                    } else {
                                        document.getElementById(selected).style = "";
                                        document.getElementById(selected).innerHTML = "";
                                        this.innerHTML = figure;
                                        playerSelect(newTable, figure, figurTable, end, beg);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    document.body.appendChild(newTable);
}

function playerSelect(newTable, figure, figurTable, end, beg) {
    if (player == 0) {
        player = 1;
        alert("Теперь ходят черные");
        document.body.removeChild(newTable);
        figurTable[end[1] - 1][end[2]] = figure;
        figurTable[beg[1] - 1][beg[2]] = "";
        figure = "";
        chessdesk(figurTable, figure);
    } else {
        player = 0;
        alert("Теперь ходят белые");
        document.body.removeChild(newTable);
        figurTable[end[1] - 1][end[2]] = figure;
        figurTable[beg[1] - 1][beg[2]] = "";
        figure = "";
        chessdesk(figurTable, figure);
    }
}

function winner(figure, blackFigs, whiteFigs){
    if(figure == blackFigs){
        alert("Белые победили!!!")
        figurTable = [['8', '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜', '8'],
                    ['7', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '7'],
                    ['6', '', '', '', '', '', '', '', '', '6'],
                    ['5', '', '', '', '', '', '', '', '', '5'],
                    ['4', '', '', '', '', '', '', '', '', '4'],
                    ['3', '', '', '', '', '', '', '', '', '3'],
                    ['2', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '2'],
                    ['1', '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖', '1']];
        figure = "";
        chessdesk(figurTable, figure);
    } else if (figure == whiteFigs){
        alert("Черные победили!!!")
        figurTable = [['8', '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜', '8'],
                    ['7', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '7'],
                    ['6', '', '', '', '', '', '', '', '', '6'],
                    ['5', '', '', '', '', '', '', '', '', '5'],
                    ['4', '', '', '', '', '', '', '', '', '4'],
                    ['3', '', '', '', '', '', '', '', '', '3'],
                    ['2', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '2'],
                    ['1', '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖', '1']];
        figure = "";
        chessdesk(figurTable, figure);
    }
}

chessdesk(figurTable, figure);
