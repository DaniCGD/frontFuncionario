import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleDialogDemo from './SimpleDialog';

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
    },
}));

const AppCustomizedDialog = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Request', path: '/material' }, { name: 'Requests in Process' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="customized dialog">
          <SimpleDialogDemo />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppCustomizedDialog;
