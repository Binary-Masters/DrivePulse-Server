const { Schema, model } = require("mongoose");

const fileSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	type: { // folder or file
		type: String,
		required: true,
	},
	path: {
		type: String,
		required: true,
	},
	size: {
		type: Number,
		required: true,
	},
	owner: {
		type: String,
		rquired: true,
	},
	format: {
		type: String,
		required: true,
	},
	permissions: {
		read: { type: Boolean, require: true },
		write: { type: Boolean, required: true }
	},
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
	updatedAt: {
		type: String,
		default: new Date().toISOString(),
	}
})

const File = model("File", fileSchema);
module.exports = File;
