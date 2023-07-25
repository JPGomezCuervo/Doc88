async function pirateScript(iterations = 10, startingPoint = 0) {

    const CLASS_PAGES_CONTAINER = "#pageContainer";

    const pagesContainer = document.querySelector(CLASS_PAGES_CONTAINER);

    // stores the total pages
    const pages = [];

    // Traverse recursively the DOM looking for the pages elements, which are contained in a canvas HTML element.
    (function seekOnDOM(elementHTML = pagesContainer) {
        for (let page of elementHTML.childNodes) {
            // Use a regular expression to match the ID format 'page_n'
            if (page.id && /^page_\d+$/.test(page.id)) {
                pages.push(page);
            } else {
                seekOnDOM(page);
            }
        }
    })();

    async function clockWork() {
        const urlStore = [];
        let pageNumber = 1;

        async function scroll(i) {
            pages[i].scrollIntoView();
        }

        async function writeURL (i){
            urlStore.push({
                page: pageNumber,
                url: pages[i].toDataURL()
            });
        }

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        for (let i = 0; i < iterations; i++) {
            await delay(500);
            await scroll(i);
            await writeURL(i);
            console.log(`Iteración ${i +1} de ${iterations}`)
            pageNumber++;
        }

        return urlStore;
    }

    return await clockWork();
}


const result = pirateScript();

result.then((res)=> {
    console.log(res)
})