import {IconButton, InputAdornment, styled, TextField} from "@mui/material"
import styles from './ToDoInput.module.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'

interface ITodoInputProps {
    value: string,
    onChange: (value: string) => void,
    handleAdd: () => void
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input::placeholder': {
        fontSize: 'var(--font-middle)',
        color: theme.palette.text.secondary,
        fontStyle: 'italic',
        opacity: 0.15,
    },
}))

const ToDoInput = ({ value, onChange, handleAdd }: ITodoInputProps) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleAdd()
        }
    }

    return (
        <div className={ styles.inputContainer }>
            <StyledTextField
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="What needs to be done?"
                id="todo-input"
                onKeyDown={handleKeyDown}
                fullWidth
                variant="standard"
                sx={{
                    '& .MuiInput-underline:before': {
                        borderBottomColor: 'var(--background-color)',
                        boxShadow: '0px 2px 4px rgba(34, 60, 80, 0.2)',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#d1d1d1' },
                    "& .MuiInput-underline:after": { borderBottomColor: '#b5b5b5' },
                }}
                InputProps={{
                    sx: { padding: '10px 15px', fontSize: '30px' },
                    startAdornment:
                        <InputAdornment position="start">
                            <IconButton
                                color="primary"
                                component="span"
                                disabled={!value}
                                onClick={handleAdd}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </InputAdornment>,
                }}
            />
        </div>
    )
}

export default ToDoInput