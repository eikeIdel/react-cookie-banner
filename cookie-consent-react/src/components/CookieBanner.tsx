import { useContext } from 'react';
import { Button, List, Typography, Box, Modal, Stack } from '@mui/material';
import { ConsentContext } from '../context/ConsentContext';
import SettingItem from './SettingItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CookieBanner() {
  const ctx = useContext(ConsentContext);
  const services = ctx?.services || [];

  const theme = createTheme({
    palette: {
      primary: {
        main: '#333333',
      },
      secondary: {
        main: '#f50057',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              borderColor: '#999',
            },
          },
        },
      },
    },
  });

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    backgroundColor: '#fff',
    transform: 'translateY( -50%)',
    maxWidth: 600,
    margin: '0 auto',
    padding: '1.5em',
    borderRadius: '8px',
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal
        sx={modalStyle}
        open={true}
        aria-labelledby='eked-cookie-banner-title'
        aria-describedby='eked-cookie-banner-description'
      >
        <Box
          sx={{ outline: 'none' }}
        >
          <Typography
            component='h2'
            id='eked-cookie-banner-title'
            sx={{ marginBottom: '1em' }}
          >
            Cookie Zustimmung verwalten
          </Typography>
          <Typography id='eked-cookie-banner-description'>
            Um dir ein optimales Erlebnis zu bieten, verwenden wir Technologien
            wie Cookies, um Geräteinformationen zu speichern und/oder darauf
            zuzugreifen. Wenn du diesen Technologien zustimmst, können wir Daten
            wie das Surfverhalten oder eindeutige IDs auf dieser Website
            verarbeiten. Wenn du deine Zustimmung nicht erteilst oder
            zurückziehst, können bestimmte Merkmale und Funktionen
            beeinträchtigt werden.
          </Typography>
          <List>
            {services.map((service) => (
              <SettingItem key={service.key} service={service} />
            ))}
          </List>
          <Stack
            direction='row'
            spacing={2}
            sx={{ marginTop: '1em', justifyContent: 'space-between' }}
          >
            <Box display='flex' gap={2}>
              <Button
                variant='contained'
                color='primary'
                onClick={() => ctx?.updateConsent?.({services: services.map(s => s.key), status: true})}
              >
                Alle akzeptieren
              </Button>
              <Button
            variant='outlined'
            color='primary'
            onClick={() => ctx?.rejectAll()}
              >
            Alle ablehnen
              </Button>
            </Box>
            <Button
              variant='outlined'
              color='primary'
              onClick={() => ctx?.close()}
            >
              Auswahl speichern
            </Button>
          </Stack>
        </Box>
        
      </Modal>
    </ThemeProvider>
  );
}

export default CookieBanner;
