'use client'
import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';
import styles from './linearBarChart.module.css'

export default function LinearBarChart() {
  const container = useRef<HTMLDivElement | null>(null);
  const chart = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current);
    }
  }, []);

  function renderBarChart(container) {
    const chart = new Chart({
      container,
      theme: 'classic',
      autoFit: true
    });

    chart
      .line()
      .data({
        type: 'fetch',
        value:
          'https://api.covidtracking.com/v2/us/daily.json',
        format: 'json',
        transform: [
          {
            type: 'custom',
            callback: ({ data }) => data
          }
        ],
      })
      .encode('x', data => data.outcomes.death.total.value)
      .encode('y', data => data.cases.total.calculated.population_percent)
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