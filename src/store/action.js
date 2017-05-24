/**
 * Created by shangkuikui on 2017/5/19.
 */
import * as api from '../api'
import * as types from './mutation-types'
export const getAllMessages = ({commit}) => {
    api.getAllMessages(messages => {
        commit(types.RECEIVE_ALL, {messages})
    })
}
export const sendMessage = ({commit}, payload) => {
    api.createMessage(payload, message => {
        commit(types.RECEIVE_MESSAGE, {
            message
        })
    })

}