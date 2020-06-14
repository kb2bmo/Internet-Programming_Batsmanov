var canvas =  document.getElementById('canvas');
var context = canvas.getContext("2d");
var sizeBlock = 20;
var points = 0;

function Field(row, column, context, sizeBlock) {
    this.matrix = [];
    this.sizeBlock = sizeBlock;
    this.context = context;
    this.active = [];

    for( var i = 0; i < row; i++ ) {
        this.matrix[i] = [];
        for( var j = 0; j < column; j++ )
            this.matrix[i][j] = 0;
    }
}

Field.prototype.DrawBlock = function (x, y) {
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(x + this.sizeBlock - 2, y);
    this.context.lineTo(x + this.sizeBlock - 2, y + this.sizeBlock - 2);
    this.context.lineTo(x, y + this.sizeBlock - 2);
    this.context.closePath();

    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();

    this.context.fillStyle = "oldlace";
    this.context.fill();
};


Field.prototype.DrawMatrix = function () {
    var count = 0;
    for(var i = 0; i < this.matrix.length; i++) {
        count = 0;
        for (var j = 0; j < this.matrix[0].length; j++) {
            if (this.matrix[i][j] == 1)
                count++;
            else
                break;
            if (count == this.matrix[0].length) {
                for( var q = i - 1; q > 0; q-- ) {
                    this.matrix[q + 1] = this.matrix[q];
                    if (q == 1)
                        for (var w = 0; w < this.matrix[1].length; w++)
                            this.matrix[0][w] = 0;
                }
                points += 100;
                document.getElementById('point').innerHTML = 'Score: ' + points;
            }
        }
    };
    this.context.clearRect(0 ,0, 200, 300);
    for(var i = 0; i < this.matrix.length; i++)
        for (var j = 0; j < this.matrix[0].length; j++)
            if (this.matrix[i][j] != 0)
                this.DrawBlock(sizeBlock * j, sizeBlock * i);
};
Field.prototype.CreateActive = function () {
    this.active = [];
    var type = Math.floor(Math.random() * 7);
    var startPosition = (this.matrix[0].length / 2) - 1;

    switch (type) {
        case 0:
            this.active[0] = [];
            this.active[0][0] = 0;
            this.active[0][1] = startPosition;

            this.active[1] = [];
            this.active[1][0] = 0;
            this.active[1][1] = startPosition + 1;

            this.active[2] = [];
            this.active[2][0] = 0;
            this.active[2][1] = startPosition + 2;

            this.active[3] = [];
            this.active[3][0] = 1;
            this.active[3][1] = startPosition + 1;
            break;
        case 1:
            this.active[0] = [];
            this.active[0][0] = 0;
            this.active[0][1] = startPosition;

            this.active[1] = [];
            this.active[1][0] = 0;
            this.active[1][1] = startPosition + 1;

            this.active[2] = [];
            this.active[2][0] = 1;
            this.active[2][1] = startPosition;

            this.active[3] = [];
            this.active[3][0] = 1;
            this.active[3][1] = startPosition + 1;
            break;
        case 2:
            this.active[0] = [];
            this.active[0][0] = 0;
            this.active[0][1] = startPosition;

            this.active[1] = [];
            this.active[1][0] = 1;
            this.active[1][1] = startPosition;

            this.active[2] = [];
            this.active[2][0] = 2;
            this.active[2][1] = startPosition;
            break;
        case 3:
            this.active[0] = [];
            this.active[0][0] = 0;
            this.active[0][1] = startPosition;

            this.active[1] = [];
            this.active[1][0] = 0;
            this.active[1][1] = startPosition + 1;

            this.active[2] = [];
            this.active[2][0] = 1;
            this.active[2][1] = startPosition + 1;

            this.active[3] = [];
            this.active[3][0] = 1;
            this.active[3][1] = startPosition + 2;
            break;
        case 4:
            this.active[0] = [];
            this.active[0][0] = 0;
            this.active[0][1] = startPosition + 1;

            this.active[1] = [];
            this.active[1][0] = 0;
            this.active[1][1] = startPosition + 2;

            this.active[2] = [];
            this.active[2][0] = 1;
            this.active[2][1] = startPosition;

            this.active[3] = [];
            this.active[3][0] = 1;
            this.active[3][1] = startPosition + 1;
            break;
        case 5:
            this.active[0] = [];
            this.active[0][0] = 0;
            this.active[0][1] = startPosition + 1;

            this.active[1] = [];
            this.active[1][0] = 1;
            this.active[1][1] = startPosition;

            this.active[2] = [];
            this.active[2][0] = 1;
            this.active[2][1] = startPosition + 1;
            break;
        case 6:
            this.active[0] = [];
            this.active[0][0] = 0;
            this.active[0][1] = startPosition + 1;

            this.active[1] = [];
            this.active[1][0] = 1;
            this.active[1][1] = startPosition + 1;

            this.active[2] = [];
            this.active[2][0] = 1;
            this.active[2][1] = startPosition + 2;
            break;
    }

    var check = true;
    for (var i = 0; i < this.active.length; i++) {
        if (this.matrix[this.active[i][0]][this.active[i][1]] == 1) {
            check = false;
            break;
        }
    }

    if (check)
        for (var i = 0; i < this.active.length; i++)
            this.matrix[this.active[i][0]][this.active[i][1]] = 2;
    else {
        alert('Гра завершена');
        location.reload()
    }

};
Field.prototype.MoveActive = function () {
    var check = true;
    for(var i = 0; i < this.active.length; i++) {
        if ((this.active[i][0] + 1) < this.matrix.length) {
            if (this.matrix[this.active[i][0] + 1][this.active[i][1]] == 1)
                check = false;
        }
        else
            check = false;
    }
    if( check ) {
        for (var i = this.active.length - 1; i >= 0; i--) {
            this.matrix[this.active[i][0]][this.active[i][1]] = 0;
            this.active[i][0] += 1;
            this.matrix[this.active[i][0]][this.active[i][1]] = 2;
        }
    }
    else {
        for (var i = this.active.length - 1; i >= 0; i--) {
            this.matrix[this.active[i][0]][this.active[i][1]] = 1;
        }
        this.CreateActive();
    }
};
Field.prototype.MoveActiveLeft = function () {
    var check = true;
    for(var i = 0; i < this.active.length; i++) {
        if ((this.active[i][1] - 1) >= 0) {
            if (this.matrix[this.active[i][0]][this.active[i][1] - 1] == 1)
                check = false;
        }
        else
            check = false;
    }
    if( check ) {
        for (var i = 0; i < this.active.length; i++) {
            this.matrix[this.active[i][0]][this.active[i][1]] = 0;
            this.active[i][1] -= 1;
            this.matrix[this.active[i][0]][this.active[i][1]] = 2;
        }
    }
};
Field.prototype.MoveActiveRight = function () {
    var check = true;
    for(var i = 0; i < this.active.length; i++) {
        if ((this.active[i][1] + 1) < this.matrix[0].length) {
            if (this.matrix[this.active[i][0]][this.active[i][1] + 1] == 1)
                check = false;
        }
        else
            check = false;
    }
    if( check ) {
        for (var i = this.active.length - 1; i >= 0; i--) {
            this.matrix[this.active[i][0]][this.active[i][1]] = 0;
            this.active[i][1] += 1;
            this.matrix[this.active[i][0]][this.active[i][1]] = 2;
        }
    }
};


var Canvas = new Field(canvas.height / sizeBlock, canvas.width / sizeBlock, context, sizeBlock);

Canvas.CreateActive();
Canvas.DrawMatrix();
var timerId = setTimeout(function tick() {
    Canvas.MoveActive();
    Canvas.DrawMatrix();
    timerId = setTimeout(tick, 300);
}, 300);


this.onkeydown = function () {
    if(event.keyCode == 37)
        Canvas.MoveActiveLeft();
    if(event.keyCode == 38)
        alert(8);
    if(event.keyCode == 39)
        Canvas.MoveActiveRight();
    if(event.keyCode == 40)
        Canvas.MoveActive();
};
document.getElementById('restart').onclick = function () {
    location.reload();
};