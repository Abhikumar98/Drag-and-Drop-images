import React from 'react';
import { DisplayFiles } from './DisplayFiles';

const DisplayImages = (props) => {
    var files = props.history.location.state.file;
    console.log(props.history.location.state.file);
    
    return(
        <div>
            <h3>Uploaded Files are : </h3>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {files.map((file,i)=> <DisplayFiles key={i} name={file.name} size={file.size} />)}
            </div>
        </div>
    )
}

export default DisplayImages;