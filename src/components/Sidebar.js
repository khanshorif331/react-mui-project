import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import GroupIcon from '@mui/icons-material/Group'
import StorefrontIcon from '@mui/icons-material/Storefront'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

const Sidebar = () => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<List>
				<ListItem disablePadding>
					<ListItemButton component='a' href='#home'>
						<ListItemIcon>
							<HomeIcon></HomeIcon>
						</ListItemIcon>
						<ListItemText primary='Homepage' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component='a' href='#home'>
						<ListItemIcon>
							<ArticleIcon></ArticleIcon>
						</ListItemIcon>
						<ListItemText primary='Pages' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component='a' href='#home'>
						<ListItemIcon>
							<GroupIcon></GroupIcon>
						</ListItemIcon>
						<ListItemText primary='Groups' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component='a' href='#home'>
						<ListItemIcon>
							<StorefrontIcon></StorefrontIcon>
						</ListItemIcon>
						<ListItemText primary='Marketplace' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component='a' href='#home'>
						<ListItemIcon>
							<EmojiPeopleIcon></EmojiPeopleIcon>
						</ListItemIcon>
						<ListItemText primary='Friends' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component='a' href='#home'>
						<ListItemIcon>
							<SettingsIcon></SettingsIcon>
						</ListItemIcon>
						<ListItemText primary='Setting' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component='a' href='#home'>
						<ListItemIcon>
							<AccountBoxIcon></AccountBoxIcon>
						</ListItemIcon>
						<ListItemText primary='Profile' />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	)
}

export default Sidebar
