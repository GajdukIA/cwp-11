let actors = require("../../actors.json");
const valid = require("./valid");
const fs = require('fs');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.createActor = function(req, res, payload, cb) {
    console.log(req.url);
	if (valid.valid("/api/actors/create", payload)) {
		//console.log(JSON.parse(payload));
		let manyId = [];
		//console.log(actors);
		let act=actors;

		act.forEach((actor) =>
		{
			manyId.push(actor.id);
			//console.log(actor.id);
		});
		console.log('ok');
		payload.id = Math.max.apply(null, manyId) + 1;
		actors.push(payload);
		fs.writeFile("actors.json", JSON.stringify(actors), "utf8", function () {});
		cb(null, payload);
	}
	else
	{
		cb(ErrorObject);
	}
};