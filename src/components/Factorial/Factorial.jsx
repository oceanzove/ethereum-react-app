import React, {useContext, useEffect, useState} from 'react';
import styles from './Factorial.module.css'
import ContractManagerContext from "../Services/ContractManagerContext";

const Factorial = (props) => {
    const {contractManager} = useContext(ContractManagerContext);
    const [factorialContract, setFactorialContact] = useState(null);

    useEffect(() => {
        const getContract = async () => {
            try {
                const contract = await contractManager.getContract('FactorialContract');
                setFactorialContact(contract);
            } catch (error) {
                console.error(error);
            }
        };
        getContract();
    }, [contractManager]);


    let onChangeInputText = (e) => {
        let text = e.target.value;
        props.updateInputText(text);
    }

    const onButtonClick = async () => {
        try {
            const number = Number(props.factorialPage.inputText);
            const response = await factorialContract.methods.getFactorial(number).call();
            props.setAnswerText(response.toString());
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className={styles.content}>
            <div>
                <h2 className={styles.title}> Факториал </h2>
            </div>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <label htmlFor="answerInput" className={styles.inputLabel}>
                        Введите цифру:
                    </label>
                    <input
                        id="answerInput"
                        type="number"
                        className={styles.input}
                        value={props.factorialPage.inputText}
                        onChange={onChangeInputText}
                    />
                </div>
                <div className={styles.compile}>
                    <button disabled={!props.factorialPage.inputText}
                            className={styles.button} onClick={onButtonClick}>
                        Вычислить
                    </button>
                </div>
            </div>
            <div className={styles.answerContainer}>
                <label className={styles.answerText}>
                    Ответ:
                    {props.factorialPage.answerText}
                </label>
            </div>
        </div>
    );
}

export default Factorial;
