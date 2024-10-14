addEventListener("load", (event) => {
    const urlsp = new URLSearchParams(window.location.search);
    const t = urlsp.get('transaction');

    if (!t) {
        console.log('Pepper Upsell Error 1');
        return;
    }

    function prepareFrame(e) {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", `https://pepper.com.br/upsell.html?transaction=${t}`);
        ifrm.style.width = "640px";
        ifrm.style.height = "280px";
        ifrm.style.maxWidth = "100%";
        ifrm.style.margin = "1rem auto";
        ifrm.style.display = "flex";
        ifrm.setAttribute("scrolling", "no");
        e.parentNode.replaceChild(ifrm, e);
    }
    var btns = document.querySelectorAll('.pepperBtn');

    btns.forEach(e => {
        prepareFrame(e)
    })
});