"use client";
import { createChart } from 'lightweight-charts';
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

interface Colors {
  backgroundColor?: string;
  lineColor?: string;
  textColor?: string;
}

interface AppProps {
  colors?: Colors;
}

interface ChartProps {
  layout: any;
  children: React.ReactNode;
}

interface ChartContainerProps {
  layout: any;
  children: React.ReactNode;
  container?: any;
}

interface SeriesProps {
  type: 'line' | 'area';
  data: { time: string; value: number }[];
  color: string;
}

const Context = createContext<any>(null);

const initialData = [
  { time: '2018-10-11', value: 52.89 },
  { time: '2018-10-12', value: 51.65 },
  { time: '2018-10-13', value: 51.56 },
  { time: '2018-10-14', value: 50.19 },
  { time: '2018-10-15', value: 51.86 },
  { time: '2018-10-16', value: 51.25 },
];

const initialData2 = [
  { time: '2018-10-11', value: 42.89 },
  { time: '2018-10-12', value: 41.65 },
  { time: '2018-10-13', value: 41.56 },
  { time: '2018-10-14', value: 40.19 },
  { time: '2018-10-15', value: 41.86 },
  { time: '2018-10-16', value: 41.25 },
];
const currentDate = new Date(initialData[initialData.length - 1].time);

export const CustomChart: React.FC<AppProps> = ({ colors = {} }) => {
  const {
    backgroundColor = 'white',
    lineColor = '#2962FF',
    textColor = 'black',
  } = colors;

  const [chartLayoutOptions, setChartLayoutOptions] = useState<any>({});
  const series1 = useRef();
  const series2 = useRef();
  const [started, setStarted] = useState(false);
  const [isSecondSeriesActive, setIsSecondSeriesActive] = useState(false);

  useEffect(() => {
    if (series1.current === null) {
      return;
    }
    let intervalId: NodeJS.Timeout;

    if (started) {
      intervalId = setInterval(() => {
        currentDate.setDate(currentDate.getDate() + 1);
        const next = {
          time: currentDate.toISOString().slice(0, 10),
          value: 53 - 2 * Math.random(),
        };
        series1.current.update(next);
        if (series2.current) {
          series2.current.update({
            ...next,
            value: 43 - 2 * Math.random(),
          });
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [started]);

  useEffect(() => {
    setChartLayoutOptions({
      background: {
        color: backgroundColor,
      },
      textColor,
    });
  }, [backgroundColor, textColor]);

  return (
    <>
      <button type="button" onClick={() => setStarted((current) => !current)}>
        {started ? 'Stop updating' : 'Start updating series'}
      </button>
      <button type="button" onClick={() => setIsSecondSeriesActive((current) => !current)}>
        {isSecondSeriesActive ? 'Remove second series' : 'Add second series'}
      </button>
      <Chart layout={chartLayoutOptions}>
        <Series ref={series1} type={'line'} data={initialData} color={lineColor}/>
        {isSecondSeriesActive && (
          <Series ref={series2} type={'area'} data={initialData2} color={lineColor}/>
        )}
      </Chart>
    </>
  );
};

export const Chart: React.FC<ChartProps> = ({ layout, children }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const handleRef = useCallback((ref: any) => setContainer(ref), []);

  return (
    <div ref={handleRef}>
      {container && <ChartContainer {...layout} container={container}>{children}</ChartContainer>}
    </div>
  );
};

export const ChartContainer = forwardRef<HTMLDivElement, ChartContainerProps>((props, ref) => {
  const { children, container, layout, ...rest } = props;

  const chartApiRef = useRef<any>({
    isRemoved: false,
    api() {
      if (!this._api) {
        this._api = createChart(container, {
          ...rest,
          layout,
          width: container.clientWidth,
          height: 300,
        });
        this._api.timeScale().fitContent();
      }
      return this._api;
    },
    free(series: SeriesProps) {
      if (this._api && series) {
        this._api.removeSeries(series);
      }
    },
  });

  useLayoutEffect(() => {
    const currentRef = chartApiRef.current;
    const chart = currentRef.api();

    const handleResize = () => {
      chart.applyOptions({
        ...rest,
        width: container.clientWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chartApiRef.current.isRemoved = true;
      chart.remove();
    };
  }, []);

  useLayoutEffect(() => {
    const currentRef = chartApiRef.current;
    currentRef.api();
  }, []);

  useLayoutEffect(() => {
    const currentRef = chartApiRef.current;
    currentRef.api().applyOptions(rest);
  }, []);

  useImperativeHandle(ref, () => chartApiRef.current.api(), []);

  useEffect(() => {
    const currentRef = chartApiRef.current;
    currentRef.api().applyOptions({ layout });
  }, [layout]);

  return (
    <Context.Provider value={chartApiRef.current}>
      {children}
    </Context.Provider>
  );
});
ChartContainer.displayName = 'ChartContainer';

export const Series =
  forwardRef<HTMLDivElement, SeriesProps & { children?: React.ReactNode }>((
    { children, ...props },
    ref) => {
    const parent = useContext(Context);
    const context = useRef<any>({
      api() {
        if (!this._api) {
          const { data, type, ...rest } = props;
          this._api =
            type === 'line'
              ? parent.api().addLineSeries(rest)
              : parent.api().addAreaSeries(rest);
          this._api.setData(data);
        }
        return this._api;
      },
      free() {
        if (this._api && !parent.isRemoved) {
          parent.free(this._api);
        }
      },
    });

    useLayoutEffect(() => {
      const currentRef = context.current;
      currentRef.api();

      return () => currentRef.free();
    }, []);

    useLayoutEffect(() => {
      const currentRef = context.current;
      const { data, ...rest } = props;
      currentRef.api().applyOptions(rest);
    });

    useImperativeHandle(ref, () => context.current.api(), []);

    return (
      <Context.Provider value={context.current}>
        {children}
      </Context.Provider>
    );
  });
Series.displayName = 'Series';
