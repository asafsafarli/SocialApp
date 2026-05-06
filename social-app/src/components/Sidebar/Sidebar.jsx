import { memo } from 'react'
import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import SettingsIcon from '@mui/icons-material/Settings'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const Sidebar = memo(({ darkMode, onToggleDarkMode, onCreatePost }) => {
    return (
        <Drawer
            variant="permanent"
            className="sidebar"
            classes={{ paper: 'sidebar-paper' }}
        >
            <Box className="sidebar-content">
                <Typography variant="h5" className="sidebar-brand">
                    SocialApp
                </Typography>

                <List className="sidebar-nav">
                    <ListItem disablePadding>
                        <ListItemButton className="nav-item active">
                            <ListItemIcon className="nav-icon">
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className="nav-item">
                            <ListItemIcon className="nav-icon">
                                <ExploreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Explore" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className="nav-item">
                            <ListItemIcon className="nav-icon">
                                <TrendingUpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Trending" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className="nav-item">
                            <ListItemIcon className="nav-icon">
                                <BookmarkIcon />
                            </ListItemIcon>
                            <ListItemText primary="Saved" />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Button
                    variant="contained"
                    fullWidth
                    startIcon={<AddIcon />}
                    onClick={onCreatePost}
                    className="sidebar-create-btn"
                >
                    Create Post
                </Button>

                <Box sx={{ flexGrow: 1 }} />

                <List>
                    <ListItem disablePadding>
                        <ListItemButton className="nav-item" onClick={onToggleDarkMode}>
                            <ListItemIcon className="nav-icon">
                                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                            </ListItemIcon>
                            <ListItemText primary={darkMode ? 'Light Mode' : 'Dark Mode'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className="nav-item">
                            <ListItemIcon className="nav-icon">
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
