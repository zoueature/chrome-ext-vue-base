// createTab 创建一个标签
function createTab(active, url, callback) {
    chrome.tabs.create({
        active: active,
        url: url,
    }, callback)
}

export default {
    createTab,
}