const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details)
        return { cancel: true }
    },
    // this arr uses regex
    {urls: defaultFilters},
    ["blocking"]
)