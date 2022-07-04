/* eslint-disable */
import { createApp } from 'vue'
import app from './components/app.vue'

console.log('content inject')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    sendResponse("ok")
})

joinContent(app)
updateBackground()

function joinContent (element) {
    const div = document.createElement('div')
    div.id = 'joinContentApp'
    document.body.appendChild(div)
    createApp(element).mount('#joinContentApp')
}