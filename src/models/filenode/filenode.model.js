const { Schema, model } = require("mongoose");

const filenodeSchema = new Schema({
	checksum: { type: String },
	owner: { type: String },
	type: { type: String, required: true },
	bucket: { type: String, required: true },
	fullPath: {
		// Points to cloud location ( must be synced with cloud )
		type: String,
		required: true,
	},
	name: { type: String, required: true },
	size: { type: Number, required: true },
	contentType: { type: String, required: true },
	timeCreated: {
		type: String,
		default: new Date().toISOString(),
		required: true,
	},
	updated: {
		type: String,
		default: new Date().toISOString(),
		required: true,
	},
	rootDirectory: { type: String, required: true },
	parentPath: { 
		// To mimic folder management system ( Changable )
		type: String,
		required: true
	}, 
});

const Filenode = model("filenode", filenodeSchema);
module.exports = Filenode;
