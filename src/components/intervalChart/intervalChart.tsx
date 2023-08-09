'use client'
import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';
import groupByMonth from "@/utils/group";
import styles from './intervalChart.module.css'


export default function IntervalChart() {
  const container = useRef<HTMLDivElement | null>(null);
  const chart = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current);
    }
  }, []);

  function renderBarChart(container: HTMLDivElement | null) {
    if (!container) return;
    const chart = new Chart({
      container,
      theme: 'classic',
      autoFit: true,
      paddingLeft: 70
    });

    chart
      .interval()
      .data({
        type: 'fetch',
        value:
          'https://api.covidtracking.com/v2/us/daily.json',
        format: 'json',
        transform: [
          {
            type: 'custom',
            callback: ({ data }) => groupByMonth(data)
          }
        ],
      })
      .encode('y', 'deaths')
      .encode('x', 'month')
      .axis('x', { title: 'Cases number' })
      .axis('y', { title: 'Population Percent (%)' })

    chart.render();

    return chart;
  }

  return (
    <div className={styles.flexContainer}>
      <div ref={container} className={styles.chartContainer}/>
    </div>
  );
}