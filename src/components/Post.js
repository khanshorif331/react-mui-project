import React from 'react'
import ShareIcon from '@mui/icons-material/Share'
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material'
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from '@mui/material'

const Post = () => {
	return (
		<Card sx={{ margin: 5 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVert />
					</IconButton>
				}
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
			/>
			<CardMedia
				component='img'
				height='350px'
				image='https://www.cineringtones.com/wp-content/uploads/2020/10/Naga-Chaitanya-Love-Story-Movie-Ringtones-For-Cell-Phones.jpg'
				alt='Paella dish'
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					This impressive paella is a perfect party dish and a fun meal to
					cook together with your guests. Add 1 cup of frozen peas along
					with the mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	)
}

export default Post
