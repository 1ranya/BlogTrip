import React, { Component } from 'react';
 
class UploadFlag extends Component {
  state =  {
    selectedFile: null,
    imagePreviewUrl: null
  };
 
  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
 
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      })
    }
 
    reader.readAsDataURL(event.target.files[0])
  }
 
  submit = () => {
 
    var fd = new FormData();
 
    fd.append('file', this.state.selectedFile);
 
    var request = new XMLHttpRequest();
 
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        alert('Uploaded!');
      }
    };
    request.open("POST", "https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload", true);
    request.send(fd);
  }
 
  render() {
 
    let $imagePreview = (<div className="previewText image-container"></div>);
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
    }
 
    return (
        <div class="field is-horizontal">
            <div class="field-label"></div>
            <div className='field-body'>
                <div class="field">  
                    <a class="button is-text uploadDrapeauLink" name="avatar">
                        Insérer le drapeau
                        <i class="fas fa-download"></i>
                    </a>
                    <input class="inputFile" type="file" name="avatar" onChange={this.fileChangedHandler} />
                    {/* <a class="button is-info is-inverted" type="button" onClick={this.submit} > Upload </a> */}
                    <br/>
                    <br/>
                    { $imagePreview }
                </div>
            </div>
      </div>
    );
  }
}
 
export default UploadFlag;