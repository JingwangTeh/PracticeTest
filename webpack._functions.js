module.exports = {
	
	// Function to convert an array of paths into object (e.g. { 'index.js' : 'C:/path/to/index.js' })
	toObject: (paths) => {
	  var ret = {};
	  paths.forEach(function(path) {
		// you can define entry names mapped to [name] here
		let name = path.split('/').slice(-1)[0];
		ret[name] = path;
	  });
	  return ret;
	},
	
}