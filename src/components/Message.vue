<template lang="html">
    <li class="message-list-item">
        <h5 class="message-author-name">{{ message.authorName }}</h5>
        <div class="message-time">
            {{ message.timestamp | time }}
        </div>
        <div class="message-text">{{ message.text }}</div>
    </li>
</template>
<script type="text/ecmascript-6">
    export default{
        name: 'Message',
        props: {
            message: Object
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>