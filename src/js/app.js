var Vue = require("../bower_components/vue/dist/vue.js");
var VueResource = require("../bower_components/vue-resource/dist/vue-resource.js");

Vue.use(VueResource);

new Vue({
    el: "#app",
    components:
    {
        "hs-goals": require('./goalsComponent/index.js'),
    }
});
