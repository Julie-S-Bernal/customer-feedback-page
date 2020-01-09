
import React from 'react';
import { VictoryBar , VictoryChart} from 'victory';

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
    <div style={{width:'100%', height: '100%'}}>
       <VictoryChart domainPadding={10}>
        <VictoryBar
          style={{ data: { fill: "#6DB65B" } }}
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
