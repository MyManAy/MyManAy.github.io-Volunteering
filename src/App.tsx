import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import MoneyText from "./components/MoneyText";
import { CircularProgress } from "@material-ui/core";
import MoneyButtons from "./components/MoneyButtons";
import { sdk } from "./backend/client/sdk";
import NameInput from "./components/NameInput";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { getUserIdByEmail } from "./backend/graphql/queries";
import * as gqlDocs from "./backend/graphql/index";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [amount, setAmount] = useState(0);
  const email = useRef("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      console.log("ma");
      email.current = user?.email?.toLowerCase()!;
      updateAmount();
    } else {
      resetVars();
    }
  }, [isAuthenticated]);

  const isUserInDB = (queryResult: { User: string | any[] }) =>
    queryResult.User.length === 0;

  const updateUserId = () => {
    return new Promise((resolve) => {
      sdk.getUserIdByEmail({ email: email.current }).then((result) => {
        console.log(sdk.getUserIdByEmail({ email: email.current }));
        if (!isUserInDB(result)) {
          sdk.insertUserByEmail({ email: email.current }).then(() => {
            updateUserId();
          }); //recursive call
        } else {
          const newId = result.User[0].id;
          console.log(newId);
          resolve(newId);
          setUserId(newId);
        }
      });
    });
  };

  const resetVars = () => {
    setAmount(0);
    email.current = "";
    setUserId("");
  };

  const formatAmount = (amount: string) =>
    amount.substring(0, 1) === "-"
      ? Number("-" + amount.substring(2)) // for negative numbers
      : Number(amount.substring(1));

  const updateAmount = async () => {
    const newId = await updateUserId();
    console.log(newId);
    const fetchedAmount: string = (await sdk.getMoneyByUserId({ id: newId }))
      .Money[0].amount;
    const amountToNumber = formatAmount(fetchedAmount);
    setAmount(amountToNumber);
  };

  const deposit = () => setAmount(amount + 20);
  const withdraw = () => setAmount(amount - 20);
  const update = async () => {
    console.log("yea");
    await sdk.updateMoneyByUserId({ id: userId, newAmount: amount });
  }; //add subscription logic sometime in future

  // const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = async (event) => {
  //   console.log(event.key);
  //   if (event.key === "Enter") {
  //     console.log("yes");
  //     if (timeoutAlive) {
  //       clearInterval(queryTimeout!);
  //     }
  //     setQueryTimeout(setTimeout(queryCall, 1000)); // flawed logic forces user to wait 1 second before EVERY call
  //     setTimeoutAlive(true);

  //     event.preventDefault();
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            position: "absolute",
            top: "2.5%",
            left: "2.5%",
          }}
        >
          {!isAuthenticated ? (
            <LoginButton></LoginButton>
          ) : (
            <LogoutButton></LogoutButton>
          )}
        </div>
        <text style={{ position: "absolute", top: "14.5%" }}>
          {user?.name || "you are logged out"}
        </text>
        <div style={{ position: "absolute", top: "30.5%" }}>
          <MoneyText amount={amount} />
          <MoneyButtons
            deposit={deposit}
            withdraw={withdraw}
            update={update}
          ></MoneyButtons>
        </div>
      </header>
    </div>
  );
}

export default App;
