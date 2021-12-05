import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  Card,
  Typography,
} from "@material-ui/core";
import styles from "../styles/styles.module.scss";
import {
  Line,
  CartesianGrid,
  XAxis,
  LineChart,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import info from "../data/Ist'emol narxlari indeksi dinamikasi.json";
import React, { useEffect, useState } from "react";
import json from "../data/newGraph.json";
import { useMap } from "../context/MapContext";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  active: string;
}

const StyledButton = styled(Button)<Props>`
  margin: 0 12px;
  border-radius: 14px;
  background-color: ${(p) => (p.active === "contained" ? "#551fff" : "#fff")};
  width: 200px;
  color: ${(p) => (p.active === "contained" ? "#fff" : "#551fff")};
  font-size: 18px;
  font-weight: 400;
  font-family: Roboto;
  box-shadow: 0px 4px 18px #d7d0ec;
  text-transform: capitalize;
  font-weight: 600;
`;

export function SelectionChart() {
  const [picked, setPicked] = useState("Elektroenergiya iste`moli");
  const [data, setData] = useState<any>(null);
  const { selectedCountry } = useMap();
  useEffect(() => {
    const city = json.find((i) => i.city === selectedCountry);
    setData(city);
  }, [selectedCountry]);

  if (data === null) return null;
  return (
    <AnimatePresence>
      <Card className={styles.styledCard}>
        <>
          <Typography
            style={{ margin: "10px 5px 20px 10px", fontWeight: 900 }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Sohalar boyicha so'nggi yillardagi ko'rsatkichlar
          </Typography>
          <Box height={40} display={"flex"}>
            <StyledButton
              size="small"
              active={
                picked === "Elektroenergiya iste`moli" ? "contained" : "text"
              }
              onClick={() => setPicked("Elektroenergiya iste`moli")}
            >
              Agriculture
            </StyledButton>
            <StyledButton
              size="small"
              active={picked === "qishloq xo'jaligi" ? "contained" : "text"}
              onClick={() => setPicked("qishloq xo'jaligi")}
            >
              Cunstruction
            </StyledButton>
            <StyledButton
              active={
                picked === "iste`mol mollari ishlab chiqarish"
                  ? "contained"
                  : "text"
              }
              onClick={() => setPicked("iste`mol mollari ishlab chiqarish")}
            >
              Transport
            </StyledButton>
            <StyledButton
              size="small"
              active={picked === "Qurilish ishlari" ? "contained" : "text"}
              onClick={() => setPicked("Qurilish ishlari")}
            >
              Goods
            </StyledButton>

            <StyledButton
              active={picked === "Transport" ? "contained" : "text"}
              size="small"
              onClick={() => setPicked("Transport")}
            >
              Electricity
            </StyledButton>
          </Box>

          <Box style={{ display: "flex", marginTop: 40 }}>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                data={data[picked]}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#551FFF" stopOpacity={0.2} />
                    <stop offset="25%" stopColor="#551FFF" stopOpacity={0.1} />
                    <stop offset="100%" stopColor="#551FFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Legend />
                <XAxis dataKey="year" />
                <YAxis dataKey="value" />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#551FFF"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </>
      </Card>
    </AnimatePresence>
  );
}
