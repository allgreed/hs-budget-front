var sampleJSON =
[
        {
            currentMoney: 200,
            neededMoney: 500,
            text: "Dziwki"
        },
        {
            currentMoney: 30,
            neededMoney: 200,
            text: "Koks"
        },
        {
            currentMoney: 200,
            neededMoney: 1000,
            text: "Wóda"
        },
];

var hsGoalComponent = {
    template: document.getElementById("template-goal").innerHTML,
    props: ['currentMoney', 'neededMoney', 'text'],
    computed:
    {
        progress: function()
        {
            return this.currentMoney / this.neededMoney * 100;
        }
    },
    directives:
    {
        draw: function(canvas, binding)
        {
            new progressChart(canvas, binding.value);
        }
    },
    methods:
    {
        adjustCanvas: function()
        {

        }
    },  
};

Vue.component("hs-goals", {
    template: document.getElementById("template-goals").innerHTML,
    data: function()
    {
        return {
            goals: sampleJSON,
        };
    },
    components:
    {
        "hs-goal": hsGoalComponent,
    }
});
