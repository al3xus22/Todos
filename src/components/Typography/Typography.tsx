import {CSSProperties, ReactNode} from "react";
import styles from './Typography.module.scss';

interface ITypographyProps {
    children?: ReactNode,
    tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span',
    textSize?: 'large' | 'middle' | 'small',
    textStyle?: 'italic' | 'strikethrough' | '',
    style?: CSSProperties;
}

const Typography = ({children, textSize = 'middle', textStyle = '', style, tag = 'p'}: ITypographyProps) => {
    const Tag = tag
     return (
        <Tag className={`${styles[textSize]} ${styles[textStyle]}`} style={style}>
            {children}
        </Tag>
     )
}

export default Typography