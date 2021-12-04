import { Box, Card, Typography } from "@material-ui/core";
import styles from "../styles/styles.module.scss";
import {
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  LineChart,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
  Legend,
} from "recharts";
import info from "../data/Ist'emol narxlari indeksi dinamikasi.json";

export function MyChart() {
  return (
    <Card className={styles.styledCard}>
      <>
        <Typography
          style={{ fontWeight: 900, margin: "15px 7px 20px 15px" }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          O'zbekiston ist'emol narxlari indeksi dinamikasi
        </Typography>
        <Box style={{ display: "flex", marginTop: 40 }}>
          <ResponsiveContainer width="100%" height={450}>
            <AreaChart
              data={info.data}
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
  );
}
