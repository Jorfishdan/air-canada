import './Transactions.scss';
import transactions from "../../assets/images/transaction.svg";

function Transactions() {
    return (
        <>
        <img className="transactions" src={transactions} alt="transactions"></img>
        </>
    )
}

export default Transactions;