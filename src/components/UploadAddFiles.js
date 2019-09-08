import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export const UploadAddFiles = (props) => {
    var input;
    return(
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <input ref={file => input = file}
                onChange={props.fileSelected}
                style={{ display: 'none' }}
                type="file"
                accept=".jpg, .jpeg, .png"
                multiple />
            <Button outline color="primary" onClick={() => input.click()}>Add files</Button>
            <Link to={{
                pathname: "/displayimage",
                state: {
                    file: props.allfiles
                }
            }}>
                <Button outline color="success" onClick={props.fileUpload}>Upload</Button>
            </Link>
        </div>
    )
}