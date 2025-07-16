"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "./AreaChart.module.css";
import { useContext } from "react";
import { MainContext } from "@/app/context";
import { Button } from "../../Button/Button";

const data = [
  { date: "01/01/2020", value: 1200 },
  { date: "15/01/2020", value: 1350 },
  { date: "01/02/2020", value: 1450 },
  { date: "15/02/2020", value: 1600 },
  { date: "01/03/2020", value: 1550 },
  { date: "12/03/2020", value: 2300 },
  { date: "01/04/2020", value: 1800 },
  { date: "15/04/2020", value: 1400 },
  { date: "01/05/2020", value: 1650 },
  { date: "15/05/2020", value: 1900 },
  { date: "01/06/2020", value: 2100 },
  { date: "15/06/2020", value: 2400 },
  { date: "01/07/2020", value: 2600 },
  { date: "15/07/2020", value: 2800 },
  { date: "01/08/2020", value: 3100 },
  { date: "15/08/2020", value: 3300 },
  { date: "01/09/2020", value: 3600 },
  { date: "15/09/2020", value: 3400 },
];

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    [key: string]: unknown;
  }>;
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>{`${payload[0].value.toLocaleString()} грн ${label}`}</p>
      </div>
    );
  }
  return null;
};

export const CustomAreaChart = ({
  containerClassName,
  controls,
}: {
  containerClassName?: string;
  controls?: boolean;
}) => {
  const { menuOpened } = useContext(MainContext);
  return (
    <div
      className={
        (controls ? styles.containerControls : styles.container) +
        " " +
        containerClassName +
        " " +
        (menuOpened && styles.containerMenu)
      }
    >
      {controls && (
        <div className={styles.controlButtons}>
          <Button variant="solid" classNames={styles.controlBtn}>
            1 рік
          </Button>
          <Button variant="solid" classNames={styles.controlBtn}>
            3 міс.
          </Button>
        </div>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 60,
            right: 20,
            left: 40,
            bottom: 10,
          }}
          className={styles.chart}
        >
          <CartesianGrid strokeLinecap="butt" stroke="#e0e0e0" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <YAxis
            domain={[1000, 4000]}
            ticks={[1000, 2000, 3000, 4000]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#333", strokeWidth: 1, strokeDasharray: "5,5" }}
            isAnimationActive={false}
            offset={-60}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#333"
            strokeWidth={2}
            fill="#c0c0c0"
            fillOpacity={0.8}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
