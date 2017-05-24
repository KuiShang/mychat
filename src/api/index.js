/**
 * Created by shangkuikui on 2017/5/19.
 */
const data = require('./mock-data')
const LATENCY = 16
export const getAllMessages = cb =>{
    setTimeout(cb(data),LATENCY)
}
export function createMessage ({ text, thread }, cb) {
    const timestamp = Date.now()
    const id = 'm_' + timestamp
    const message = {
        id,
        text,
        timestamp,
        threadID: thread.id,
        threadName: thread.name,
        authorName: 'KK'
    }
    setTimeout(function () {
        cb(message)
    }, LATENCY)
}