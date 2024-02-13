const Filenode = require("../../models/filenode/filenode.model");

// Checks for duplicate files in database
// Ensures cloud and server synchronization
const lookup = async(req, res, next) => {
	const checksum = req.body.checksum;
	
	const query = { checksum };
	const result = await Filenode.exists(query);
	
	res.send({ exists: result ? true : false })
}

module.exports = lookup;
