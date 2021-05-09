import React from 'react';

import { Grid } from '@material-ui/core';
import { EachCard, EachCardTitle } from '../../styles/kyc/KYCBasicStyle';

export const KYCMiddleData = () => {
    return (
        <>
            <Grid container spacing={3} style={{ marginTop: '2em' }}>
                <Grid item lg={4} md={4} xs={6} sm={4}>
                    <EachCard>
                        <EachCardTitle><p style={{ color: 'rgba(42, 159, 238, 1)', fontSize: '1.1em' }} /> Last Update: 02/02/2020</EachCardTitle>
                    </EachCard>
                </Grid>

                <Grid item lg={4} md={4} xs={6} sm={4}>
                    <EachCard>
                        <EachCardTitle><p style={{ color: 'rgba(42, 159, 238, 1)', fontSize: '1.1em' }} /> Status : Pending</EachCardTitle>
                    </EachCard>
                </Grid>

                <Grid item lg={4} md={4} xs={12} sm={4}>
                    <EachCard>
                        <EachCardTitle><p style={{ color: 'rgba(42, 159, 238, 1)', fontSize: '1.1em' }} /> Veried : Not Yet!</EachCardTitle>
                    </EachCard>
                </Grid>
            </Grid>
        </>
    )
};