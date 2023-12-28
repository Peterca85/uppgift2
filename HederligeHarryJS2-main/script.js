const btn = document.getElementById("button-contact")
btn.addEventListener("click", myFunc)

function myFunc() {
    const input = document.getElementsByName("email")[0];
    const value = input.value
    console.log(value)
}

function createParagraph(txt) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = txt;
    return paragraph;
}

const phoneInput = document.getElementsByName("phone")[0];
phoneInput.addEventListener("keydown", phoneInputChange)

function phoneInputChange(){
    const input = document.getElementsByName("phone") [0];
    const paragraph = createParagraph(input.value)
    console.log(paragraph)
}
