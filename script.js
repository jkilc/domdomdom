document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('BUTTON')
    btn.innerHTML = "Add Square"
    btn.className = 'BUTTON'
    document.body.appendChild(btn)

    let container = document.createElement('div')
    container.className = 'squareContainer'
    document.body.appendChild(container)

    // new square
    btn.addEventListener('click', function () {
        let square = document.createElement('DIV');
        square.className = 'newSquare';
        container.appendChild(square);
        console.log("new square");
        boxCount += 1;
        console.log(boxCount);
        //double click to change color 
        square.addEventListener('dblClick', function () {
            let colors = ['blue', 'red'];
            let randomNum = Math.floor(Math.random() * colors.length);
            square.style.background = colors[randomNum];
            square.appendChild(colors);
            console.log('why isnt it working?');
        })
        square.id = boxCount
        //dispay id 
        let hoverId = document.createElement('div');
        hoverId.className = 'tooltip';
        square.appendChild(hoverId);
        let hoverText = document.createElement('span');
        hoverText.className = "toolTipText"
        hoverId.appendChild(hoverText)
        hoverText.textContent = boxCount


        //this is my attemp for the even/odd square removal thing
        let boxCount = 0;
        let boxDblClk = document.querySelector('.squareContainer');
        let squareRemove = document.getElementById('boxCount')

        boxDblClk.addEventListener('dblClick', function () {
            if (boxCount % 2 == 0) {
                squareRemove.remove();
            }
        })
    })



})

