chrome.browserAction.onClicked.addListener(function (tab) {
  var tabUrl = tab.url;
  newUrl = 'https://12ft.io/' + tabUrl;
  chrome.tabs.update({ url: newUrl });
});
