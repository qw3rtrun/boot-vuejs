import {createApp} from "vue";
import Module from "./Module.vue";

createApp(Module, {"msg": "Hello Sub!"}).mount('#module')