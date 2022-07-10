import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	styled,
	Toolbar,
	Typography,
} from '@mui/material'
import React from 'react'
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
					/>
				</Icons>
				{/* for mobile device */}
				<UserBox sx={{ display: { xs: 'flex', sm: 'none' } }}>
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
		</AppBar>
	)
}

export default Navbar
