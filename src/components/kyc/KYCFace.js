import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ErrorOutlinedIcon from '@material-ui/icons/ErrorOutlined';

import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { DropzoneArea } from 'material-ui-dropzone';

import { CardButton, CardButton2, CardImg, CardTakeCamera, CardCameraErr, CardCameraErrText, CardTextFieldName, CardTitle, EachCard, EachCardSegmentNoHover, PageContainer } from '../../styles/kyc/KYCBasicStyle';
import { KYCStepper } from './KYCStepper';
import { KYCMiddleData } from './KYCMiddleData';
import { PageTransition } from '../../AppStyle';

const KYCFace = () => {

    const [showCamera, setShowCamera] = useState(false);
    const [showUploadImage, setShowUploadImage] = useState(false);
    const [showBtnText, setShowBtnText] = useState('Start Camera');
    const [showInstruction, setShowInstruction] = useState('Choose an Option!');
    const [showErr, setShowErr] = useState(false);

    const [imgData, setImgData] = useState('');

    const handleCameraState = () => {
        setShowErr(false);
        if (showCamera) {
            setShowCamera(false);
            setShowBtnText('Start Camera');
            setShowUploadImage(false);
            setShowInstruction('Choose an Option!');
        } else {
            setShowCamera(true);
            setShowBtnText('Stop Camera');
            setShowUploadImage(false);
            setShowInstruction('Capture Your Face');
        }
    }

    const handleUploadState = () => {
        setShowUploadImage(true);
        setShowCamera(false);
        setShowBtnText('Start Camera');
        setShowInstruction('Upload Your Image!');
        setShowErr(false);
    }

    const handleTakePhoto = (dataUri) => {
        setImgData(dataUri);
        setShowErr(false);
        setTimeout(() => {
            setShowCamera(false);
            setShowBtnText('Retake');
        }, 2000)
    }

    const handleTakePhotoAnimationDone = (dataUri) => {

    }

    const handleCameraError = (error) => {
        setShowErr(true);
        setShowCamera(false);
        setShowUploadImage(false);
    }

    const handleCameraStart = (stream) => {
    }

    const handleCameraStop = () => {
    }

    const file = new File([""], {
        type: "text/plain",
    });

    const handleUploadImg = (e) => {
        console.log('selected', e)
    }

    return (
        <>

            <PageTransition>
                <PageContainer>
                    <Grid container spacing={4} justify="center">

                        <Grid item lg={8} md={8} xs={12} sm={12}>

                            <Grid container>
                                <Grid item lg={12} md={12} xs={12} sm={12}>
                                    <EachCard>
                                        <KYCStepper step={2} />
                                    </EachCard>
                                </Grid>
                            </Grid>

                            <KYCMiddleData />

                            <Grid container style={{ marginTop: '2em' }}>
                                <Grid item lg={12} md={12} xs={12} sm={12}>
                                    <EachCard style={{ minHeight: '48em' }}>
                                        <EachCardSegmentNoHover>
                                            <CardTitle><b>Face Identification</b></CardTitle>
                                        </EachCardSegmentNoHover>

                                        <EachCardSegmentNoHover>
                                            <CardTextFieldName>{showInstruction}</CardTextFieldName>

                                            {showErr && (
                                                <CardCameraErr>
                                                    <ErrorOutlinedIcon style={{ fontSize: '8em' }} />
                                                    <CardCameraErrText> Unfortunately, your device browser isn't supporting the camera module at the moment</CardCameraErrText>
                                                </CardCameraErr>
                                            )}

                                            <CardTakeCamera>
                                                {showCamera ? (
                                                    <Camera
                                                        onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
                                                        onTakePhotoAnimationDone={(dataUri) => { handleTakePhotoAnimationDone(dataUri); }}
                                                        onCameraError={(error) => { handleCameraError(error); }}
                                                        idealFacingMode={FACING_MODES.ENVIRONMENT}
                                                        idealResolution={{ width: 10, height: 10 }}
                                                        imageType={IMAGE_TYPES.JPG}
                                                        imageCompression={0.97}
                                                        isMaxResolution={true}
                                                        isImageMirror={false}
                                                        isSilentMode={false}
                                                        isDisplayStartCameraError={true}
                                                        isFullscreen={false}
                                                        sizeFactor={1}
                                                        onCameraStart={(stream) => { handleCameraStart(stream); }}
                                                        onCameraStop={() => { handleCameraStop(); }}
                                                    />
                                                ) :
                                                    (
                                                        <CardImg src={imgData} />
                                                    )}

                                                {showUploadImage ? (
                                                    <DropzoneArea
                                                        initialFiles={[file]}
                                                        acceptedFiles={['image/*']}
                                                        dropzoneText={"Drag and drop your picture here or click"}
                                                        onChange={(files) => handleUploadImg(files)}
                                                    />
                                                ) :
                                                    (
                                                        <CardImg src={imgData} />
                                                    )}

                                            </CardTakeCamera>
                                            <Grid container spacing={3}>
                                                <Grid item lg={6} md={6} xs={6} sm={6}>
                                                    <CardButton2 onClick={handleCameraState}>{showBtnText}</CardButton2>
                                                </Grid>
                                                <Grid item lg={6} md={6} xs={6} sm={6}>
                                                    <CardButton2 onClick={handleUploadState}>Or Upload Image</CardButton2>
                                                </Grid>
                                            </Grid>
                                        </EachCardSegmentNoHover>
                                    </EachCard>
                                </Grid>

                                <Grid container spacing={3}>
                                    <Grid item lg={6} md={6} xs={6} sm={6}>
                                        <Link to='/kyc/middle-step/'>
                                            <CardButton2>Previous</CardButton2>
                                        </Link>
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={6} sm={6}>
                                        <CardButton>Submit</CardButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </PageContainer>
            </PageTransition>
        </>
    )
};

export default KYCFace;
