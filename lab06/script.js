window.onload = function () {
    function StartElements() {
        var body = document.body;
        var data = document.createElement('div');
        data.className = 'data';

        var block_input = [];
        for(var i = 0; i < 3; i++)
        {
            block_input[i] = document.createElement('div');
            block_input[i].className = 'input';
            var label = document.createElement('label');
            var input = document.createElement('input');
            if(i == 0)
            {
                label.innerHTML = 'Rows:';
                input.id = 'rows';
            }
            if(i == 1)
            {
                label.innerHTML = 'Columns:';
                input.id = 'columns';
            }
            if(i == 2)
            {
                label.innerHTML = 'Mines:';
                input.id = 'count';
            }
            block_input[i].appendChild(label);
            block_input[i].appendChild(input);
            data.appendChild(block_input[i]);
        }

        var button = document.createElement('button');
        button.innerHTML = "Розпочати";
        button.id = 'generation';
        data.appendChild(button);

        body.appendChild(data);
    }
    function CreateField(rows, columns) {
        var table = document.createElement('table');
        table.className = 'field';
        for(var i = 0; i < rows; i++)
        {
            var tr = document.createElement('tr');
            for(var j = 0; j < columns; j++)
            {
                var td = document.createElement('td');
                td.id = i + ';' + j;
                td.onclick = OnLeftClick;
                td.oncontextmenu = OnRightClick;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
    function OnRightClick() {
        var indexes = this.id.split(';');
        if(!data.open[indexes[0]][indexes[1]]) {
            if (this.classList.length == 0)
                this.classList.add('bomb');
            else
                this.classList.remove('bomb');
        }
        return false;
    }

    function OnLeftClick() {
        var indexes = this.id.split(';');
        if(data.firstClick)
        {
            for( var i = 0; i < data.countBomb; i++ )
            {
                var indexRow = Math.floor(Math.random() * (data.row));
                var indexColumn = Math.floor(Math.random() * (data.column));
                if(
                    !(((+indexes[0] - 1 <= indexRow) && (+indexes[0] + 1 >= indexRow)) &&
                        ((+indexes[1] - 1 <= indexColumn) && (+indexes[1] + 1 >= indexColumn)))
                    && data.values[indexRow][indexColumn] != -1
                )
                    data.values[indexRow][indexColumn] = -1;
                else
                    i--;
            }
            for( var i = 0; i < data.row; i++ )
                for (var j = 0; j < data.column; j++)
                    if (data.values[i][j] == -1)
                        for (var q = i - 1; q <= i + 1; q++)
                            for (var w = j - 1; w <= j + 1; w++)
                                if (q >= 0 && q < data.row && w >= 0 && w < data.column)
                                    if (data.values[q][w] != -1)
                                        data.values[q][w]++;
            data.firstClick = !data.firstClick;
        }
        if(!data.open[indexes[0]][indexes[1]] && this.className != 'bomb') {
            if (data.values[indexes[0]][indexes[1]] != -1) {

                if (data.values[indexes[0]][indexes[1]] != 0) {
                    data.open[indexes[0]][indexes[1]] = true;
                    this.classList.add('open');
                    data.countOpen--;
                    this.innerHTML = data.values[indexes[0]][indexes[1]];
                }
                else
                    OpenField(indexes[0], indexes[1]);
            }
            else {
                alert('Програш');
                location.reload()
            }
        }
        if(data.countOpen == 0) {
            alert('Перемога!');
            location.reload()
        }
    }
    function OpenField(i, j) {
        for (var q = i - 1; q <= i + 1; q++) {
            for (var w = j - 1; w <= j + 1; w++) {
                if (q >= 0 && q < data.row && w >= 0 && w < data.column) {
                    if (data.values[q][w] == 0 && !data.open[q][w]) {
                        document.getElementById(q + ';' + w).className = 'open';
                        data.open[q][w] = true;
                        data.countOpen--;
                        if(data.countOpen == 0) {
                            alert('Перемога!');
                            location.reload()
                        }
                        for (var e = q - 1; e <= q + 1; e++) {
                            for (var r = w - 1; r <= w + 1; r++) {
                                if (e >= 0 && e < data.row && r >= 0 && r < data.column && data.values[e][r] > 0 && !data.open[e][r]) {
                                    document.getElementById(e + ';' + r).className = 'open';
                                    data.countOpen--;
                                    if(data.countOpen == 0) {
                                        alert('Перемога!');
                                        location.reload()
                                    }
                                    document.getElementById(e + ';' + r).innerHTML = data.values[e][r];
                                    data.open[e][r] = true;
                                }
                            }
                        }
                        OpenField(q, w);
                    }
                }
            }
        }
    }

    var data = {
        values: [],
        open: [],
        row: 0,
        column: 0,
        countBomb: 0,
        countOpen: 0,
        firstClick: true
    };

    StartElements();

    var button = document.getElementById('generation');
    button.onclick = function () {

        var items = [];
        items[0] = document.getElementById('rows').value;
        items[1] = document.getElementById('columns').value;
        items[2] = document.getElementById('count').value;

        var regex = /^[1-2](\d)$/;
        if (items[0].search(regex) == -1) {
            alert('Error - rows');
            return;
        }
        if (items[1].search(regex) == -1) {
            alert('Error - columns');
            return;
        }
        regex = /^[1-8](\d)?$/;
        if (items[2].search(regex) == -1) {
            alert('Error - bombs');
            return;
        }

        if(items[0] * items[1] / items[2] < 2) {
            alert('Error - кількість бомб не повинна перевищувати половини розміру поля');
            return;
        }

        button.setAttribute('disabled', 'disabled');

        data.row = +items[0];
        data.column = +items[1];
        data.countBomb = +items[2];
        data.countOpen = ( data.row  * data.column ) - data.countBomb;

        CreateField(data.row, data.column);

        for( var i = 0; i < data.row; i++ )
        {
            data.values[i] = [];
            data.open[i] = [];
            for( var j = 0; j < data.column; j++ )
            {
                data.values[i][j] = 0;
                data.open[i][j] = false;
            }
        }
    };
};
