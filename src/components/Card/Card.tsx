import styles from './Card.module.scss'
import {ITodo} from "../../types/types";
import Typography from "../Typography/Typography";
import {Checkbox, IconButton, TextField} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {observer} from "mobx-react-lite";
import {todoStore} from "../../store/todoStore";
import React, {useState} from "react";

interface ICardProps {
    data: ITodo,
    id: number
}

const Card = observer(({ data, id }: ICardProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(data.text)

    // Переключатель режима редактирования задачи
    const handleEditToggle = () => {
        setIsEditing(!isEditing)
    }

    // Редактирование задачи
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditText(e.target.value)
    }

    const handleEditSubmit = () => {
        if (editText.trim()) {
            todoStore.editTodo(id, editText.trim());
            setIsEditing(false)
        }
    }

    const handleDelete = () => {
        todoStore.deleteTodo(id)
    }

    return (
        <div className={ styles.card }>
            <Checkbox
                icon={<RadioButtonUncheckedIcon fontSize="large" />}
                checkedIcon={<CheckCircleOutlineIcon fontSize="large" color={'success'} />}
                checked={data.completed}
                onChange={() => todoStore.toggleTodo(id)}
                style={{ padding: 0 }}
            />
            {isEditing ? (
                <TextField
                    value={editText}
                    onChange={handleEditChange}
                    onBlur={handleEditSubmit}
                    onKeyDown={(e) => e.key === 'Enter' && handleEditSubmit()}
                    autoFocus
                    InputProps={{ sx: {padding: '0', fontSize: '30px'} }}
                />
            ) : (
                <Typography
                    tag="p"
                    textSize="middle"
                    textStyle={ data.completed ? 'strikethrough' : undefined }
                    style={{ opacity: data.completed ? 0.3 : 1 }}
                >
                    { data.text }
                </Typography>
            )}
            <div className={styles.cardButtons}>
                {!data.completed &&
                    <IconButton onClick={handleEditToggle}><EditIcon/></IconButton>}
                    <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
            </div>
        </div>
    )
})

export default Card