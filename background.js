chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.close) chrome.tabs.remove(sender.tab.id);
});
