
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material";


const Noticias = ({ noticia }) => {

    // console.log(noticia);
    const { urlToImage, url, title, description, source } = noticia;
    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (<CardMedia
                    component="img"
                    alt={`Imagen de la Notiia ${title}`}
                    image={urlToImage}
                    height={'250'}
                />)}

                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component="div">
                        {title}
                    </Typography>
                    <Typography variant='body'>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        color={'primary'}
                        width={'100%'}
                        textAlign={'center'}
                        sx={{
                            textDecoration: 'none'
                        }}
                    > Leer Noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Noticias