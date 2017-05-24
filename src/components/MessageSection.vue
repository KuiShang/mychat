<template lang="html">
    <div class="message-section">
        <h3 class="message-thread-heading">{{ thread.name }}</h3>
        <ul class="message-list" ref="list">
            <Message
                    v-for="message in sortedMessages"
                    :message="message"
                    :key="message.id"
            >

            </Message>
        </ul>
        <textarea class="message-composer" @keyup.enter="sendMessage"></textarea>
    </div>
</template>
<script type="text/ecmascript-6">
    import Message from './Message.vue'
    import {mapGetters} from 'vuex'
    export default{
        name: 'MessageSection',
        components: {Message},
        computed: {
            ...mapGetters({
                thread: 'currentThread',
                messages: 'currentMessages'
            }),
            sortedMessages(){
                return this.messages
                    .slice()
                    .sort((a, b) => a.timestamp - b.timestamp)
            }
        },
        methods: {
            sendMessage (e) {
                const text = e.target.value
                if (text.trim()) {
                    this.$store.dispatch('sendMessage', {
                        text,
                        thread: this.thread
                    })
                    e.target.value = ''
                }
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
