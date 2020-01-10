
import React  from 'react';
import { VictoryBar , VictoryChart, VictoryTheme,} from 'victory';

const UserRatingChart = () => {

    const data = [
        {people: 20, rating: 5},
        {people: 30, rating: 4},
        {people: 10, rating: 3},
        {people: 50, rating: 2},
        {people: 20, rating: 1},
        {people: 1, rating: 0}
      ];


  return (
    <div style={{width:'80%',
    bottom: '0', height:'80%'}}>
      <VictoryChart 
        responsive={false}
        animate={{
          duration: 500,
          onLoad: { duration: 200 }
        }}
        ddomainPadding={40}
        theme={VictoryTheme.material}
      >
        <VictoryBar
          style={{ data: { fill: '#1b5c87'} }}
          barRatio={0.5}
          cornerRadius={0}
          alignment='start'
          data={[
            { x: '1 star', y: 1 },
            { x: '2 star' , y: 2},
            { x: '3 star', y: 3 },
            { x: '4 star', y: 4 },
            { x: '5 star', y: 5 }
          ]}
        />
      </VictoryChart>

    </div>
  )
}
export default UserRatingChart;
