import { Box, Stack } from '@mui/material'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

function App() {
	return (
		<Box>
			{/* <Navbar></Navbar> */}
			<Stack direction='row' spacing={2} justifyContent='space-between'>
				<Sidebar></Sidebar>
				<Feed></Feed>
				<Rightbar></Rightbar>
			</Stack>
		</Box>
	)
}

export default App
