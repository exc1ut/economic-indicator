import { Box, Button, ButtonGroup, Card, Typography } from "@material-ui/core";
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
} from "recharts";
import info from "../data/Ist'emol narxlari indeksi dinamikasi.json";
import { useEffect, useState } from "react";
import json from "../data/newGraph.json";
import { useMap } from "../context/MapContext";
import { AnimatePresence, motion } from "framer-motion";

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
          <Typography gutterBottom variant="h5" component="h2">
            O'zbekiston ist'emol narxlari indeksi dinamikasi
          </Typography>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button onClick={() => setPicked("Elektroenergiya iste`moli")}>
              Elektroenergiya iste`moli
            </Button>
            <Button onClick={() => setPicked("qishloq xo'jaligi")}>
              iste`mol mollari ishlab chiqarish
            </Button>
            <Button
              onClick={() => setPicked("iste`mol mollari ishlab chiqarish")}
            >
              Qurilish ishlari
            </Button>
            <Button onClick={() => setPicked("Qurilish ishlari")}>
              qishloq xo'jaligi
            </Button>
            <Button onClick={() => setPicked("Transport")}>Transport</Button>
          </ButtonGroup>

          <Box style={{ display: "flex", marginTop: 40 }}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data[picked]}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <XAxis dataKey="year" />
                <YAxis dataKey="value" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </>
      </Card>
    </AnimatePresence>
  );
}
