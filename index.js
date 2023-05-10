const addButton =document.getElementById ("add-element-btn");
    const removeButton = document.getElementById ("remove-element-btn");
    const div = document.getElementById("my-div");
    let Element = [];
    console.log(Element)
    addButton.addEventListener("click", function () {
    const newElement = document.createElement("p");
    newElement.textcontent ="Alert";
    div.appendChild(newElement);
    element.push(newElement);
    });

    removeButton.addEventListener("click", function () {
        const lastElement = elements.pop();
        if (lastElement) {
            div.removeChild(lastElement)
        };
    });