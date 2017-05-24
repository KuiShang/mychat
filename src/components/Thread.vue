<template lang="html">
    <li
            class="thread-list-item"
            :class="{ active: active }"
            @click="$emit('switch-thread', thread.id)"
    >
        <h5 class="thread-name">{{ thread.name }}</h5>
        <div class="thread-time">
            {{ thread.lastMessage.timestamp | time }}
        </div>
        <div class="thread-last-message">
            {{ thread.lastMessage.text }}
        </div>
    </li>

</template>
<script type="text/ecmascript-6">
    export default{
        name: 'Thread',
        props: {
            thread: Object,
            active: Boolean
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>