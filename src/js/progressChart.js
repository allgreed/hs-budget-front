function progressChart(canvas, progress)
{
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.progressToRadians = function(val) 
    {
        if(val <= 25 && val >= 0)
        {
            return (1.5 + val / 50) * Math.PI;
        }
        else if(val > 25 && val < 100)
        {
            return ((val - 25) / 50) * Math.PI;
        }
        else
        {
            return 3.5 * Math.PI;
        }
    };
    this.applyShadow = function(blur)
    {
        this.ctx.shadowColor = "rgba(0,0,0,0.5)";
        this.ctx.shadowOffsetX = 5; 
        this.ctx.shadowOffsetY = 5; 
        this.ctx.shadowBlur = blur;
    };
    this.drawProgress = function(val)
    {
        var radius = this.canvas.width / 2.728395062;
        var lineWidth = this.canvas.width / 11.05;
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = lineWidth;

        var startAngle = 1.5 * Math.PI;
        var endAngle = this.progressToRadians(val);

        var grad= this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        grad.addColorStop(0, "orange");
        grad.addColorStop(1, "#e25440");

        // Drawing background
        this.ctx.beginPath();
        this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, radius, 0, 2 * Math.PI);
        this.applyShadow(20);
        this.ctx.strokeStyle = 'rgba(0,0,0,0.5)';
        this.ctx.stroke();

        // Drawing actual progress
        this.ctx.beginPath();
        this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, radius, startAngle, endAngle);
        this.applyShadow(20);
        this.ctx.strokeStyle = grad;
        this.ctx.stroke();

        // Drawing text
        this.ctx.font = '30pt Lato';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.applyShadow(5);
        this.ctx.fillStyle = grad;
        this.ctx.fillText(val + " %", this.canvas.width / 2, this.canvas.height / 2);        
    };
    this.animate = function(endProgress, currentProgress)
    {
        var _self = this;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawProgress(currentProgress);
        if(currentProgress < endProgress)
        {
            currentProgress += 1;
            window.requestAnimationFrame(function()
            {
                setTimeout(function()
                {
                    _self.animate(endProgress, currentProgress);
                }, 20);
            });  
        }  
    };
    this.animate(progress, 0);
}
