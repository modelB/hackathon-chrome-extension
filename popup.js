window.onload = function() {
    //popup was opened, do what you want
    const d = document;
    let newEl = document.createElement('p');
    
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log(url);
        url = url.slice(8)
        if (url.slice(0,3) === 'www') {
            url = url.slice(4);
        }
        console.log(url);
        url = url.slice(0,url.indexOf('.'))
        //alert(url);
        console.log(url);
        const bloom_button = document.getElementById('bloomberg');
        bloom_button.addEventListener('click', function () {
            // redirect me to the correct URI
            const target = 'https://www.bloomberg.com/search?query=' + url;
            chrome.tabs.create({
                url: target
            });
        });

        const google = document.getElementById('gt');
        google.addEventListener('click', function () {
            // redirect me to the correct URI
            const target = 'https://trends.google.com/trends/explore?date=all&geo=US&q=' + url;
            chrome.tabs.create({
                url: target
            });
        });

        const twitter = document.getElementById('twitter');
        twitter.addEventListener('click', function () {
            // redirect me to the correct URI
            const target = 'https://twitter.com/search?q=%23' + url;
            chrome.tabs.create({
                url: target
            });
        });

        const NYT_button = document.getElementById('NYT');
        NYT_button.addEventListener('click', function () {
            // redirect me to the correct URI
            const target = 'https://www.nytimes.com/search?query=' + url;
            chrome.tabs.create({
                url: target
            });
        });

        const reddit_button = document.getElementById('reddit');
        reddit_button.addEventListener('click', function () {
            // redirect me to the correct URI
            const target = 'https://www.reddit.com/search/?q=' + url;
            chrome.tabs.create({
                url: target
            });
        });

        const WSB_button = document.getElementById('WSB');
        WSB_button.addEventListener('click', function () {
            // redirect me to the correct URI
            const target = 'https://www.reddit.com/r/wallstreetbets/search?q=' + url + '&restrict_sr=1';
            chrome.tabs.create({
                url: target
            });
        });
        
    });

    
    const scrippy = document.createElement('script');
    scrippy.type = "text/javascript";
    scrippy.src = "https://ssl.gstatic.com/trends_nrtr/2578_RC02/embed_loader.js";

    //<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2578_RC02/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"codesmith","geo":"US","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=codesmith&geo=US&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>
};





// document.addEventListener('DOMContentLoaded', function() {
//     // var checkPageButton = document.getElementById('checkPage');
//     // checkPageButton.addEventListener('click', function() {
  
     
//         const d = document;
  
//         var f = d.createElement('form');
//         f.action = 'http://gtmetrix.com/analyze.html?bm';
//         f.method = 'post';
//         var i = d.createElement('input');
//         i.type = 'hidden';
//         i.name = 'url';
//         //i.value = tab.url;
//         f.appendChild(i);
//         d.body.appendChild(f);
//         f.submit();
//         // const url = new URL(tab.url);
//         // const domain = url.hostname;
//         console.log(domain);
//         let newEl = document.createElement('p');
//         newEl.innerText='hello2!';
//         d.body.appendChild(newEl);
//     //   })
    
// }, false);

// chrome.browserAction.onClicked.addListener(function (tab) {
// 	// for the current tab, inject the "inject.js" file & execute it
// 	chrome.tabs.executeScript(tab.ib, {
// 		file: 'inject.js'
// 	});
// });