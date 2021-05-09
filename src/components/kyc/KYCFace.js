import React from 'react';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import { CardButton, CardButton2, CardTakeCamera, CardTextFieldName, CardTitle, EachCard, EachCardSegmentNoHover, PageContainer } from '../../styles/kyc/KYCBasicStyle';
import { KYCStepper } from './KYCStepper';
import { KYCMiddleData } from './KYCMiddleData';

const KYCFace = () => {

    function handleTakePhoto(dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }

    function handleTakePhotoAnimationDone(dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }

    function handleCameraError(error) {
        console.log('handleCameraError', error);
    }

    function handleCameraStart(stream) {
        console.log('handleCameraStart');
    }

    function handleCameraStop() {
        console.log('handleCameraStop');
    }

    return (
        <>

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
                                <EachCard style={{ height: '35em' }}>
                                    <EachCardSegmentNoHover>
                                        <CardTitle><b>Face Identification</b></CardTitle>
                                    </EachCardSegmentNoHover>

                                    <EachCardSegmentNoHover>
                                        <CardTextFieldName>Capture Your Face</CardTextFieldName>

                                        <CardTakeCamera>
                                            <Camera
                                                onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
                                                onTakePhotoAnimationDone={(dataUri) => { handleTakePhotoAnimationDone(dataUri); }}
                                                onCameraError={(error) => { handleCameraError(error); }}
                                                idealFacingMode={FACING_MODES.ENVIRONMENT}
                                                idealResolution={{ width: 640, height: 480 }}
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

                                        </CardTakeCamera>

                                    </EachCardSegmentNoHover>
                                </EachCard>
                            </Grid>

                            <Grid container spacing={3}>
                                <Grid item lg={6} md={6} xs={6} sm={6}>
                                    <Link to='/kyc/first-step/'>
                                        <CardButton2>Previous</CardButton2>
                                    </Link>
                                </Grid>

                                <Grid item lg={6} md={6} xs={6} sm={6}>
                                    <Link to='/kyc/last-step/'>
                                        <CardButton>Next</CardButton>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </PageContainer>
        </>
    )
};

export default KYCFace;
