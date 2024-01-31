const { Schema, model } = require("mongoose");

const filenodeSchema = new Schema({
	type: { type: String, required: true },
	bucket: { type: String, required: true },
	generation: { type: String },
	metageneration: { type: String },
	fullPath: {
		type: String,
		required: true,
	},
	name: { type: String, required: true },
	size: { type: Number },
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
	md5Hash: { type: String, required: true },
	contentDisposition: { type: String },
	contentEncoding: { type: String },
	contentType: { type: String },
	rootDirectory: { type: String, required: true },
	parentDirectory: { type: String, required: true },
});

const Filenode = model("filenode", filenodeSchema);
module.exports = Filenode;
