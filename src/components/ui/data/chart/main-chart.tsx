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
        // const handleResize = () => {
        //   chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
        //   console.log("resize")
        // };
        // const chart = createChart(chartContainerRef.current, {
        //   layout: {
        //     background: { type: ColorType.Solid, color: backgroundColor },
        //     textColor: textColor,
        //   },
        //   grid: {
        //     vertLines: {
        //       visible: false
        //     },
        //     horzLines: {
        //       visible: false
        //     },
        //   },
        //   crosshair: {
        //     // hide the horizontal crosshair line
        //     horzLine: {
        //       visible: false,
        //     },
        //     vertLine: {
        //       visible: false,
        //     },
        //   },
        //
        //   width: chartContainerRef.current.clientWidth,
        //   height: height,
        // });
        //
        // const chart1 = createChart(chartContainerRef.current, {
        //   layout: {
        //     background: { type: ColorType.Solid, color: 'while' },
        //     textColor: textColor,
        //   },
        //   grid: {
        //     vertLines: {
        //       visible: true
        //     },
        //     horzLines: {
        //       visible: true
        //     },
        //   },
        //   crosshair: {
        //     // hide the horizontal crosshair line
        //     horzLine: {
        //       visible: false,
        //     },
        //     vertLine: {
        //       visible: false,
        //     },
        //   },
        //
        //   width: chartContainerRef.current.clientWidth,
        //   height: 20,
        // });
        //
        // chart.timeScale().fitContent();
        //
        // // add this tooltip here
        //
        // const toolTipWidth = 80;
        // const toolTipHeight = 80;
        // const toolTipMargin = 0;
        //
        // const toolTip: HTMLDivElement = document.createElement('div');
        // toolTip.style.cssText = `width: 96px; height: 80px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
        // toolTip.style.background = 'white';
        // toolTip.style.color = 'black';
        // toolTip.style.borderColor = 'rgba( 38, 166, 154, 1)';
        // chartContainerRef.current.appendChild(toolTip);
        //
        // chart.subscribeCrosshairMove((e: MouseEventParams) => {
        //   if (e.point === undefined ||
        //     !e.time) {
        //     toolTip.style.display = 'none';
        //   } else {
        //     const dateStr = e.time;
        //     toolTip.style.display = 'block';
        //     const data: any = e.seriesData.get(newSeries);
        //     if (data) {
        //       const price = data?.value !== undefined ? data?.value : data.close;
        //       toolTip.innerHTML = `<div style="color: ${'#2962FF'}">Apple Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: ${'black'}">
        //     ${Math.round(100 * price) / 100}
        //     </div><div style="color: ${'black'}">
        //     ${dateStr}
        //     </div>`;
        //       const coordinate = newSeries.priceToCoordinate(price);
        //       let shiftedCoordinate: number = e.point.x;
        //       if (coordinate === null) {
        //         return;
        //       }
        //       if (chartContainerRef.current) {
        //         shiftedCoordinate = ( e.point.x + toolTipWidth + toolTipMargin ) > chartContainerRef.current.clientWidth
        //           ? chartContainerRef.current.clientWidth - toolTipWidth - toolTipMargin + e.point.x
        //           : e.point.x + chartContainerRef.current.offsetLeft;
        //         const coordinateY =
        //           coordinate - toolTipHeight - toolTipMargin > 0
        //             ? coordinate - toolTipHeight - toolTipMargin
        //             : Math.max(
        //               0,
        //               Math.min(
        //                 chartContainerRef.current.clientHeight - toolTipHeight - toolTipMargin,
        //                 coordinate + toolTipMargin
        //               )
        //             );
        //         toolTip.style.left = shiftedCoordinate + 'px';
        //         toolTip.style.top = coordinate + 'px';
        //       }
        //     }
        //
        //   }
        // })
        //
        // const newSeries = chart.addLineSeries({
        //   color: lineColor,
        //   lineType: LineType.Curved,
        //   lineWidth: 2
        // });
        // newSeries.setData(data);
        //
        // window.addEventListener('resize', handleResize);
        //
        // let element = document.documentElement;
        //
        // // Create a new MutationObserver instance
        // let observer = new MutationObserver((mutations) => {
        //   mutations.forEach((mutation) => {
        //     let targetElement = mutation.target as HTMLElement;
        //     if (targetElement.className.toString() == 'dark') {
        //       console.log("dark")
        //       chart.applyOptions({ layout: {
        //         textColor: '#FFF'
        //         }})
        //     }
        //     else {
        //       console.log("light")
        //       chart.applyOptions({ layout: {
        //         textColor: '#333'
        //         }})
        //     }
        //   });
        // });
        // observer.observe(element, { attributes: true });
        //
        // return () => {
        //   window.removeEventListener('resize', handleResize);
        //   observer.disconnect();
        //   chart.remove();
        // };
        const generateDataLine: any = (startValue: number, startDate?: number) => {
          const res = [];
          const time: any = startDate ?? ( new Date(Date.UTC(2002, 0, 1, 0, 0, 0, 0)) );
          // for (let i = 0; i < 500; ++i) {
          //   res.push({
          //     time: time.getTime() / 1000,
          //     value: i + startValue + (Math.random()*100) * (Math.random()*100) - (Math.random()*100) * (Math.random()*100),
          //   });
          const endDate = new Date(); // Current date
          let i = 0;

          while (time <= endDate) {
            res.push({
              time: time.getTime() / 1000,
              value: i + startValue + ( Math.random() * Math.random() * 10 ) * ( Math.random() * Math.random() * 1000 ) - ( Math.random() * Math.random() * 100 ) * ( Math.random() * Math.random() * 100 ),
            });

            time.setUTCDate(time.getUTCDate() + 1);
            i++;
          }

          time.setUTCDate(time.getUTCDate() + 1);
          return res;
        }

        let randomFactor = 25 + Math.random() * 25;
        const samplePoint = (i: any) =>
          i *
          (0.5 +
            Math.sin(i / 1) * 0.2 +
            Math.sin(i / 2) * 0.4 +
            Math.sin(i / randomFactor) * 0.8 +
            Math.sin(i / 50) * 0.5) +
          200 +
          i * 2;

        const generateData = (
          numberOfCandles = 500,
          updatesPerCandle = 5,
          startAt = 100
        ) => {
          const createCandle = (val: number, time: any) => ({
            time,
            open: val,
            high: val,
            low: val,
            close: val,
          });

          const updateCandle = (candle: any, val: any) => ({
            time: candle.time,
            close: val,
            open: candle.open,
            low: Math.min(candle.low, val),
            high: Math.max(candle.high, val),
          });

          randomFactor = 25 + Math.random() * 25;
          const date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));
          const numberOfPoints = numberOfCandles * updatesPerCandle;
          const initialData = [];
          const realtimeUpdates = [];
          let lastCandle;
          let previousValue = samplePoint(-1);
          for (let i = 0; i < numberOfPoints; ++i) {
            if (i % updatesPerCandle === 0) {
              date.setUTCDate(date.getUTCDate() + 1);
            }
            const time = date.getTime() / 1000;
            let value = samplePoint(i);
            const diff = (value - previousValue) * Math.random();
            value = previousValue + diff;
            previousValue = value;
            if (i % updatesPerCandle === 0) {
              const candle = createCandle(value, time);
              lastCandle = candle;
              if (i >= startAt) {
                realtimeUpdates.push(candle);
              }
            } else {
              const newCandle = updateCandle(lastCandle, value);
              lastCandle = newCandle;
              if (i >= startAt) {
                realtimeUpdates.push(newCandle);
              } else if ((i + 1) % updatesPerCandle === 0) {
                initialData.push(newCandle);
              }
            }
          }

          return {
            initialData,
            realtimeUpdates,
          };
        }

        const data = generateData(2500, 20, 1000);

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
                visible: false,
              },
              horzLines: {
                visible: false,
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
        const mainSeries1 = chart1.addCandlestickSeries({
          upColor: '#26a69a',
          downColor: '#ef5350',
          borderVisible: false,
          wickUpColor: '#26a69a',
          wickDownColor: '#ef5350',
        });

        // mainSeries1.setData(generateData(0));

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

        mainSeries2.setData(generateDataLine(100));

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

        mainSeries3.setData(generateDataLine(10));

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
            chart.setCrosshairPosition(dataPoint.value, dataPoint.time, series);
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
          for (const dataPoint of realtimeData) {
            yield dataPoint;
          }
          return null;
        }


        const streamingDataProvider: Generator<any, null, unknown> = getNextRealtimeUpdate(data.realtimeUpdates);

        const intervalID = setInterval(() => {
          const update = streamingDataProvider.next();
          if (update.done) {
            clearInterval(intervalID);
            return;
          }
          mainSeries1.update(update.value);
        }, 100);



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
    <div
      ref={chartContainerRef}
    />
  );
};

export default MainChart;