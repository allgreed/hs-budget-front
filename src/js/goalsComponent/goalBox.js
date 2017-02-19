module.exports = {
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
            var progressChart = require('./progressChart.js');
            new progressChart(canvas, binding.value);
        }
    }
};
