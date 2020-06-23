import React from 'react';
import Grid from '@material-ui/core/Grid';
import loadable from 'loadable-components';

const Chart = loadable(() => import('react-apexcharts'));
const LineChart = ({ upVotesArray, userIdArray }) => {
  const maxVotes = Math.max(...upVotesArray);
  const options = {
    series: [
      {
        name: 'Votes',
        data: upVotesArray,
      },
    ],
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    xaxis: {
      type: 'numeric',
      categories: userIdArray,
      labels: {
        formatter: function (val) {
          return Math.round(val);
        },
      },
    },
    title: {
      text: 'UpVote Count',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      colors: ['#FFA41B'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: maxVotes + 5,
      title: {
        text: 'UpVotes',
      },
    },
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Chart series={options.series} options={options} type="line" />
      </Grid>
    </Grid>
  );
};

export default LineChart;
