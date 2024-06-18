import styles from "./styles.module.scss"

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    const { type = "button", onClick } = props;
    return(
        <button
        onClick={onClick}
        type={type}
        className={styles.button}
        >
            {props.text}
        </button>
    )
}