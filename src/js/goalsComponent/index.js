module.exports = {
    template: document.getElementById("template-goals").innerHTML,
    data: function()
    {
        var link = 'http://allgreed.pythonanywhere.com/';

        this.$http.get(link).then(

            function(response)
            {
                this.goals = response.body;
            },
            function(response)
            {
                console.log("Pszypau :c");
            });

        return {
            goals: null,
        };
    },
    components:
    {
        "hs-goal": require('./goalBox.js'),
    },
};
