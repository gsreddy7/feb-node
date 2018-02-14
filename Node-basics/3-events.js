/**
 * 
 */


let EventEmitter = require('events').EventEmitter;

//let ee=new EventEmitter();
//ee.on('some-event',function(){
//	console.log('some-event handled...first');
//});
//ee.on('some-event',function(){
//	console.log('some-event handled...second');
//});
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('some-event');

//------------------------------------------



//---------------------------------------------
class Door extends EventEmitter {
	open() {
		console.log('door opened...');
		this.emit('open', {
			floor : 3,
			num : 302
		})
	}
	close() {
		console.log('door closed...');
		this.emit('close', {
			floor : 3,
			num : 302
		})
	}
}

let door = new Door();

//---------------------------------------------
// light

let light = {
	setUp : function() {
		door.on('open', function(event) {
			console.log(`Light ON...in....${event.floor} - ${event.num}`);
		})
		door.on('close', function(event) {
			console.log(`Light OFF...in....${event.floor} - ${event.num}`);
		});
	}
};
light.setUp();


let AC = {
	setUp : function() {
		door.on('open', function(event) {
			console.log(`AC ON...in....${event.floor} - ${event.num}`);
		})
		door.on('close', function(event) {
			console.log(`AC OFF...in....${event.floor} - ${event.num}`);
		});
	}
};
AC.setUp();


//---------------------------------------------

setTimeout(function() {
	door.open();
	setTimeout(function() {
		door.close();
	}, 2000);
}, 2000)