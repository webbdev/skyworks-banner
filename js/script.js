// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background;
	var title1;
	var blue1;
	var samsung;
	var voucher;
	var skyLogo;
	var title2;
	var stamp;
	var title3;
	var blue3;
	var text3;
	var button;
	
	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("myCanvas");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);

	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "skyLogo", src:"images/sky.png"},
		{id: "voucher", src:"images/voucher.png"},
		{id: "samsung", src:"images/samsung.png"}
	]);
	

	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );

		samsung = new createjs.Bitmap( loader.getResult( "samsung" ) );
		samsung.x = 55;
		samsung.y = 115;

		voucher = new createjs.Bitmap( loader.getResult( "voucher" ) );
		voucher.x = 165;
		voucher.y = 115;

		skyLogo = new createjs.Bitmap( loader.getResult( "skyLogo" ) );
		skyLogo.x = 20;
		skyLogo.y = 208;

		// set the background bitmap alpha to zero.
		background.alpha = 0;

		// add background to the display list.
		stage.addChild( background );

		stage.addChild(samsung);
		stage.addChild(voucher);
		stage.addChild(skyLogo);
		
		
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 0 );
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		
		// refer to the creative brief, frame 1 for guidance.
		title1 = new createjs.Bitmap("images/title1.png");
		title1.x = 55;
		title1.y = 20;

		blue1 = new createjs.Bitmap("images/blue-copy1.png");
		blue1.x = 55;
		blue1.y = 45;

		stage.addChild(title1);
		stage.addChild(blue1);

		// set the title1, blue1 alpha to zero.
		title1.alpha = 0;
		blue1.alpha = 0;

		// animate title1, blue1 alpha value to 1 over the duration of 2000-3000 milliseconds.
		createjs.Tween.get( title1 ).to( {alpha:1}, 1000 ).wait(2000).to({alpha:0, visible:false}, 2000);
		createjs.Tween.get( blue1 ).to( {alpha:1}, 2000 ).wait(1000).to({alpha:0, visible:false}, 2000);

	  	samsung.alpha = 1;
	  	voucher.alpha = 1;
	    createjs.Tween.get(samsung).wait(2500).to({alpha:0, visible:false}, 2500);
	    createjs.Tween.get(voucher).wait(2500).to({alpha:0, visible:false}, 2500);
		
		
		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 5000);
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		
		// refer to the creative brief, frame 2 for guidance.
		title2 = new createjs.Bitmap("images/title2.png");
		title2.x = 43;
		title2.y = 20;

		stamp = new createjs.Bitmap("images/stamp.png");
		stamp.x = 66;
		stamp.y = -140;

		var txt2 = new createjs.Text("Sky Line Rental at £16.40pm applies", "11px 'myFontMedium'", "#282828");
		txt2.x = 123;
		txt2.y = 220;

		// add items to the display list.
		stage.addChild(title2);
		stage.addChild(txt2);
		stage.addChild(stamp);
		

		title2.alpha = 0;
		txt2.alpha = 0;
		stamp.alpha = 0;

		createjs.Tween.get( title2 ).to( {alpha:1}, 2000 ).wait(2500).to({alpha:0, visible:false}, 1000);
		createjs.Tween.get( txt2 ).to( {alpha:1}, 2500 ).wait(1500).to({alpha:0, visible:false}, 1000);

		createjs.Tween.get(stamp).to( {alpha:1}, 1500 ).to({x:66}, 1000, createjs.Ease.quadOut).wait(1000).to({alpha:0, visible:false}, 2000);
		createjs.Tween.get(stamp).to( {alpha:1}, 1500 ).to({y:65}, 1000, createjs.Ease.bounceOut).wait(1000).to({alpha:0, visible:false}, 2000);
		createjs.Ticker.addEventListener("tick", stage);

		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 6000);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		
		// refer to the creative brief, frame 3 for guidance.
		button = new createjs.Bitmap("images/button.png");
		button.x = 150;
		button.y = 200;

		title3 = new createjs.Bitmap("images/title3.png");
		title3.x = 11;
		title3.y = 30;

		blue3 = new createjs.Bitmap("images/blue-copy3.png");
		blue3.x = 41;
		blue3.y = 82;

		text3 = new createjs.Bitmap("images/text3.png");
		text3.x = 74;
		text3.y = 138;

		var txt3 = new createjs.Text("Sky Line Rental at £16.40pm applies", "9px 'myFontMedium'", "#afafaf");
		txt3.x = 82;
		txt3.y = 180;

		button.alpha = 0;
		title3.alpha = 0;
		blue3.alpha = 0;
		text3.alpha = 0;
		txt3.alpha = 0;

		// add items to the display list.
		stage.addChild(button);
		stage.addChild(title3);
		stage.addChild(blue3);
		stage.addChild(text3);
		stage.addChild(txt3);

		
		createjs.Tween.get( button ).to( {alpha:1}, 100 );
		createjs.Tween.get( title3 ).to( {alpha:1}, 3000 );
		createjs.Tween.get( blue3 ).to( {alpha:1}, 4000 );
		createjs.Tween.get( text3 ).to( {alpha:1}, 5000 );
		createjs.Tween.get( txt3 ).to( {alpha:1}, 6000 );
	}

};
