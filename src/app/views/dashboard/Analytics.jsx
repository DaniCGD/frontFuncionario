import { Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';


const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));



const Analytics = () => {
  

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8}  sm={12} xs={12}>
            <StatCards />
            <TopSellingTable />
            <StatCards2 /> 
          </Grid>  
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
