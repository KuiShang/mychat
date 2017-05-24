<template lang="html">
    <div class="thread-section">
        <div class="thread-count">
          <span v-show="unreadCount">
            Unread threads: {{ unreadCount }}
          </span>
        </div>
        <div class="thread-list">
            <thread v-for="thread in threads"
                    :key="thread.id"
                    :thread="thread"
                    :active="thread.id === currentThread.id"
                    @switch-thread="switchThread">

            </thread>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import Thread from './Thread.vue'
    import {mapGetters} from 'vuex'
    export default{
        computed: {
            ...mapGetters([
                'threads',
                'currentThread'
            ]),
            unreadCount () {
                const threads = this.threads
                return Object.keys(threads).reduce((count, id) => {
                    return threads[id].lastMessage.isRead
                        ? count
                        : count + 1
                }, 0)
            }
        },
        components: {Thread},
        methods: {
            switchThread(id){

            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
