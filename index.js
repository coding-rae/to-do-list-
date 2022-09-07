//Create a 'close' button and append it to each list item

const myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist [i].appendChild(span);
}

//Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (let i = 0; close.length; i++){
    close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
    }
}

// Add a 'checked' symbol when clicking on a list name
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


function newElement() {
    const li = document.createElement("li");
    let inputValue = document.getElementById('myInput').ariaValueMax;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length, i++) {
        close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }


}
