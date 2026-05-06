import { memo } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

const SearchBar = memo(({ value, onChange, placeholder = 'Search...' }) => {
    const handleClear = () => {
        onChange('')
    }

    return (
        <TextField
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            size="small"
            className="search-input"
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                    </InputAdornment>
                ),
                endAdornment: value ? (
                    <InputAdornment position="end">
                        <IconButton size="small" onClick={handleClear}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </InputAdornment>
                ) : null,
            }}
        />
    )
})

SearchBar.displayName = 'SearchBar'

export default SearchBar
