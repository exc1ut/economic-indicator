import { Button, Card, TextField, Typography } from "@material-ui/core";
import Axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserData } from "../context/UserContext";
import styles from "../styles/styles.module.scss";

export const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [error, setError] = useState<any>(null);

  const history = useHistory();

  const { data: contextData, setData } = useUserData();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await Axios.post("http://192.168.1.15:5000/user/login", {
        email,
        password,
      });
      setData(data);

      history.push("/");
    } catch (error) {
      setError(error);
    }
  };

  const variants = {
    init: { y: 100 },
    end: { y: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="init"
        animate="end"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <Card className={`${styles.styledCard} ${styles.formCard}`}>
            {error && "There are errors"}
            <Typography variant="h2">Login</Typography>
            <TextField
              required
              value={email}
              label="Email"
              onChange={(text) => setEmail(text.target.value)}
            />
            <TextField
              required
              value={password}
              label="password"
              onChange={(text) => setPassword(text.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Sign in
            </Button>
            <Button
              onClick={() => history.push("/")}
              variant="text"
              color="default"
            >
              Go to main page
            </Button>
          </Card>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};
