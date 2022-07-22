<template>
    <div id="app">
        <TestButton
            ButtonText="This is a button"
            TextAboveButton="Text above the button"
        ></TestButton>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import TestButton from "./components/TestButton.vue";

@Component({
    components: {
        HelloWorld,
        TestButton,
    },
})
export default class App extends Vue {}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
