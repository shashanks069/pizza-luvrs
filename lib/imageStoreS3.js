const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.expoer.save = (name,data,callback) => {
	
	let params = {
		
		Bucket: 'wmg-data-temp',
		Key: `pizzas/${name}.png`,
		Body: new Buffer(data,'base64'),
		ContentEncoding: 'base64',
		ContentType: 'image/png'
	};
	
	s3.putObjects(params,(err,data) =>{
		callback(err,`//s3.amazonaws.com/wmg-data-temp/${params.Key}`);
	});
};
