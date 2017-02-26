var IPL = {};
IPL.categorizeURL = "https://ipl.e-imo.com/api/v3/actions/categorize", IPL.Categorize = function(a, b, c, d) {
    IPL.ajaxCategorize(a, b, IPL.categorizeURL, JSON.stringify(c), d)
}, IPL.ajaxCategorize = function(a, b, c, d, e) {
    var f;
    f = new XMLHttpRequest, f.onreadystatechange = function() {
        4 == f.readyState && 200 == f.status ? e(JSON.parse(f.responseText)) : 4 == f.readyState && 200 != f.status && e({
            HttpError: f.status
        })
    }, f.open("POST", c, !0), f.setRequestHeader("Authorization", "Basic " + btoa(a + ":" + b)), f.setRequestHeader("Accept", "application/json"), f.setRequestHeader("Content-Type", "application/json"), f.send(d)
}, IPL.setCategorizeURL = function(a) {
    IPL.categorizeURL = a
}, window.IPL = IPL;