import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Pets, Mail, Notifications } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}))
const Icons = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '20px',
	// [theme.breakpoints.up('sm')]:{
	//     display:'flex'
	// }
}))
const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
}))

const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography
					variant='h6'
					sx={{ display: { xs: 'none', sm: 'block' } }}
				>
					SHORIFUL ISLAM
				</Typography>
				<Pets sx={{ display: { xs: 'block', sm: 'none' } }}></Pets>
				<Search>
					<InputBase placeholder='Search...'></InputBase>
				</Search>
				{/* for pc device */}
				<Icons sx={{ display: { xs: 'none', sm: 'flex' } }}>
					<Badge badgeContent={4} color='error'>
						<Mail />
					</Badge>
					<Badge badgeContent={2} color='error'>
						<Notifications />
					</Badge>
					<Avatar
						sx={{ width: 30, height: 30 }}
						alt='Shoriful Islam'
						src='/static/images/avatar/2.jpg'
						onClick={e => setOpen(true)}
					/>
				</Icons>
				{/* for mobile device */}
				<UserBox
					sx={{ display: { xs: 'flex', sm: 'none' } }}
					onClick={e => setOpen(true)}
				>
					<Avatar
						sx={{
							width: 30,
							height: 30,
						}}
						alt='Shoriful Islam'
						src='/static/images/avatar/2.jpg'
					/>
					<Typography variant='span'>SHORIF</Typography>
				</UserBox>
			</StyledToolbar>
			{/* profile */}
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				open={open}
				onClose={e => setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	)
}

export default Navbar
