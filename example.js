var xenialdb = require('./libs.js')
var db = new xenialdb('file.json')

db.ready = function(){



	//Manipulate db.v object as you want

  db.value.c= "adhvaith is the best"
  db.value.d="hello"
	//Write db.value to file.json
	db.write(function(){
		console.log("Data stored!")
    console.log(db.value);
	})
	
}
