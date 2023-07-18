import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';

import "./AboutPage.css"
import mision from "./mision.jpg";
import vision from "./vision.jpg";



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const AboutPage=()=> {
  return (
    <div className='contenedorAbout'>
      <h1>Acerca de nostros</h1>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={4}>
        <Grid item>
          <ButtonBase sx={{ width: 508, height: 450 }}>
            <Img alt="" src={mision } />
          </ButtonBase>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h2>Misión</h2>
              <p>En AZI, nos enorgullece ser una referencia en la industria de relojes, y nuestra misión es brindarte una experiencia excepcional al adquirir un reloj. Nos apasiona ofrecerte una cuidadosa selección de relojes de alta calidad, diseñados para combinar estilo y funcionalidad.Nuestro compromiso con la excelencia nos impulsa a colaborar con las marcas más reconocidas y a buscar constantemente nuevos y emocionantes diseños. Creemos que los relojes son más que simples accesorios; son expresiones de personalidad y estilos de vida únicos.Buscamos superar tus expectativas al proporcionarte un servicio al cliente excepcional. Nuestro equipo de expertos está aquí para ayudarte en cada paso del proceso, brindándote asesoramiento personalizado y respondiendo a tus consultas. Queremos que te sientas seguro y satisfecho con tu compra.</p>
              
            </Grid>
            
          </Grid>
          
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h2>Visión</h2>
              <p>En AZI, nuestra visión es convertirnos en el destino preferido para los amantes de los relojes, ofreciendo una experiencia única y enriquecedora. Nos esforzamos por ser reconocidos como líderes en la industria, al proporcionar una amplia gama de relojes de alta calidad que se adaptan a los estilos y necesidades de nuestros clientes.Nos guía el deseo de conectar a las personas con el tiempo de una manera significativa y personal. Queremos que cada reloj que vendemos no solo sea una herramienta para medir el tiempo, sino también una pieza de arte que refleje la personalidad y el estilo individual de quienes lo usan.Buscamos constantemente nuevas tendencias y marcas emergentes para ofrecer una selección diversa y emocionante de relojes. Nos esforzamos por ser pioneros en la introducción de diseños innovadores y tecnologías vanguardistas que mejoren la experiencia del usuario y permitan un mayor disfrute de cada momento.</p>
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: 508, height: 508 }}>
            <Img className='imagenAbout' alt="" src={vision}  />
          </ButtonBase>
        </Grid>
      </Grid>

      



    </Paper>
    </div>
  );
}

export default AboutPage