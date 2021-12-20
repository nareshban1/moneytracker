import { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "../helpers/firebase";
import { useAuth } from "./authContext";

export const TransactionContext = createContext();

export const useTransactions = () => {
    return useContext(TransactionContext);
}

export const TransactionContextProvider = (props) => {

    const { currentUser } = useAuth();
    const [transactions, setTransactions] = useState();
    const [loading, setLoading] = useState(true);
    const [balance, setBalance] = useState("");
    const [income, setIncome] = useState("");
    const [expense, setExpense] = useState("");






    const value = {
        transactions,
        loading,
        balance,
        income,
        expense

    }

    useEffect(() => {
        let isMounted = true;
        const getUserTransactions = async () => {
            setLoading(true);
            await firestore
                .collection("transactions")
                .where("uid", "==", `${currentUser.uid}`)
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => {
                    if (isMounted) {
                        setTransactions(
                            snapshot.docs.map((doc) => ({
                                id: doc.id,
                                transaction: doc.data(),
                            }))
                        );
                    }
                });
            setLoading(false);
        };
        if (currentUser) {
            getUserTransactions();
        }

        return () => {
            isMounted = false;
        };
    }, [currentUser]);



    useEffect(() => {
        let isMounted = true;
        const getBalance = () => {
            if (isMounted) {
                if (transactions?.length !== 0) {
                    setBalance(transactions?.map(item => item.transaction.amount).reduce((prev, next) => Number(prev) + Number(next)));
                }
                else {
                    setBalance("000")
                }

            }

        }

        function isIncome(value) {
            return Math.sign(value.transaction.amount) === 1
        }

        function isExpense(value) {
            return Math.sign(value.transaction.amount) === -1
        }

        const getIncome = () => {
            if (transactions?.length !== 0) {
                let data = transactions?.filter(isIncome)
                if (isMounted) {
                    if (data.length !== 0) {
                        setIncome(data?.map(item => item.transaction.amount).reduce((prev, next) => Number(prev) + Number(next)));
                    }
                }
            }
            else {
                setIncome("000")
            }
        }

        const getExpense = () => {
            if (transactions?.length !== 0) {
                let data = transactions?.filter(isExpense)
                if (isMounted) {
                    if (data.length !== 0) {
                        setExpense(data?.map(item => item.transaction.amount).reduce((prev, next) => Number(prev) + Number(next)));
                    }
                }
            }
            else {
                setExpense("-000");
            }

        }

        if (transactions) {
            getBalance();
            getIncome();
            getExpense();
        }

        return () => {
            isMounted = false;
        };
    }, [transactions]);

    return (
        <TransactionContext.Provider value={value}>
            {props.children}
        </TransactionContext.Provider>
    )

}
