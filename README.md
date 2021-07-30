# Xenialbase db
An open sourced asychronous nodejs module to create json databases


# Install 
```sh
$ npm i xenialdb
```
# Example
```js
var xenialdb = require('xenialdb')
var db = new xenialdb('data.json')
db.ready = function(){
  db.value.hello= "Hello"
  db.value.world="world"
  
	db.write(function(){
		console.log("Data stored!")
    console.log(db.value);
	})
	
}

```
### expected output
```sh
Data stored!
{ hello: 'Hello', world: 'world' }
```
