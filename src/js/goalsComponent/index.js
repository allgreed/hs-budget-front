module.exports = {
    template: document.getElementById("template-goals").innerHTML,
    data: function()
    {
        // TODO: fix the request xDDDD
        //var link = 'http://allgreed.pythonanywhere.com/';

        //this.$http.get(link).then(

            //function(response)
            //{
                //this.goals = response.body;
            //},
            //function(response)
            //{
                //console.log("Pszypau :c");
            //});

        return {
            goals: [
                {
                    currentMoney: 5,
                    neededMoney: 100,
                    text: "dziwki i kox",
                },
                {
                    currentMoney: 500,
                    neededMoney: 200,
                    text: "rzutnixxx",
                },
                {
                    currentMoney: 700,
                    neededMoney: 1000,
                    text: "czynż",
                },
                {
                    currentMoney: 1,
                    neededMoney: 5,
                    text: "dłuuuuugi dłuuuugi tekst co przełamie linię i to tak w całości",
                },
            ],
        };
    },
    components:
    {
        "hs-goal": require('./goalBox.js'),
    },
};
