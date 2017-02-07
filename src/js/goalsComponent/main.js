var sampleJSON =
[
        {
            currentMoney: 1230.58,
            neededMoney: 900,
            text: "Rzutnik bez śniegu"
        },
        {
            currentMoney: 350.6,
            neededMoney: 900,
            text: "Drukarka 3D"
        },
        {
            currentMoney: 15.9,
            neededMoney: 60,
            text: "Ciastka i napoje"
        },
        {
            currentMoney: 10,
            neededMoney: 60,
            text: "Zdrowe jedzenie i woda"
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
