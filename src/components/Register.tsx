import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Axios from "axios";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserData } from "../context/UserContext";
import styles from "../styles/styles.module.scss";

export const Register = () => {
  const [name, setName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [type, setType] = useState<any>("");
  const [error, setError] = useState<any>(null);

  const history = useHistory();

  const { data, setData } = useUserData();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    setData({ email, password, name });
    history.push("/");
    // try {
    //   const data = await Axios.post("http://192.168.1.15:5000/user", {
    //     name,
    //     email,
    //     password,
    //   });
    // } catch (error) {
    //   setError(error);
    // }
  };

  const variants = {
    init: { y: 70 },
    end: { y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="init"
      animate="end"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Card className={`${styles.styledCard} ${styles.formCard}`}>
          {error && "There are errors"}
          <Typography variant="h2">Register</Typography>
          <FormControl style={{ width: 190 }}>
            <InputLabel htmlFor="demo-customized-textbox">
              Company type
            </InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              label="Company type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={"Investory"}>Investory</MenuItem>
              <MenuItem value="Local Company">Local Company</MenuItem>
            </Select>
          </FormControl>
          {type === "Local Company" && <TextField label="Company name" />}
          <TextField
            required
            value={name}
            label="Name"
            onChange={(text) => setName(text.target.value)}
          />
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
            Sign Up
          </Button>
          <Button
            onClick={() => history.push("/")}
            variant="text"
            color="default"
          >
            Go to the main page
          </Button>
        </Card>
      </form>
    </motion.div>
  );
};
