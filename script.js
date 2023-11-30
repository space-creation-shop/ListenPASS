let pp = document.getElementById("pp");
let ppinput = document.getElementById("pp-input")


ppinput.onchange = function() {
    pp.src = URL.createObjectURL(ppinput.files[0]);
}



