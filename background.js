chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = new URL(details.url);
        var tld = url.hostname.split('.').pop();
        var zeronetTlds = ['bit', 'yo', 'yu', 'of', 'inf', 'zn', 'list'];
        if (zeronetTlds.includes(tld)) {
            return {redirectUrl: "http://127.0.0.1:43110/" + url.hostname};
        }
    },
    {
        urls: ["*://*.bit/*", "*://*.yo/*", "*://*.yu/*", "*://*.of/*", "*://*.inf/*", "*://*.zn/*", "*://*.list/*"],
        types: ["main_frame"]
    },
    ["blocking"]
);
