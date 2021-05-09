import React from 'react';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { CardButton, CardTextField, CardTextFieldName, CardTitle, EachCard, EachCardSegmentNoHover, PageContainer } from '../../styles/kyc/KYCBasicStyle';
import { KYCStepper } from './KYCStepper';
import { KYCMiddleData } from './KYCMiddleData';

const KYCBasic = () => {

    return (
        <>

            <PageContainer>
                <Grid container spacing={4} justify="center">

                    <Grid item lg={8} md={8} xs={12} sm={12}>

                        <Grid container>
                            <Grid item lg={12} md={12} xs={12} sm={12}>
                                <EachCard>
                                    <KYCStepper />
                                </EachCard>
                            </Grid>
                        </Grid>

                        <KYCMiddleData />

                        <Grid container style={{ marginTop: '2em' }}>
                            <Grid item lg={12} md={12} xs={12} sm={12}>
                                <EachCard style={{ height: '35em' }}>
                                    <EachCardSegmentNoHover>
                                        <CardTitle><b>Basic Information</b></CardTitle>
                                    </EachCardSegmentNoHover>

                                    <EachCardSegmentNoHover>
                                        <CardTextFieldName>First Name</CardTextFieldName>
                                        <CardTextField />

                                        <CardTextFieldName>Last Name</CardTextFieldName>
                                        <CardTextField />

                                        <CardTextFieldName>Address</CardTextFieldName>
                                        <CardTextField />

                                        <CardTextFieldName>Telephone</CardTextFieldName>
                                        <CardTextField />

                                    </EachCardSegmentNoHover>
                                </EachCard>
                            </Grid>

                            <Grid container spacing={3}>

                                <Grid item lg={6} md={6} xs={12} sm={6}>
                                </Grid>

                                <Grid item lg={6} md={6} xs={12} sm={6}>
                                    <Link to='/kyc/middle-step/'>
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

export default KYCBasic;