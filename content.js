// Zoom site forwards the page to #success after the meeting is launched.
if (window.location.hash.includes("#success")) {
  chrome.runtime.sendMessage({ close: true });
}
