import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Button, Typography } from '@mui/material';
import { Delete, Favorite, Share, MoreVert } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../../redux/action'


const CardComponent = ({ item, index, list, setList }) => {
    // const [state, setState] = useState(false);
    const imageUrl = "https://image.tmdb.org/t/p/"
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false)
    const { cart } = useSelector(state => state.movieReducer);

    return (
        <>
            <div className="col-md-3 my-3 d-flex justify-content-center">
                <Card sx={{ maxWidth: 345, height: 480 }}  >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
                                <img src={item.backdrop_path ? `${imageUrl}/w200/${item.backdrop_path}` : "no image avaliable"} />
                            </Avatar>
                        }
                        action={
                            <Button aria-label="settings" >
                                <MoreVert />
                            </Button>
                        }
                        title={item ? item.original_title : "No title Avaliable"}
                        subheader={item ? item.release_date : "No relese Date Avaliable"}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={item.poster_path ? `${imageUrl}/w400/${item.poster_path}` : "no avaliable"}
                        alt="Paella dish"
                    />
                    <span>Popularity : {item ? item.popularity : "no popularity avaliable"}</span>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.overview ? (item.overview.slice(0, 100)) : "......"}
                        </Typography>
                    </CardContent>
                    {
                        <CardActions disableSpacing spacing={2}>
                            <Button aria-label="share" onClick={() => dispatch(addCart(item))}>
                                <Favorite sx={{ color: liked ? 'red' : '#bbb' }} style={{ fontSize: 30 }} />
                            </Button>
                            <Delete aria-label="share" style={{ fontSize: 30 }} onClick={() => dispatch(removeCart(item))} >
                                <Share />
                            </Delete>
                        </CardActions>}
                </Card>
            </div>



        </>
    );
}
export default CardComponent;