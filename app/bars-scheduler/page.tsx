'use client';

import { useState } from 'react';
// TODO: Implement diagonal scrolling
import { PieChart, pieChartDefaultProps } from 'react-minimal-pie-chart';
import TaskForm from './components/Form';
import { ColorType } from './constants';
import { getColor } from './utils';
// Link with youtube music & spotify
const Page = () => {
  const [update, setUpdate] = useState(0);
  const handleUpdate = () => setUpdate((prev) => prev + 1);
  const value = 5 + update * 6;

  return (
    <>
      <main style={{ padding: 10, fontSize: 18, letterSpacing: 5 }}>
        {/* <TaskForm /> */}
        <button className="mt-10" onClick={handleUpdate}>
          Re render
        </button>
        <h1 className="mt-10" style={{ letterSpacing: 1, textAlign: 'center', fontSize: 42 }}>
          Task Sequence
        </h1>
        <div
          style={{
            position: 'relative'
          }}
          className="mt-10"
        >
          {(
            [
              {
                size: 133,
                // color: '#28A745',
                color: getColor(value),
                lineWidth: 25
              },
              {
                size: 125,
                // color: '#28A74550',
                color: `${getColor(value)}50`,
                lineWidth: 8
              },
              {
                size: 117,
                // color: '#28A74510',
                color: `${getColor(value)}10`,
                lineWidth: 8
              }
              // {
              //   size: 117,
              //   color: '#28A74510',
              //   lineWidth: 8
              // }
            ].reverse() as {
              size: number;
              color: string;
              lineWidth: number;
            }[]
          ).map((config, index) => {
            return (
              <PieChart
                animationDuration={500}
                animationEasing="ease-out"
                key={index}
                style={{
                  position: index > 0 ? `absolute` : `relative`,
                  top: (index > 0 && 0) || 0,
                  left: (index > 0 && 0) || 0
                  // zIndex: 3
                }}
                data={[
                  {
                    title: 'One',
                    value,
                    color: config.color
                  },
                  { title: 'Two', value: 100 - value, color: 'transparent' }
                  // { title: 'Two', value: 100 - tmpValue, color: '#000' }
                  // { title: 'Three', value: Math.floor(Math.random() * 100) + 1, color: '#6A2135', label: 'test' },
                  // {
                  //   title: 'Three',
                  //   value: 20,
                  //   color: ColorType.disabled
                  // }
                ]}
                lineWidth={config.lineWidth}
                // paddingAngle={5}
                startAngle={-90}
                segmentsStyle={{
                  cursor: 'pointer',
                  strokeOpacity: 0.8,
                  // TODO: THIS CAN REPLACE HAVING MULTIPLE PIE CHARTS
                  // transition: 'all 1.35s ease'
                  transition: 'stroke 1.35s ease'
                }}
                // onClick={(event, index) => {
                //   console.log(index);
                // }}
                label={({ dataEntry, dataIndex }) => dataIndex === 0 && index === 0 && value}
                radius={pieChartDefaultProps.radius - 5}
                // segmentsShift={(index) => (index === 0 ? 1 : 0)}
                viewBoxSize={[config.size, config.size]}
                center={[config.size / 2, config.size / 2]}
                animate
                labelPosition={0}
                labelStyle={{
                  letterSpacing: 0,
                  fontSize: 25,
                  // stroke: `#e3e3e3`,
                  stroke: getColor(value),
                  strokeWidth: 1.5,
                  fill: `#e3e3e3`,
                  transition: 'stroke 1.35s ease'
                }}
              />
            );
          })}
          {/* <PieChart
            style={{
              zIndex: 3
            }}
            data={[
              {
                title: 'One',
                value: tmpValue,
                color: '#28A745'
              },
              { title: 'Two', value: 100 - tmpValue, color: '#DC3444' }
              // { title: 'Two', value: 100 - tmpValue, color: '#000' }
              // { title: 'Three', value: Math.floor(Math.random() * 100) + 1, color: '#6A2135', label: 'test' },
              // {
              //   title: 'Three',
              //   value: 20,
              //   color: ColorType.disabled
              // }
            ]}
            lineWidth={25}
            paddingAngle={5}
            startAngle={-90}
            segmentsStyle={{
              // neon style
              // transition: 'stroke 3s',
              cursor: 'pointer'
              // lightingColor: '#fff'
              // css svg gradient filter
              // filter: 'url(#filter)'
              // fill: '#fff'
              // d: `path('M150, 10 L40, 200 L260, 200 L260, 200Z')`,
              // fill: `#87484840`,
              // transition: 'all 0.35s ease'
            }}
            onClick={(event, index) => {
              console.log(index);
            }}
            label={({ dataEntry, dataIndex }) => dataIndex === 2 && dataEntry.value}
            // radius={pieChartDefaultProps.radius - 5}
            segmentsShift={(index) => (index === 0 ? 1 : 0)}
            viewBoxSize={[130, 130]}
            center={[65, 65]}
            animate
            labelPosition={0}
            // label={({ dataEntry }) => dataEntry.label}
            labelStyle={{
              letterSpacing: 0,
              stroke: '#fff',
              fontWeight: 'semi-bold'
            }}
          />

          <PieChart
            style={{
              position: `absolute`,
              top: 0,
              left: 0,
              zIndex: 2
            }}
            data={[
              {
                title: 'One',
                value: tmpValue,
                // redish color
                color: '#28A74530'
              },
              { title: 'Two', value: 100 - tmpValue, color: '#C13C3730' }
            ]}
            lineWidth={35}
            paddingAngle={5}
            startAngle={-90}
            segmentsStyle={{
              cursor: 'pointer'
            }}
            onClick={(event, index) => {
              console.log(index);
            }}
            label={({ dataEntry, dataIndex }) => dataIndex === 2 && dataEntry.value}
            segmentsShift={(index) => (index === 0 ? 1 : 0)}
            viewBoxSize={[115, 115]}
            center={[57.5, 57.5]}
            animate
            labelPosition={0}
            // label={({ dataEntry }) => dataEntry.label}
            labelStyle={{
              letterSpacing: 0,
              stroke: '#fff',
              fontWeight: 'semi-bold'
            }}
          />

          <PieChart
            style={{
              position: `absolute`,
              top: 0,
              left: 0,
              zIndex: 1
            }}
            data={[
              {
                title: 'One',
                value: tmpValue,
                color: '#28A74510'
              },
              { title: 'Two', value: 100 - tmpValue, color: '#C13C3730' }
            ]}
            lineWidth={40}
            paddingAngle={5}
            startAngle={-90}
            segmentsStyle={{
              cursor: 'pointer'
            }}
            onClick={(event, index) => {
              console.log(index);
            }}
            label={({ dataEntry, dataIndex }) => dataIndex === 2 && dataEntry.value}
            segmentsShift={(index) => (index === 0 ? 1 : 0)}
            viewBoxSize={[130, 130]}
            center={[65, 65]}
            animate
            labelPosition={0}
            // label={({ dataEntry }) => dataEntry.label}
            labelStyle={{
              letterSpacing: 0,
              stroke: '#fff',
              fontWeight: 'semi-bold'
            }}
          /> */}
          {/* {tasks.map((task, index, array) => {
            // const majorDependency = findMajorDependency(array, task.dependencies || []);
            const left = findLeftPosition(array, task.dependencies || []);

            return (
              <Bar
                key={index}
                {...task}
                style={{
                  position: 'absolute',
                  left,
                  top: index * BAR_AND_LABEL_HEIGHT
                }}
              />
            );
          })} */}
        </div>
      </main>
    </>
  );
};

export default Page;
