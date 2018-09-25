window.onload = function() {
    document.getElementById("scrape").addEventListener("click",scrape_click);
    console.log("added listener");
};

function scrape_click () {
    chrome.tabs.query({active:true,currentWindow:true},function(tabs) {
        chrome.tabs.executeScript(tabs[0].id,{'file':'scrape.js'});
    });
};
