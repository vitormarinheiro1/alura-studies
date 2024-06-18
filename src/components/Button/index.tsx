import styles from "./styles.module.scss"

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Button({ onClick, type, children }: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={styles.button}
        >
            {children}
        </button>
    )
}