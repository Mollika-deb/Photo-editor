import React, { useState } from 'react';
import './Editor.css';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';
import storeData from './LinkedList';
import { GrRotateLeft, GrRotateRight } from 'react-icons/gr'
import { CgMergeVertical, CgMergeHorizontal } from 'react-icons/cg'
import { IoMdUndo, IoMdRedo, IoIosImage } from 'react-icons/io'

const Editor = () => {
    const filterElement = [
        {
            name: 'brightness',
            maxValue: 200
        },
        {
            name: 'grayscale',
            maxValue: 200
        },
        {
            name: 'sepia',
            maxValue: 200
        },
        {
            name: 'saturate',
            maxValue: 200
        },
        {
            name: 'contrast',
            maxValue: 200
        },
        {
            name: 'hueRotate'
        }
    ];
    const [property, setProperty] = useState(
        {
            name: 'brightness',
            maxValue: 200
        }
    )

    const [state, setState] = useState({
        image: '',
        brightness: 100,
        grayscale: 0,
        sepia: 0,
        saturate: 100,
        contrast: 100,
        hueRotate: 0,
        rotate: 0,
        vartical: 1,
        horizental: 1
    });
    const [crop, setCrop] = useState('');
    const [details, setDetails] = useState('');

    const imageHandler = event => {
        if (event.target.files !== 0) {


            const reader = new FileReader()

            reader.onload = () => {
                setState({
                    ...state,
                    image: reader.result
                })
                const stateData = {
                    image: reader.result,
                    brightness: 100,
                    grayscale: 0,
                    sepia: 0,
                    saturate: 100,
                    contrast: 100,
                    hueRotate: 0,
                    rotate: 0,
                    vartical: 1,
                    horizental: 1
                }
                storeData.insert(stateData)
            }
            reader.readAsDataURL(event.target.files[0])
        }
    }

    const inputHandle = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const leftRotate = () => {
        setState({
            ...state,
            rotate: state.rotate - 90
        })
        const stateData = state
        stateData.rotate = state.rotate - 90
        storeData.insert(stateData)
    }

    const rightRotate = () => {
        setState({
            ...state,
            rotate: state.rotate + 90
        })
        const stateData = state
        stateData.rotate = state.rotate + 90
        storeData.insert(stateData)
    }

    const varticalFlip = () => {
        setState({
            ...state,
            vartical: state.vartical === 1 ? -1 : 1
        });
        const stateData = state
        stateData.vartical = state.vartical === 1 ? -1 : 1
        storeData.insert(stateData)
    }

    const horizentalFlip = () => {
        setState({
            ...state,
            horizental: state.horizental === 1 ? -1 : 1
        });
        const stateData = state
        stateData.horizental = state.horizental === 1 ? -1 : 1
        storeData.insert(stateData)
    }

    const redo = () => {
        const data = storeData.redoEdit()
        if (data) {
            setState(data)
        }
    }
    const undo = () => {
        const data = storeData.undoEdit()
        if (data) {
            setState(data)
        }
    }

    const imageCrop = () => {
        const canvas = document.createElement('canvas')
        const scaleX = details.naturalWidth / details.width
        const scaleY = details.naturalHeight / details.height
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext('2d')

        ctx.drawImage(
            details,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        )

        const base64Url = canvas.toDataURL('image/jpg')

        setState({
            ...state,
            image: base64Url
        })
    }

    const saveImage = () => {
        const canvas = document.createElement('canvas')
        canvas.width = details.naturalHeight
        canvas.height = details.naturalHeight
        const ctx = canvas.getContext('2d')

        ctx.filter = `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`

        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate(state.rotate * Math.PI / 180)
        ctx.scale(state.vartical, state.horizental)

        ctx.drawImage(
            details,
            -canvas.width / 2,
            -canvas.height / 2,
            canvas.width,
            canvas.height
        )

        const link = document.createElement('a')
        link.download = 'image_edit.jpg'
        link.href = canvas.toDataURL()
        link.click()
    }

console.log(state)
console.log(property)

    return (
        <div className='imageEditor'>
            <div className="card">
                <div className="cardHeader">
                    <h2 className='text-3xl font-bold text-gray-300'>Image Editor</h2>
                </div>
                <div className="cardBody">
                    <div className="sidebar">
                        <div className="sideBody">
                            <div className="filterSection ">
                                <h1 className='text-purple-700 font-semibold text-xl'>Filters</h1>
                                <div className="filterKey">
                                {
                                        filterElement.map((element, i) => <button className={property.name === element.name ? 'active' : ''} onClick={() => setProperty(element)} key={i} >{element.name}</button>)
                                    }
                                </div>
                            </div>
                            <div className="filter_slider">
                                <div className="label_bar">
                                    <label htmlFor="range">Rotate</label>
                                    <span>100%</span>
                                </div>
                                <input onChange={inputHandle} className='inputBar' name={property.name}  value={state[property.name]} max={property.maxValue} type="range" />
                            </div>
                            <div className="rotate ">
                                {/* <label htmlFor="">Rotate & Filp</label> */}
                                <h2 className='text-xl font-semibold text-purple-700'>Rotate & Flip</h2>
                                <div className="icon mb-5">
                                    <div onClick={leftRotate}><GrRotateLeft /></div>
                                    <div onClick={rightRotate}><GrRotateRight /></div>
                                    <div onClick={varticalFlip}><CgMergeVertical /></div>
                                    <div onClick={horizentalFlip}><CgMergeHorizontal /></div>
                                </div>
                            </div>
                            <div className="reset">
                                <button>Reset</button>
                                <button onClick={saveImage}  className='save'>Save Image</button>
                            </div>
                        </div>
                    </div>
                    <div className="image_section">
                        <div className="image">

                        {
                                state.image ? <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                                    <img onLoad={(event) => setDetails(event.currentTarget)} style={{ filter: `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`, transform: `rotate(${state.rotate}deg) scale(${state.vartical},${state.horizental})` }} src={state.image} alt="" />
                                </ReactCrop> :
                                    <label htmlFor="choose">
                                        <IoIosImage />
                                        <span>Choose Image</span>
                                    </label>
                            }
                        </div>
                        <div className="image_select">
                            <button onClick={undo} className='undo'><IoMdUndo /></button>
                            <button onClick={redo} className='redo'><IoMdRedo /></button>
                            {
                                crop && <button onClick={imageCrop} className='crop'>Crop Image</button>
                            }
                            <label htmlFor="choose">Choose Image</label>
                            <input onChange={imageHandler} type="file" id='choose' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Editor;