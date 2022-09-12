const host = "https://github.com"
document.getElementById('notViewed').addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.url.includes(host)) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.querySelectorAll('.js-reviewed-checkbox').forEach((elem => {
        if (!elem.checked) { return }
        var clickEvent = new MouseEvent('click');
        elem.dispatchEvent(clickEvent);
      }))
    },
  })
}
});

document.getElementById('viewed').addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.url.includes(host)) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.querySelectorAll('.js-reviewed-checkbox').forEach((elem => {
          if (elem.checked) { return }
          var clickEvent = new MouseEvent('click');
          elem.dispatchEvent(clickEvent);
        }))
      },
    })
  }
});

