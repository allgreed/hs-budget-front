var jsFire = {
	
	//Business logic
	indexInit: function(){

	},
	cennikInit: function(){

	},
	commonInit: function(){

	},

	//Constroller
	init: function(){
		var $html = $('html');

		if($html.hasClass('index')){
			this.commonInit();
			this.indexInit();
		} else {
			this.commonInit();
		}		
	}
};

//Self init
jsFire.init();