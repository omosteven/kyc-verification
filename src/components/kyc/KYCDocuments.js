import React from 'react';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DropzoneArea } from 'material-ui-dropzone';

import { CardButton, CardButton2, CardFileUpload, CardSelectField, CardTextFieldName, CardTitle, EachCard, EachCardSegmentNoHover, PageContainer } from '../../styles/kyc/KYCBasicStyle';
import { KYCStepper } from './KYCStepper';
import { KYCMiddleData } from './KYCMiddleData';

const KYCDocuments = () => {

    const file = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });

    const handleSelect = (e) => {
        console.log('selected', e)
    }

    return (
        <>

            <PageContainer>
                <Grid container spacing={4} justify="center">

                    <Grid item lg={8} md={8} xs={12} sm={12}>

                        <Grid container>
                            <Grid item lg={12} md={12} xs={12} sm={12}>
                                <EachCard>
                                    <KYCStepper step={1} />
                                </EachCard>
                            </Grid>
                        </Grid>

                        <KYCMiddleData />

                        <Grid container style={{ marginTop: '2em' }}>
                            <Grid item lg={12} md={12} xs={12} sm={12}>
                                <EachCard style={{ height: '35em' }}>
                                    <EachCardSegmentNoHover>
                                        <CardTitle><b>Document</b></CardTitle>
                                    </EachCardSegmentNoHover>

                                    <EachCardSegmentNoHover>
                                        <CardTextFieldName>Select Document</CardTextFieldName>
                                        <CardSelectField onChange={handleSelect}>
                                            <option value='passport'>Passport</option>
                                            <option>Driver License</option>
                                            <option>National ID</option>
                                        </CardSelectField>

                                        <CardFileUpload>
                                            <DropzoneArea
                                                initialFiles={[file]}
                                                onChange={(files) => console.log('Files:', files)}
                                            />
                                        </CardFileUpload>

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

export default KYCDocuments;
