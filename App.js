
import './App.css';

import React, {Component} from 'react';
import axios from 'axios';

/*
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
*/
class App extends Component{
   state={
     selectedFile: null,
     fileUploadedSuccessfully: false
   }

   onFileChange = event =>{
     this.setState({selectedFile: event.target.files[0]});
   }
   onFileUpoload = async () => {
    const formData = new FormData();
    formData.append(
      'demo file',
      this.state.selectedFile,
      this.state.selectedFile.name
    );
/*
     //aws param
     var params = {
      Bucket : 'cipher-storage',//,
      Key: 'data/test123.txt'
     //  Delimiter: '/'
    //  Prefix: 'https://cipher-storage.s3.amazonaws.com/data/'
    
    };
    */
    //call api
    await axios
      .post(
        'https://magirovyd0.execute-api.us-east-1.amazonaws.com/prod/file-upload-resource',
        formData
      )
      .then((res) => {
        console.log(res);
        this.setState({ selectedFile: null });
        this.setState({ fileUploadedSuccessfully: true });
      });

     // var url=s3.getSignedUrl('getObject' ,params);
      //console.log(url);
  };
 
  //list 

    fileData= () =>{
      
      if(this.state.selectedFile){
        return(
        <div>
          <h2>File details:</h2>
          <p>File name: {this.state.selectedFile.name}</p>
          <p>File type: {this.state.selectedFile.type}</p>
          <p>Last modified: {" "}
          {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      )
      }
      
      else if(this.state.fileUploadedSuccessfully){
        return(
          <div>
            <br />
            <h4>Your file uploaded successfully!!</h4>
            
          </div>
        )
      }
      else{
        return(
          <div>
            <br />
            <h4>
              choose a file then press upload
            </h4>
          </div>
        )
      }
    }

   

   render() {
    //let navigate= useNavigate();
    return(
      
      <div className="container">
      <h2>Upload File</h2>
      <h3>File uploaded to AWS</h3>
   
          <div>
            <input type="file" onChange={this.onFileChange} />

            <button onClick={this.onFileUpoload} >Upload
            </button>
          </div>  

    {this.fileData()}
   
   

    </div>

 
    )
   }
}
/*
 <button onClick={()=>{
      navigate("/listFile")
    }}
    />

      <BrowserRouter>
      <Routes>
          <Route path="/listFile" element={<ListFile/>} />
          
          </Routes>
     </BrowserRouter>
      */
export default App;
