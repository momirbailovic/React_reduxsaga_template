import React, { Component, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';

import './component.scss'
import defImg from '../../../assets/images/1.jpg'


function Previews(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    const thumbs = files.length === 0 ?
        (<div className="thumb" >
            <div className="thumbInner">
                <img className="img" src={defImg} alt="" />
            </div>
        </div>) :
        (files.map(file => (
        <div className="thumb" key={file.name}>
            <div className="thumbInner">
                <img src={file.preview} className="img" alt=""/>
            </div>
        </div>
    )));
    //console.log(files)

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className="previews">
            <aside className='thumbsContainer' style={{ width: '150px' }}>
                {thumbs}
            </aside>
            <div {...getRootProps({ className: 'dropzone' })} className="dragedroppanel">
                <input {...getInputProps()} />
                <p>Drag & drop your profile photo here or</p>
            </div>
        </div>
    );
}


export default class DragDropImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }

    render() {
        return (
            <div>
                <p className="txt"> Profile Image</p>
                <div className="dragdroppreview">
                    <Previews />
                </div>
            </div>
        )
    }
}
