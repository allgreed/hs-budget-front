Vue.component('hs-goal', {
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
});
