<template>
    <header>
        <h1>{{ lol }}</h1>
        <h1>{{ titleHeader }}</h1>
        </header>
</template>

<script>
export default {
    name: 'comp-header',
    props: {
        titleHeader:String
    },
    data() {
        return {
            lol: 'Header'
        }
    }
}
</script>

<style>

</style>
