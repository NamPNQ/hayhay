var s = document.createElement('script');
s.src = chrome.extension.getURL('hayhay.js');
(document.head||document.documentElement).appendChild(s);