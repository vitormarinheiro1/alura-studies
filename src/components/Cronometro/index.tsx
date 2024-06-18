import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../commons/utils/time";
import { Itask } from "../../types/tarefa";
import Button from "../Button";
import Relogio from "./Relogio";
import styles from './styles.module.scss'

interface Props {
    selecionado: Itask | undefined
    finalizarTarefa: () => void;
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.time) {
            setTempo(tempoParaSegundos(selecionado.time));
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Choose a card and start the timer</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)}>Start</Button>
        </div>
    )
}