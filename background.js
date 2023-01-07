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
	"*://*.zedo.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		let url = details.url
		console.log(details.url, defaultFilters)
		let start = url.indexOf("//") + 2
		let end;
		for(let i = start; i < url.length; i++) {
			if(url[i] === "/") {
				end = i
        		break
    		}
		}
		urlStart = "*://*." + url.slice(start, end+1) + "*"
		if(!defaultFilters.includes(urlStart)){
			console.log(urlStart)
			defaultFilters.push(urlStart)
		}
		console.log(defaultFilters)
        return { cancel: true }
    },
    // this arr uses regex
    {urls: defaultFilters},
    ["blocking"]
)