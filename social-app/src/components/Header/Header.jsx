import { memo } from 'react'
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Stack,
    Toolbar,
} from '@mui/material'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcon from '@mui/icons-material/Notifications'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SearchBar from '../SearchBar/SearchBar'
import NotificationBadge from '../NotificationBadge/NotificationBadge'

const Header = memo(({ query, onQueryChange, darkMode, onToggleDarkMode, onOpenChat }) => {
    return (
        <AppBar position="sticky" elevation={0} className="topbar">
            <Toolbar className="toolbar">
                <Box sx={{ width: '400px', maxWidth: '100%' }}>
                    <SearchBar
                        value={query}
                        onChange={onQueryChange}
                        placeholder="Search posts, people, topics..."
                    />
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" spacing={1} alignItems="center">
                    <NotificationBadge
                        icon={MessageIcon}
                        count={3}
                        onClick={onOpenChat}
                        tooltip="Messages"
                    />

                    <NotificationBadge
                        icon={NotificationsIcon}
                        count={7}
                        tooltip="Notifications"
                    />

                    <IconButton className="header-icon-btn" onClick={onToggleDarkMode}>
                        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>

                    <IconButton className="header-icon-btn">
                        <Avatar
                            className="profile-avatar"
                            alt="User Profile"
                            src="https://i.pravatar.cc/150?img=68"
                        />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    )
})

Header.displayName = 'Header'

export default Header
