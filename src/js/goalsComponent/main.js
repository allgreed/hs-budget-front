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

module.exports = {
    template: document.getElementById("template-goals").innerHTML,
    data: function()
    {
        return {
            goals: sampleJSON,
        };
    },
    components:
    {
        "hs-goal": require('./goalBox.js'),
    }
};
