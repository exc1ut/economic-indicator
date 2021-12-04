import uzbekistanMap from "../data/uzbekistan.json";
import { VectorMap } from "@south-paw/react-vector-maps";
import { Box, Card, Typography } from "@material-ui/core";
import styles from "../styles/styles.module.scss";
import { useState } from "react";
import { useMap } from "../context/MapContext";
import { motion } from "framer-motion";

export function Map() {
  const { selectedCountry, setSelectedCountry } = useMap();

  const [hovered, setHovered] = useState<any>("None");
  const [focused, setFocused] = useState<any>("None");
  const [clicked, setClicked] = useState<any>("None");

  const layerProps = {
    onMouseEnter: ({ target }: any) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }: any) => setHovered("None"),
    onFocus: ({ target }: any) => setFocused(target.attributes.name.value),
    onBlur: ({ target }: any) => setFocused("None"),
    onClick: ({ target }: any) =>
      setSelectedCountry(target.attributes.name.value),
  };

  const variants = {
    init: { opacity: 0 },
    end: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 1 }}
      initial="init"
      animate="end"
    >
      <Card style={{ height: 1000 }} className={styles.styledCard}>
        <Typography style={{ fontWeight: 900 }} variant="h4" component="h2">
          Map of the country
        </Typography>
        <Typography
          gutterBottom
          style={{ fontWeight: 400, color: "#8B949E" }}
          variant="subtitle1"
          component="h2"
        >
          Information about your current plan and usages
        </Typography>
        <div className={styles.container}>
          <VectorMap {...uzbekistanMap} layerProps={layerProps} />
        </div>
      </Card>
    </motion.div>
  );
}
