/**
 * Created by shangkuikui on 2017/5/19.
 */
import Vue from 'vue'
import * as types from './mutation-types'
export default {
    [types.RECEIVE_ALL](state, {messages}){
        let latestMessage
        messages.forEach(message => {
            //create threaed
            if (!state.threads[message.threadID]) {
                createThread(state, message.threadID, message.threadName);
            }
            //last message
            if (!latestMessage || latestMessage.timestamp < message.timestamp) {
                latestMessage = message
            }
            //add message
            addMessage(state, message)
        })
        setCurrentThread(state, latestMessage.threadID)
    },
    [types.RECEIVE_MESSAGE] (state, { message }) {
        addMessage(state, message)
    },
}

function createThread(state, id, name) {
    Vue.set(state.threads, id, {
        id,
        name,
        messages: [],
        lastMessage: null
    })
}
function addMessage(state, message) {
    message.isRead = message.threadID === state.currentThreadID
    const thread = state.threads[message.threadID]
    if (!thread.messages.some(id => id === message.id)) {
        thread.messages.push(message.id)
        thread.lastMessage = message
    }
    Vue.set(state.messages, message.id, message)
}
function setCurrentThread(state, id) {
    state.currentThreadID = id
    state.threads[id].lastMessage.isRead = true
}