const navElements = [...document.getElementsByTagName("li"), ...document.getElementsByTagName("a")];
const iframeWindow = document.getElementsByTagName("iframe")[0];

for (let i = 0; i < navElements.length; i++) {
    const element = navElements[i];
    element.onclick = (e) => {
        newPage = element.attributes.getNamedItem("href").textContent;
        iframeWindow.src = newPage;
        cleanSelection();
        element.classList.add("current");
        return false;
    }
}

function cleanSelection() {
    let array = document.getElementsByClassName("current");
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.classList.remove("current");
    }
}