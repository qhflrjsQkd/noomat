console.log('start')
var dir = "0";
var todir = 'd';
var ms = 120;
var start = 1;
var head = document.getElementById("head");
var board = new Array(17);
for (var i = 0; i < board.length; i++) {
    board[i] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}
var myxy = [4,7]
var taillist = ['d','d','d']
var tail = document.getElementById("tail");
head.style.left = Number(getComputedStyle(head).left.split("px")[0]) - 120 + "px";
tail.style.left = Number(getComputedStyle(head).left.split("px")[0]) - 90 + "px";
var sbodylist = [0,0,0];
var appleate = 0;
var sbodyxylist = [[1,7],[2,7],[3,7]];

for (var i = 2; i > -1; i--) {
    let qwer = document.createElement('div');
    qwer.className = 'snake'
    document.body.appendChild(qwer);
    sbodylist[i] = qwer
}
for (var i = 0; i < sbodylist.length; i++) {
    sbodylist[i].style.left = Number(getComputedStyle(head).left.split("px")[0]) -90 + 30*i + "px";
}

gradation(sbodylist[2],1.5)
gradation(sbodylist[1],3)
gradation(sbodylist[0],4.5)
gradation(tail,4.5)

window.addEventListener("keydown", (e) => {
    console.log(e.key)
    switch(e.key) {
        case 'w':
            if (todir!='s') dir = 'w'
            break;
        case 'ArrowUp':
            if (todir!='s') dir = 'w'
            break;
        case 'a':
            if (todir!='d') dir = 'a'
            break;
        case 'ArrowLeft':
            if (todir!='d') dir = 'a'
            break;
        case 's':
            if (todir!='w') dir = 's'
            break;
        case 'ArrowDown':
            if (todir!='w') dir = 's'
            break;
        case 'd':
            if (todir!='a') dir = 'd'
            break;
        case 'ArrowRight':
            if (todir!='a') dir = 'd'
            break;
        case ' ':
            if (start != 1) location.reload(true);
    }});

function hgo() {
    switch(dir) {
        case 'w':
            taillist.push('w');
            todir = 'w'
            myxy[1] = myxy[1]-1
            if (board[myxy[0]][myxy[1]] == 0) {head.animate(
                [
                    { transform: "translateY(30px)"},
                    { transform: "translateY(0px)"},
                ],
                {
                    duration: ms,
                    easing: "linear",
                    fill: "forwards",
                }
            );
            if (appleate == 0) {
            tgo()
            } else {
            gradation(tail,1.5)
            }
            sbmd()
            setTimeout(applemake,ms/2)
            head.style.top = Number(getComputedStyle(head).top.split("px")[0]) - 30 + "px";
            } else {start = 0}
            break;
        case 'a':
            taillist.push('a');
            todir = 'a'
            myxy[0] = myxy[0]-1
            if (myxy[0] >= 0 && board[myxy[0]][myxy[1]] == 0) {head.animate(
                [
                    { transform: "translateX(30px)"},
                    { transform: "translateX(0px)"},
                ],
                {
                    duration: ms,
                    easing: "linear",
                    fill: "forwards",
                }
            );
            if (appleate == 0) {
                tgo()
                } else {
                    gradation(tail,1.5)
                    }
                sbmd()
                setTimeout(applemake,ms/2)
            head.style.left = Number(getComputedStyle(head).left.split("px")[0]) - 30 + "px";
            } else {start = 0}
            break;
        case 's':
            taillist.push('s');
            todir = 's'
            myxy[1] = myxy[1]+1
            if (board[myxy[0]][myxy[1]] == 0) {head.animate(
                [
                    { transform: "translateY(-30px)"},
                    { transform: "translateY(0px)"},
                ],
                {
                    duration: ms,
                    easing: "linear",
                    fill: "forwards",
                }
            );
            if (appleate == 0) {
                tgo()
                } else {
                    gradation(tail,1.5)
                    }
                sbmd()
                setTimeout(applemake,ms/2)
            head.style.top = Number(getComputedStyle(head).top.split("px")[0]) + 30 + "px";
            } else {start = 0}
            break;
        case 'd':
            taillist.push('d');
            todir = 'd'
            myxy[0] = myxy[0]+1
            if (myxy[0] <= 16 && board[myxy[0]][myxy[1]] == 0) {head.animate(
                [
                    { transform: "translateX(-30px)"},
                    { transform: "translateX(0px)"},
                ],
                {
                    duration: ms,
                    easing: "linear",
                    fill: "backwards",
                }
            );
            if (appleate == 0) {
                tgo()
                } else {gradation(tail,1.5)}
                sbmd()
                setTimeout(applemake,ms/2)
            head.style.left = Number(getComputedStyle(head).left.split("px")[0]) + 30 + "px";
            } else {start = 0}
            break;
    }
    if (start == 1) {setTimeout(hgo,ms)}
}

function tgo() {
    switch(taillist.shift()) {
        case 'w':
                tail.animate(
                [
                    { transform: "translateY(30px)"},
                    { transform: "translateY(0px)"},
                ],
                {
                    duration: ms,
                    easing: "linear",
                    fill: "forwards",
                }
            );
            tail.style.top = Number(getComputedStyle(tail).top.split("px")[0]) - 30 + "px";
            break;
        case 'a':
            tail.animate(
                [
                    { transform: "translateX(30px)"},
                    { transform: "translateX(0px)"},
                ],
                {
                    duration: ms,
                    easing: "linear",
                    fill: "forwards",
                }
            );
            tail.style.left = Number(getComputedStyle(tail).left.split("px")[0]) - 30 + "px";
            break;
        case 's':
                tail.animate(
                [
                    { transform: "translateY(-30px)"},
                    { transform: "translateY(0px)"},
                ],
                {
                    duration: ms,
                    easing: "linear",
                    fill: "forwards",
                }
            );
            tail.style.top = Number(getComputedStyle(tail).top.split("px")[0]) + 30 + "px";
            break;
        case 'd':
            tail.animate(
                [
                    { transform: "translateX(-30px)"},
                    { transform: "translateX(0px)"},
                ],
                {
                    duration: ms,
                    easing: "linear",
                    fill: "backwards",
                }
            );
            tail.style.left = Number(getComputedStyle(tail).left.split("px")[0]) + 30 + "px";
            break;
    }
}

function sbmd() {
    const qwer = document.createElement('div');
    qwer.className = 'snake'
    
    document.body.appendChild(qwer);
    let a = sbodylist.length
    qwer.style.left = getComputedStyle(head).left
    qwer.style.top = getComputedStyle(head).top
    sbodylist.push(qwer)
    board[myxy[0]][myxy[1]] = 1
    sbodyxylist.push(Object.assign([], myxy))
    if (appleate == 0) {
    sbodylist[0].remove();
    sbodylist.shift();
    let a1 = sbodyxylist.shift();
    board[a1[0]][a1[1]] = 0
    } else {
        appleate = 0
    }
    for (const e of sbodylist) {
        gradation(e,1.5)
    }

}

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const inequals = function(a,b) {for (const i of a) {if (equals(i,b)) {return true}}; return false} 
var newapple = document.createElement('div');
newapple.className = 'apple'
var applexy = [12,7]
document.body.appendChild(newapple);
newapple.style.left = Number(getComputedStyle(newapple).left.split("px")[0]) - 240 + "px";
newapple.style.top = Number(getComputedStyle(newapple).top.split("px")[0]) - 210 + "px";
newapple.style.left = Number(getComputedStyle(newapple).left.split("px")[0]) + 30*applexy[0] + "px";
newapple.style.top = Number(getComputedStyle(newapple).top.split("px")[0]) +30*applexy[1] + "px";

function applemake() {
    if (equals(applexy,myxy)) {
    document.getElementById("score").innerText = Number(document.getElementById("score").innerText) + 1
    newapple.remove();
    appleate = 1
    newapple = document.createElement('div');
    newapple.className = 'apple'
    applexy = [Math.floor(Math.random() * 17),Math.floor(Math.random() *15)]
    document.body.appendChild(newapple);
    while (equals(applexy,myxy) || inequals(sbodyxylist,applexy)) {applexy = [Math.floor(Math.random() * 17),Math.floor(Math.random() *15)]}
    newapple.style.left = Number(getComputedStyle(newapple).left.split("px")[0]) - 240 + "px";
    newapple.style.top = Number(getComputedStyle(newapple).top.split("px")[0]) - 210 + "px";
    newapple.style.left = Number(getComputedStyle(newapple).left.split("px")[0]) + 30*applexy[0] + "px";
    newapple.style.top = Number(getComputedStyle(newapple).top.split("px")[0]) +30*applexy[1] + "px";
    }}

function gradation(e,n) {
    let rgb = getComputedStyle(e).backgroundColor
    let rgbnumlist = rgb.split("rgb(")[1].split(")")[0].split(", ")
    for (var i = 0; i < 3; i++) {
        rgbnumlist[i] = Number(rgbnumlist[i])
        if (rgbnumlist[i] >= n) {rgbnumlist[i] -= n}
    }
    e.style.backgroundColor = ("rgb("+rgbnumlist[0]+", "+rgbnumlist[1]+", "+rgbnumlist[2]+")")
}


hgo();
