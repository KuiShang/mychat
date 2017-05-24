<template lang="html">
    <div class="chatapp">
        <ThreadSection></ThreadSection>
        <MessageSection></MessageSection>
    </div>

</template>
<script type="text/ecmascript-6">
    import MessageSection from './MessageSection.vue'
    import ThreadSection from './ThreadSection.vue'
    export default{
        name: 'Hello',
        components: {
            ThreadSection,
            MessageSection
        },
        created(){
            this.$store.dispatch('getAllMessages')
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
