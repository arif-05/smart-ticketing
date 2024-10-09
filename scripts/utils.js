function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}

function  convertedPrice(elementId){
    const element = document.getElementById(elementId).innerText;
    const value = parseInt(element);
    return value;
}

function createDiv(name){
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("p-3");
    div.classList.add("items-center");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = name;
    p2.innerText = "Economy";
    p3.innerText = "550";

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    const seatContainer = document.getElementById("seat-container");
    seatContainer.appendChild(div);

}

