import { Box, Card, Tooltip, Typography } from "@material-ui/core";
import styles from "../styles/styles.module.scss";
import { Line, CartesianGrid, XAxis, LineChart, YAxis } from "recharts";
import info from "../data/Ist'emol narxlari indeksi dinamikasi.json";

export function MyChart() {
  return (
    <Card className={styles.styledCard}>
      <Typography gutterBottom variant="h5" component="h2">
        O'zbekiston ist'emol narxlari indeksi dinamikasi
      </Typography>
      <Box style={{ display: "flex", marginTop: 40 }}>
        <LineChart
          width={1200}
          height={300}
          data={info.data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="year" />
          <YAxis />
        </LineChart>
      </Box>
    </Card>
  );
}
