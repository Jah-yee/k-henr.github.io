(() => {
    let text = "ees.rneehk" + "@" + "tcatnoc";
    text = text.split("").reverse().join("").replaceAll("ee", "e");
    document.currentScript.parentElement.innerText = text;
})();
