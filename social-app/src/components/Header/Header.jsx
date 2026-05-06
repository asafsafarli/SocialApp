import { memo } from 'react'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Toolbar,
} from '@mui/material'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const Header = memo(({ query, onQueryChange, darkMode, onToggleDarkMode, onOpenChat }) => {
    return (
        <AppBar position="sticky" elevation={0} className="topbar">
            <Toolbar className="toolbar">
                <TextField
                    size="small"
                    value={query}
                    onChange={(event) => onQueryChange(event.target.value)}
                    placeholder="Search posts, people, topics..."
                    className="search-field"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon className="search-icon" />
                            </InputAdornment>
                        ),
                    }}
                />

                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton className="header-icon-btn" onClick={onOpenChat}>
                        <Badge badgeContent={3} color="error">
                            <MessageIcon />
                        </Badge>
                    </IconButton>

                    <IconButton className="header-icon-btn">
                        <Badge badgeContent={7} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

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
