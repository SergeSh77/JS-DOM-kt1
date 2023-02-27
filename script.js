let array = []
for(let i = 0; i < 30;i++){
    let a = Math.floor(Math.random() * 99)
    array.push(a)
}
function createTable() {
    let k = 0;
    let tbody = document.body.firstElementChild.firstElementChild
    for(let i = 0; i < 6; i++){
        tbody.innerHTML += "<tr></tr>"
        let childTr = tbody.childNodes[i]
        for(let v = 0; v < 5; v++) {
            if (array[k] >= 50) {
                childTr.innerHTML += `<td style="background-color: orange;">${array[k]}</td>`
            } else {
                childTr.innerHTML += `<td style=>${array[k]}</td>`
            }
            k++
        }
    }
}
createTable()
let newK = 0;
let tbody = document.body.firstElementChild.firstElementChild;
tbody.innerHTML += "<tr></tr>";
function addElemInTable() {
    let num = Math.floor(Math.random() * 99)
    if(newK < 5) {
        let lastTr = tbody.lastElementChild
        if (num >= 50) {
            lastTr.innerHTML += `<td style="background-color: orange;">${num}</td>`
        } else {
            lastTr.innerHTML += `<td style="background-color: white;">${num}</td>`
        }
        newK++
    } else {
        tbody.innerHTML += "<tr></tr>"
        let lastTr = tbody.lastElementChild
        if (num >= 50) {
            lastTr.innerHTML += `<td style="background-color: orange;">${num}</td>`
        } else {
            lastTr.innerHTML += `<td style="background-color: white;">${num}</td>`
        }
        newK = 1
    }
}
