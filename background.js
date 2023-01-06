chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true }
    },
    // this arr uses regex
    {urls: ["*://*.zedo.com/*"]},
    ["blocking"]
)