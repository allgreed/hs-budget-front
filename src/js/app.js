var Vue = require("../bower_components/vue/dist/vue.js");

new Vue({
    el: "#app",
    components:
    {
        "hs-goals": require('./goalsComponent/main.js'),
    }
});
