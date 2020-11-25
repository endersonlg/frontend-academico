import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

type PropsData = {
    name: string;
    value: number;
};
type PropsBarChart = {
    data: PropsData[] | undefined;
    invert?: Boolean;
};

type PayloadCustomizedAxisTick = {
    value: string;
};

type CustomizedAxisTickProps = {
    x: number;
    y: number;
    payload: PayloadCustomizedAxisTick;
};

const customizedAxisTick = (
    x: number,
    y: number,
    payload: PayloadCustomizedAxisTick,
) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={16}
                textAnchor="end"
                fill="#666"
                transform="rotate(-35)"
            >
                {payload.value}
            </text>
        </g>
    );
};

const BarChartGraph: React.FC<PropsBarChart> = ({ data, invert = false }) => {
    return (
        <div
            style={{
                width: '100%',
                height: 400,
            }}
        >
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    {invert == true ? (
                        <XAxis
                            height={200}
                            width={300}
                            dataKey="name"
                            interval={0}
                            tick={({
                                x,
                                y,
                                payload,
                            }: CustomizedAxisTickProps) =>
                                customizedAxisTick(x, y, payload)
                            }
                        />
                    ) : (
                        <XAxis dataKey="name" interval={0} />
                    )}
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartGraph;
