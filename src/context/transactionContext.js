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


    const getUserTransactions = async (isMounted) => {
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

    useEffect(() => {
        let isMounted = true;

        if (currentUser) {
            getUserTransactions(isMounted);
        }

        return () => {
            isMounted = false;
        };
    }, [currentUser]);



    useEffect(() => {
        let isMounted = true;


        function isIncome(value) {
            return value.transaction.type === "income"
        }

        function isExpense(value) {
            return value.transaction.type === "expense"
        }

        const getIncome = () => {
            console.log("transaction changed")
            if (transactions?.length !== 0) {
                let data = transactions?.filter(isIncome)

                if (isMounted) {
                    if (data.length !== 0) {
                        setIncome(data?.map(item => item.transaction.amount).reduce((prev, next) => Number(prev) + Number(next)));
                    }
                    else {
                        setIncome("000")
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
                    else {
                        setExpense("000");
                    }
                }
            }
            else {
                setExpense("000");
            }
        }

        const getBalance = () => {
            if (isMounted) {
                if (transactions?.length !== 0) {
                    setBalance(Number(income) - Number(expense));
                }
                else {
                    setBalance("000")
                }
            }
        }

        if (transactions) {

            getIncome();
            getExpense();
            getBalance();
        }

        return () => {
            isMounted = false;
        };
    }, [transactions]);

    useEffect(() => {
        let isMounted = true;
        const getBalance = () => {
            if (isMounted) {
                if (transactions?.length !== 0) {
                    setBalance(Number(income) - Number(expense));
                }
                else {
                    setBalance("000")
                }
            }
        }

        if (transactions) {
            getBalance();
        }

        return () => {
            isMounted = false;
        };
    }, [transactions, income, expense]);

    const value = {
        transactions,
        loading,
        balance,
        income,
        expense,
        getUserTransactions

    }

    return (
        <TransactionContext.Provider value={value}>
            {props.children}
        </TransactionContext.Provider>
    )

}
