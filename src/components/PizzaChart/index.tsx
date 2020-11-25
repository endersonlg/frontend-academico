import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    PieLabelRenderProps,
    ResponsiveContainer,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

type PropsData = {
    name: string;
    value: number;
};
type PropsPizzaChart = {
    data: PropsData[] | undefined;
};

const colors = scaleOrdinal(schemeCategory10).range();

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: PieLabelRenderProps): JSX.Element | null => {
    if (
        innerRadius !== undefined &&
        outerRadius !== undefined &&
        cx !== undefined &&
        cy !== undefined &&
        midAngle !== undefined &&
        percent !== undefined
    ) {
        const radius =
            parseFloat(innerRadius.toString()) +
            (parseFloat(outerRadius.toString()) -
                parseFloat(innerRadius.toString()) * 0.5);
        const x =
            parseFloat(cx.toString()) + radius * Math.cos(-midAngle * RADIAN);
        const y =
            parseFloat(cy.toString()) + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="black"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    }
    return null;
};

const PizzaChart: React.FC<PropsPizzaChart> = ({ data }) => {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        labelLine={true}
                        label={renderCustomizedLabel}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data?.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % data.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PizzaChart;
