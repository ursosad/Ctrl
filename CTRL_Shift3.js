//My teacher(Mr.weissman wrote the initial code of this javascript)
//i am commenting on this last because we dont have much time left and js doesnt get graded
var cube = document.querySelector('.cube');

var currentClass = '';
var showClass = 'show-top';

function moveup() {
    showClass = 'show-top';
    changeSide();
    console.log("up");
}

function moveleft() {
    showClass = 'show-left';
    changeSide();
    console.log("left");
}

function moveright() {
    showClass = 'show-right';
    changeSide();
    console.log("right");
}




function movecenterleft() {
    showClass = 'show-centerleft';
    changeSide();
    console.log("center-left");
}

function movecenterright() {
    showClass = 'show-centerright';
    changeSide();
    console.log("center-right");
}

function movedown() {
    showClass = 'show-bottom';
    changeSide();
    console.log("bottom");
}

function changeSide() {

    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
}
//set initial side
changeSide();