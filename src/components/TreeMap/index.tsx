import React from 'react';
import { ResponsiveContainer, Treemap } from 'recharts';

type PropsData = {
    name: string;
    value: number;
};
type PropsTreeMap = {
    data: PropsData[] | undefined;
};

const TreeMap: React.FC<PropsTreeMap> = ({ data }) => {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <Treemap
                    data={data}
                    dataKey="value"
                    stroke="#fff"
                    fill="#8884d8"
                />
            </ResponsiveContainer>
        </div>
    );
};

export default TreeMap;
