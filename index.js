const navElements = [...document.getElementsByTagName("li"), ...document.getElementsByTagName("a")];
const iframeWindow = document.getElementsByTagName("iframe")[0];

for (let i = 0; i < navElements.length; i++) {
    const element = navElements[i];
    element.onclick = (e) => {
        if(!element.hasAttribute("href")) return;
        newPage = element.attributes.getNamedItem("href").textContent;
        iframeWindow.src = newPage;
        clearClass("current");
        clearClass("inside");
        element.classList.add("current");

        let parent = element.parentElement;
        if(parent.nodeName == "UL") {
            parent.parentElement.classList.add("inside");
        }

        return false;
    }
}

function clearClass(cName) {
    let array = document.getElementsByClassName(cName);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.classList.remove(cName);
    }
}