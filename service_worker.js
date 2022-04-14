chrome.action.onClicked.addListener(tab => {
  var tabUrl = tab.url;
  newUrl = 'https://12ft.io/' + tabUrl;
  chrome.tabs.update({ url: newUrl });
});
