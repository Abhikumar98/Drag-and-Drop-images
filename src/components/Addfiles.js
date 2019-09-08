import React from 'react';
import Dropzone from 'react-dropzone';
import { DisplayUploads } from './DisplayUploads';
import background from './../images/background.jpg';

export const Addfiles = (props) => {
    var input;
return(
    <Dropzone onDrop={file => props.handleFileDrop(file)}>
        {
            ({ getRootProps, getInputProps }) => (
                <div className='selected-area-container'>
                    <div className='drag-drop-div' {...getRootProps()}>
                        <div style={{
                            height: '100%', 
                            width: '100%', 
                            overflow: 'auto', 
                            flexWrap: 'wrap',
                            display: 'flex',
                            backgroundImage: `url(${ props.allfiles != 0 ? null: background })`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '30%',
                            backgroundColor: 'white'}} >
                            {
                                props.allfiles.map(
                                    (file, i) => <DisplayUploads removeFile={props.removeFile} 
                                                                                name={file}
                                                                                key={i}
                                                                                index={i} />)
                            }
                        </div>
                        <input className='selectedArea'
                            onChange={props.fileSelected}
                            {...getInputProps()}
                            accept=".jpg, .jpeg, .png" />
                    </div>
                </div>
            )
        }
    </Dropzone>
)
    }