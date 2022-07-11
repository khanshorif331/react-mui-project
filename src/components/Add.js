import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	IconButton,
	Modal,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import styled from '@emotion/styled'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ImageIcon from '@mui/icons-material/Image'
import DateRangeIcon from '@mui/icons-material/DateRange'

const Add = () => {
	const [open, setOpen] = useState(false)
	const StyledModal = styled(Modal)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	})
	const UserBox = styled(Box)({
		display: 'flex',
		// justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		marginBottom: '20px',
	})

	return (
		<>
			<Tooltip
				onClick={e => setOpen(true)}
				title='Add'
				sx={{
					position: 'fixed',
					bottom: 20,
					left: { xs: 'calc(50% - 25px)', md: 30 },
				}}
			>
				<Fab color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={e => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box
					width={400}
					height={280}
					bgcolor={'background.default'}
					color={'text.primary'}
					p={3}
					borderRadius={5}
				>
					<Typography variant='h6' color='gray' textAlign='center'>
						Create a Post
					</Typography>
					<UserBox>
						<Avatar
							alt='Travis Howard'
							src='https://material-ui.com/static/images/avatar/2.jpg'
							sx={{ width: 30, height: 30 }}
						/>
						<Typography fontWeight={500} variant='span'>
							Shoriful Islam
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: '100%' }}
						id='standard-multiline-static'
						multiline
						rows={3}
						placeholder="What's on your Mind ?"
						variant='standard'
					/>
					<Stack direction='row' gap={1} mt={2} mb={3}>
						<EmojiEmotionsIcon color='primary'></EmojiEmotionsIcon>
						<ImageIcon color='secondary'></ImageIcon>
						<VideoCameraBackIcon color='success'></VideoCameraBackIcon>
						<PersonAddIcon color='error'></PersonAddIcon>
						{/* <EmojiEmotionsIcon></EmojiEmotionsIcon>
						<EmojiEmotionsIcon></EmojiEmotionsIcon> */}
					</Stack>
					<ButtonGroup
						fullWidth
						variant='contained'
						aria-label='outlined primary button group'
					>
						<Button>Post</Button>
						<Button sx={{ width: '100px' }}>
							<DateRangeIcon></DateRangeIcon>
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	)
}

export default Add
