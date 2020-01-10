
import React  from 'react';
import { VictoryBar , VictoryChart, VictoryTheme,} from 'victory';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const ChartContainner=styled.div`
  width: 450px;
  margin: 0 auto;
  height: 450px;
`;


const UserRatingChart = () => {

  const usersRatingArray = useSelector((state)=> state.getUserRatings)
  const users = usersRatingArray && usersRatingArray.userRatings
  const starRatings = users.map((user, i)=> {
   return user.data.starRating;
 })

  let oneStar = starRatings.filter(x => x === 1).length;
  let twoStar = starRatings.filter(x => x === 2).length;
  let threeStar = starRatings.filter(x => x === 3).length;
  let fourStar = starRatings.filter(x => x === 4).length;
  let fiveStar = starRatings.filter(x => x === 5).length;

  return (
    <ChartContainner>
      <VictoryChart
        responsive={false}
        animate={{
          duration: 500,
          onLoad: { duration: 200 }
        }}
        ddomainPadding={10}
        theme={VictoryTheme.material}
      >
        <VictoryBar
          style={{ data: { fill: '#1b5c87'} }}
          barRatio={0.5}
          cornerRadius={0}
          alignment='start'
          data={[
            { x: '1 star', y: oneStar },
            { x: '2 star' , y: twoStar},
            { x: '3 star', y: threeStar },
            { x: '4 star', y: fourStar },
            { x: '5 star', y: fiveStar }
          ]}
        />
      </VictoryChart>

    </ChartContainner>
  )
}
export default UserRatingChart;
