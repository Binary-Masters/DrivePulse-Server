const { Schema, model } = require("mongoose");

const filenodeSchema = new Schema({
	type: { type: String, required: true },
	bucket: { type: String, required: true },
	fullPath: {
		type: String,
		required: true,
	},
	name: { type: String, required: true },
	size: { type: Number },
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
	parentPath: { type: String, required: true },
});

const Filenode = model("filenode", filenodeSchema);
module.exports = Filenode;
