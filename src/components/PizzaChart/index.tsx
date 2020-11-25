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
    fill,
    name,
    value,
}: PieLabelRenderProps): JSX.Element | null => {
    if (
        innerRadius !== undefined &&
        outerRadius !== undefined &&
        cx !== undefined &&
        cy !== undefined &&
        midAngle !== undefined &&
        percent !== undefined
    ) {
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx =
            parseInt(cx.toString()) +
            (parseInt(outerRadius.toString()) + 10) * cos;
        const sy =
            parseInt(cy.toString()) +
            (parseInt(outerRadius.toString()) + 10) * sin;
        const mx =
            parseInt(cx.toString()) +
            (parseInt(outerRadius.toString()) + 30) * cos;
        const my =
            parseInt(cy.toString()) +
            (parseInt(outerRadius.toString()) + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
        return (
            <g>
                <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                    stroke={fill}
                    fill="none"
                />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    textAnchor={textAnchor}
                    fill="#333"
                >
                    {name}
                </text>
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    dy={18}
                    textAnchor={textAnchor}
                    fill="#999"
                >
                    {`(${value} - ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
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
