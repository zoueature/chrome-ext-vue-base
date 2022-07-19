
// setBadgeText 设计工具栏icon右下方的显示数据
function setBadgeText(text, callback) {
    chrome.action.setBadgeText({
        text: text,
    }, callback)
}

// listenClick 监听工具栏icon的点击事件
function listenClick(callback) {
    chrome.action.onClicked.addListener(callback)
}

function openPopup(callback = () => {}) {
    chrome.action.openPopup({}, callback)
}
export default {
    setBadgeText,
    listenClick,
    openPopup,
}