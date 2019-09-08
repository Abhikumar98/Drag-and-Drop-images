import React from 'react';
import './../App.css';
import { Addfiles } from './Addfiles';
import { UploadAddFiles } from './UploadAddFiles';

class App extends React.Component{
  state = {
    files: []
  }
  fileSelected = (e) => {
    var files = Object.keys(e.target.files).map(index => e.target.files[index])
    this.handleFileDrop(files);
  }
  handleFileDrop = (newFile) => (this.setState({
        files: [...this.state.files, ...newFile]
      }))

  fileUpload = () => {
    this.setState({
      files: []
    })
    console.log("files uploaded",this.state.files)
  }
  removeFile = (id) => {
    this.state.files.splice(id,1);
    this.setState({
      files: this.state.files
    })
  }
  render()
  {
    return(
      <div className='containerDiv'>
        <Addfiles fileSelected={this.fileSelected}
                  handleFileDrop={this.handleFileDrop}
                  fileUpload={this.fileUpload}
                  allfiles={this.state.files}
                  removeFile={this.removeFile} />
        <UploadAddFiles fileSelected={this.fileSelected}
                        allfiles={this.state.files}
                        fileUpload={this.fileUpload} />
      </div>
    )
  }
}

export default App;
