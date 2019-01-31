const addstwo = require('../JS/functions.js');
//this test should pass
test ('adds 24 to 1 to equal 25', () => {
	expect(addstwo(24,1).toBe(25);
	});
//this test should fail
test ('adds 24 to 0 to equal 25', () => {
	expect(addstwo(24,0).toBe(25);
	});
