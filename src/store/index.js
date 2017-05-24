/**
 * Created by shangkuikui on 2017/5/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import mutations from './mutation'
import * as getters from './getter'


Vue.use(Vuex)
const state = {
    currentThreadID: null,
    threads: {
       /* id: {
            id,
            name,
            messages: [],
            lastMessage: null
        }*/
    },
    messages:{
 /*       id: {
            id,
            threadId,
            threadName,
            authorName,
            text,
            timestamp,
            isRead
        }*/
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})