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

new Vue
({
    el: "#budget-goals",
    data: function()
    {
        return {
            goals: sampleJSON,
        };
    }
});
