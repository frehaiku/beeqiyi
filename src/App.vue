<template>
    <div id="app">
        <router-link to="/channel">To 频道</router-link>
        <router-link to="/channelDetail">To 频道详情</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'a'
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
