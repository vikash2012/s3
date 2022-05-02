
var async = require('async');
import React, {Component} from 'react';
var fs = require('fs');
var AWS = require('aws-sdk');
const express= require("express");
const app=express();
//const multer= require("multer");
//const multers3= require("multer-s3");

app.listen(3001);


var AWS_KEY = 'AKIA2GSKIDNT7DE6A2G7'
var AWS_SECRET = 'laBR8Hsix4gMIiy2nKWnWPDD2oVCnGWjkjWHM7Mh+';
var BUCKET = 'cypher-storage';
var PREFIX = 'https://cipher-storage.s3.amazonaws.com/data/';



AWS.config.update({
	accessKeyId: AWS_KEY, 
	secretAccessKey: AWS_SECRET, 
	region: process.env.Region
});


var s3 = new AWS.S3();

class Download extends Component{

	onDownload = async () => {
		
		
	var params = {
	Bucket : 'cipher-storage',//,
	Key: 'data/test123.txt'
   //  Delimiter: '/'
  //  Prefix: 'https://cipher-storage.s3.amazonaws.com/data/'
    };
	var url=s3.getSignedUrl('getObject' ,params);
	console.log(url);
}
/*
export default app.get("/list", async(req,res)=>{
	console.log(req.file);
	let r=await s3.listObjectsV2({Bucket:BUCKET}).promise();
	let x=r.Contents.map(item=>item.Key);
	res.send(x);
})

/*

export default s3.listObjects(params, function(err, data){
	if (err) return console.log(err);

	async.eachSeries(data.Contents, function(fileObj, callback){
		var key = fileObj.Key;
		console.log('Downloading: ' + key);

		var fileParams = {
			Bucket: BUCKET,
			Key: key
		}

		s3.getObject(fileParams, function(err, fileContents){
			if (err) {
				callback(err);
			} else {
				
				var contents = fileContents.Body.toString();
				
				// 
				
				callback();
			}
		});
	}, 
	function(err) {
		if (err) {
			console.log('Failed: ' + err);
		} else {
			console.log('Finished');
		}
	});
});

*/


render() {
    //let navigate= useNavigate();
    return(
      
      <div className="container">
      <h2>Download File</h2>
      
   
          <div>
            <button onClick={this.onDownload} >Download
            </button>
          </div>  

		  </div> 
	)
   
}

}

export default Download;
