<template>
    <div>
        <div>{{ TextAboveButton }}</div>
        <input type="button" :value="ButtonText" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";

@Component({
    components: {},
})
export default class TestButton extends Vue {
    @Prop({ required: true })
    ButtonText: string;

    @Prop({ required: false })
    TextAboveButton: string;
}
</script>