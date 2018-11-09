const express = require('express');
const router = express.Router();
const logger = require('../../log/log.js');

const readAllActors = require("./readAllActors").readAll;
const readActor = require("./readActor").readActor;
const createActor = require("./createActor").createActor;
const updateActor = require("./updateActor").updateActor;
const deleteActor = require("./deleteActor").deleteActor;


router.get('/readall', (req, res) =>
{
	logger.log(`${req.url.toString()}\n`);
	console.log("readall");
	readAllActors(req, res, (err, result) =>
	{
		res.send(JSON.stringify(result));
	});
});

router.get('/read/:id', (req, res) =>
{
	console.log("read: " + req.params.id);
	logger.log(`${req.url.toString() + " " + req.params.id}\n`);
	readActor(req, res, req.params, (err, result) =>
	{
		if (err)
		{
			res.send(JSON.stringify(err));
		}
		else
		{
			res.send(JSON.stringify(result));
		}
	});
});

router.post('/create', (req, res) => {
	console.log("create "+req.body.name);
	logger.log(`${req.url.toString() + " " + req.body}\n`);
	//console.log(req.body);
	let reqs = req.body;
	createActor(req, res, reqs, (err, result) =>
	{
		if (err)
		{
			res.send(JSON.stringify(err));
		}
		else
		{
			res.send(JSON.stringify(result));
		}
	});
});

router.post('/update', (req, res) => {
	logger.log(`${req.url.toString() + " " + req.body}\n`);
	let reqs = req.body;
	console.log(req);
	updateActor(req, res, reqs, (err, result) =>
	{
		if (err)
		{
			res.send(JSON.stringify(err));
		}
		else
		{
			res.send(JSON.stringify(result));
		}
	});
});

router.post('/delete', (req, res) => {
	logger.log(`${req.url.toString() + " " + req.body}\n`);
	let reqs = req.body;
	deleteActor(req, res, reqs, (err, result) =>
	{
		if (err)
		{
			res.send(JSON.stringify(err));
		}
		else
		{
			res.send(JSON.stringify(result));
		}
	});
});

module.exports = router;