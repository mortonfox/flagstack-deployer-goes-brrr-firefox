async function getCurrentTabId() {
    let queryOptions = {
        active: true,
        currentWindow: true
    };
    let [tab] = await browser.tabs.query(queryOptions);
    return tab.id;
}

chrome.commands.onCommand.addListener(async command => {
  console.log(command);
  let tabid = await getCurrentTabId();
  // console.log(tabid);
  chrome.scripting.executeScript({
    target: {tabId: tabid},
    func: contentScriptFunc,
    args: [command]
  });
});

function contentScriptFunc(name) {
  if (!document.location.href.includes('flagstack.net/map')) return;
  switch (name) {
    case 'deploy-green':
      let grnflag = document.querySelector('[data-itemtypeid="4"]');
      if (grnflag) grnflag.click();
      break;
    case 'deploy-save':
      let savebtn = document.querySelector('a.deploy_save');
      if (savebtn) savebtn.click();
      break;
  }
}

// The End
