var outputScrin = document.querySelector("#outputScrin");

function display(num) {
    outputScrin.value += num;
}

function Calculate() {
    try {
        outputScrin.value = eval(outputScrin.value);
    } catch (error) {
        alert("Ivalid");
    }
}

function Clear() {
    outputScrin.value = "";
}

function Del() {
    outputScrin.value = outputScrin.value.slice(0, -1);
}