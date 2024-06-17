import styles from "./styles.module.scss"

interface ButtonProps {
    text: string
    type?: "button" | "submit" | "reset" | undefined
}

export default function Button(props: ButtonProps) {
    return(
        <button className={styles.button}>{props.text}</button>
    )
}