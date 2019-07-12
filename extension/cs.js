chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === 'reload') {
            setTimeout(skipMyAdsPlease, 2000);
            setTimeout(skipMyAdsPlease, 4000);
        }
    });

setTimeout(skipMyAdsPlease, 2000);
setTimeout(skipMyAdsPlease, 4000);

function skipMyAdsPlease() {
    if (document.getElementsByClassName('ytp-ad-skip-button').length != 0) {
        var index;
        for (index = 0; index < document.getElementsByClassName('ytp-ad-skip-button').length; ++index) {
            document.getElementsByClassName('ytp-ad-skip-button')[index].click();
        }
    }
}