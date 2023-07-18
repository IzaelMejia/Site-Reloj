import React from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import contacto from "./contacto.jpg";
import "./ContactPage.css"

const ContactForm = () => {
  return (
    <div className="header-container">
      <h1>Estás a tiempo de CONTACTARTE con nosotros</h1>
      <img src={contacto} alt="poster" width={400} />

      <Box sx={{ maxWidth: 700, margin: 'auto' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Datos de contacto
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nombre"
                fullWidth
                required
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Télefono"
                fullWidth
                required
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mensaje"
                fullWidth
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                className='btnColor'
                fullWidth
              >Enviar</Button>

            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default ContactForm;
