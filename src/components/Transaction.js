import React from "react";
import TransactionCards from "./TransactionCards";
import total_transaction_icon from "../assests/total_transactions_icon.png";

const Transaction = () => {
  return (
    <>
      <div className="flex flex-wrap  justify-between my-3 mr-10">
        <TransactionCards
          className={"bg-[#F4ECDD]"}
          name={"Total Revenue"}
          amount={"$23,87,756"}
          image={total_transaction_icon}
        />
        <TransactionCards
          className={"bg-[#DDEFE0]"}
          name={"Total Transactions"}
          amount={"$23,87,756"}
          image={total_transaction_icon}
        />
        <TransactionCards
          className={"bg-[#EFDADA]"}
          name={"Total Likes"}
          amount={"$23,87,756"}
          image={total_transaction_icon}
        />
        <TransactionCards
          className={"bg-[#DEE0EF]"}
          name={"Total Users"}
          amount={"$23,87,756"}
          image={total_transaction_icon}
        />
      </div>
    </>
  );
};

export default Transaction;
