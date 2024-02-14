import styles from "../Factorial/Factorial.module.css";
import React from "react";


const OctagonalToDecimal = (props) => {

    let onChangeInputText = (e) => {
        let text = e.target.value;
        props.updateInputText(text);
    }

    const onButtonClick = async () => {
        // try {
        //     const number = Number(props.factorialPage.inputText);
        //     const response = await factorialContract.methods.getFactorial(number).call();
        //     props.setAnswerText(response.toString());
        // } catch (error) {
        //     console.error(error);
        // }
    };

    return (
        <div className={styles.content}>
            <div>
                <h2 className={styles.title}> Перевода целого
                    восьмиразрядного числа из восьмеричной системы в десятичную. </h2>
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
                        value={props.binaryToDecimalPage.inputText}
                        onChange={onChangeInputText}
                    />
                </div>
                <div className={styles.compile}>
                    <button disabled={!props.binaryToDecimalPage.inputText}
                            className={styles.button} onClick={onButtonClick}>
                        Вычислить
                    </button>
                </div>
            </div>
            <div className={styles.answerContainer}>
                <label className={styles.answerText}>
                    Ответ:
                    {props.binaryToDecimalPage.answerText}
                </label>
            </div>
        </div>
    );
}

export default OctagonalToDecimal;