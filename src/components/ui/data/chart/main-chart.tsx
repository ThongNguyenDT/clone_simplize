"use client";
import React, { FC, useEffect, useRef } from 'react';
import { ColorType, createChart, LineType, MouseEventParams } from "lightweight-charts";
import { initialData } from "@/components/ui/data/chart/area-chart";


interface ChartProps {
  data?: any[];
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
  };
  height?: number;
}

const MainChart: FC<ChartProps> = ({ data, colors = {}, height = 64 }) => {
  const {
    backgroundColor = 'white',
    lineColor = '#2962FF',
    textColor = '#FFF',
    areaTopColor = '#2962FF',
    areaBottomColor = 'rgba(41, 98, 255, 0.28)',
  } = colors;

  if (!data) data = initialData;

  const chartContainerRef = useRef<HTMLDivElement>(null);
  useEffect(
    () => {

      if (chartContainerRef.current) {
        const generateDataLine: any = (startValue: number, startDate?: number) => {
          const initialData = [];
          const time: any = startDate ?? ( new Date(Date.UTC(2002, 0, 1, 0, 0, 0, 0)) );

          const endDate = new Date(); // Current date
          let i = 0;

          while (time <= endDate) {
            initialData.push({
              time: time.getTime() / 1000,
              value: i + startValue + ( Math.random() * Math.random() * 10 ) * ( Math.random() * Math.random() * 1000 ) - ( Math.random() * Math.random() * 100 ) * ( Math.random() * Math.random() * 100 ),
            });

            time.setUTCDate(time.getUTCDate() + 1);
            i++;
          }

          const realtimeData = [];
          const nextendDate = new Date();
          nextendDate.setUTCDate(nextendDate.getUTCDate() + 1);
          i = 0;

          while (endDate <= nextendDate) {
            realtimeData.push({
              time: endDate.getTime() / 1000,
              value: i + startValue + ( Math.random() * Math.random() * 10 ) * ( Math.random() * Math.random() * 1000 ) - ( Math.random() * Math.random() * 100 ) * ( Math.random() * Math.random() * 100 ),
            });

            endDate.setUTCHours(endDate.getUTCHours() + 1);
            i++;
          }
          console.log("gen data");
          return {
            initialData,
            realtimeData,
          };
        }

        const data1 = generateDataLine(1000);
        const data2 = generateDataLine(-100);
        const data3 = generateDataLine(100);

        const chart1 = createChart(
          chartContainerRef.current,
          {
            height: 250,
            timeScale: {
              visible: false,
            },
            layout: {
              background: {
                type: ColorType.Solid,
                color: 'transparent',
              },
            },
            grid: {
              vertLines: {
                visible: false
              },
              horzLines: {
                visible: false
              },
            },
            crosshair: {
              horzLine: {
                visible: false,
                labelVisible: false,
              },
              vertLine: {
                labelVisible: false,
              },
            },
          }
        );

        const mainSeries1 = chart1.addLineSeries({
          lineType: LineType.Curved,
          lineWidth: 2,
          color: 'orange',
        });

        mainSeries1.setData(data1.initialData);

        const chart2 = createChart(
          chartContainerRef.current,
          {
            height: 250,
            timeScale: {
              visible: false,
            },
            layout: {
              background: {
                type: ColorType.Solid,
                color: 'transparent',
              },
            },
            grid: {
              vertLines: {
                visible: false
              },
              horzLines: {
                visible: false
              },
            },
            crosshair: {
              horzLine: {
                visible: false,
                labelVisible: false,
              },
              vertLine: {
                labelVisible: false,
              },
            },
          }
        );
        const mainSeries2 = chart2.addLineSeries({
          lineType: LineType.Curved,
          lineWidth: 2,
          color: 'blue',
        });

        mainSeries2.setData(data2.initialData);

        const chart3 = createChart(
          chartContainerRef.current,
          {
            height: 250,
            layout: {
              background: {
                type: ColorType.Solid,
                color: 'transparent',
              },
            },
            grid: {
              vertLines: {
                visible: false
              },
              horzLines: {
                visible: false
              },
            },
            crosshair: {
              horzLine: {
                visible: false,
                labelVisible: false,
              },
              vertLine: {
                labelVisible: false,
              },
            },
          }
        );
        const mainSeries3 = chart3.addLineSeries({
          lineType: LineType.Curved,
          lineWidth: 2,
          color: 'red',
        });

        mainSeries3.setData(data3.initialData);

        chart1.timeScale().subscribeVisibleLogicalRangeChange((timeRange: any) => {
          chart2.timeScale().setVisibleLogicalRange(timeRange);
        });
        chart1.timeScale().subscribeVisibleLogicalRangeChange((timeRange: any) => {
          chart3.timeScale().setVisibleLogicalRange(timeRange);
        });

        chart2.timeScale().subscribeVisibleLogicalRangeChange((timeRange: any) => {
          chart1.timeScale().setVisibleLogicalRange(timeRange);
        });
        chart2.timeScale().subscribeVisibleLogicalRangeChange((timeRange: any) => {
          chart3.timeScale().setVisibleLogicalRange(timeRange);
        });

        chart3.timeScale().subscribeVisibleLogicalRangeChange((timeRange: any) => {
          chart1.timeScale().setVisibleLogicalRange(timeRange);
        });
        chart3.timeScale().subscribeVisibleLogicalRangeChange((timeRange: any) => {
          chart2.timeScale().setVisibleLogicalRange(timeRange);
        });

        const getCrosshairDataPoint = (series: any, param: any) => {
          if (!param.time) {
            return null;
          }
          const dataPoint = param.seriesData.get(series);
          return dataPoint || null;
        }

        const syncCrosshair = (chart: any, series: any, dataPoint: any) => {
          if (dataPoint) {
            chart.setCrosshairPosition(0, dataPoint.time, series);
            return;
          }
          chart.clearCrosshairPosition();
        }

        chart1.subscribeCrosshairMove(param => {
          const dataPoint = getCrosshairDataPoint(mainSeries1, param);
          syncCrosshair(chart2, mainSeries2, dataPoint);
          syncCrosshair(chart3, mainSeries3, dataPoint);
        });
        chart2.subscribeCrosshairMove(param => {
          const dataPoint = getCrosshairDataPoint(mainSeries2, param);
          syncCrosshair(chart1, mainSeries1, dataPoint);
          syncCrosshair(chart3, mainSeries3, dataPoint);
        });
        chart3.subscribeCrosshairMove(param => {
          const dataPoint = getCrosshairDataPoint(mainSeries3, param);
          syncCrosshair(chart1, mainSeries1, dataPoint);
          syncCrosshair(chart2, mainSeries2, dataPoint);
        });


        //  realtime
        const getNextRealtimeUpdate = function* (realtimeData: any[]): Generator<any, null, unknown> {
          for (let i = 0; i < realtimeData.length; i++) {
            yield i;
          }
          return null;
        }


        const streamingDataProvider: Generator<any, null, unknown> = getNextRealtimeUpdate(data1.realtimeData);

        const intervalID = setInterval(() => {
          const update = streamingDataProvider.next();
          if (update.done) {
            clearInterval(intervalID);
            return;
          }
          mainSeries1.update(data1.realtimeData[update.value]);
          mainSeries2.update(data2.realtimeData[update.value]);
          mainSeries3.update(data3.realtimeData[update.value]);
        }, 1500);


        const element = document.documentElement;

        //Resize
        const handleResize = () => {
          chart1.applyOptions({ width: chartContainerRef.current?.clientWidth });
          chart2.applyOptions({ width: chartContainerRef.current?.clientWidth });
          chart3.applyOptions({ width: chartContainerRef.current?.clientWidth });
        };

        window.addEventListener('resize', handleResize);

        // Dark mode
        let observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            let targetElement = mutation.target as HTMLElement;
            if (targetElement.className.toString() == 'dark') {
              chart1.applyOptions({
                layout: {
                  textColor: '#FFF'
                }
              });
              chart2.applyOptions({
                layout: {
                  textColor: '#FFF'
                }
              });
              chart3.applyOptions({
                layout: {
                  textColor: '#FFF'
                }
              });
            } else {
              chart1.applyOptions({
                layout: {
                  textColor: '#333'
                }
              });
              chart2.applyOptions({
                layout: {
                  textColor: '#333'
                }
              });
              chart3.applyOptions({
                layout: {
                  textColor: '#333'
                }
              });
            }
          });
        });
        observer.observe(element, { attributes: true });

        return () => {
          observer.disconnect();
          window.removeEventListener('resize', handleResize);
          chart1.remove();
          chart2.remove();
          chart3.remove()
        };
      }

    },
    [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
  );
  return (
    <>
      {console.log("re render")}
      <div
        ref={chartContainerRef}
      />
    </>
  );
};

export default MainChart;