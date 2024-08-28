import {Button} from '@mui/material'
import styles from './TodoFooter.module.scss'
import Typography from "../Typography/Typography.tsx";
import {FilterType} from "../../types/types.ts";

interface ITodoFooter {
    notCompletedTodos: number,
    changeFilter: (value: FilterType) => void,
    filter: FilterType,
    clearTodos: () => void,
}

const TodoFooter = (props: ITodoFooter) => {
const { notCompletedTodos, changeFilter, filter = FilterType.ALL, clearTodos } = props
    return (
        <div className={styles.footer}>
            <Typography tag="span" textSize="small" >{ notCompletedTodos } items left</Typography>
            <div className={styles.buttonsGroup}>
                {Object.values(FilterType).map(type => (
                    <Button
                        key={type}
                        variant="text"
                        color="inherit"
                        onClick={() => changeFilter(type)}
                        className={`${filter === type ? styles.activeButton : ''}`}
                    >
                        <Typography tag="span" textSize="small">{type}</Typography>
                    </Button>
                ))}
            </div>
            <Button color="inherit" onClick={clearTodos} >
                <Typography tag="span" textSize="small">Clear completed</Typography>
            </Button>
        </div>
    )
}

export default TodoFooter