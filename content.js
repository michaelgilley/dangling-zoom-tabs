// Zoom site forwards the page to ?status=success after the meeting is launched.
if (window.location.search.includes("status=success")) {
  chrome.runtime.sendMessage({ close: true });
}
