<template>
  <highcharts-container :defOptions="options" :styles="sty"></highcharts-container>
</template>

<script>
  var jStat = require('jStat').jStat;
  import HighchartsContainer from '../components/HighchartsComponent.vue'
  export default {
    components: {
      HighchartsContainer
    },

    data () {
      return {
        sty: {
          width: 1200,
          height: 400
        },
        options: {
          chart: {
            type: 'columnrange',
            inverted: false
          },

          title: {
            text: 'Temperature variation by month'
          },

          subtitle: {
            text: 'Observed in Vik i Sogn, Norway, 2017'
          },

          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },

          yAxis: {
            title: {
              text: 'Temperature ( °C )'
            }
          },

          tooltip: {
            valueSuffix: '°C'
          },

          plotOptions: {
            columnrange: {
              groupPadding :0.5,
              dataLabels: {
                enabled: false,//是否显示数据
                format: '{y}'//显示哪个轴的数据
              }
            }
          },

          legend: {
            enabled: false
          },

          series: [{

            type: 'spline',

            data: [0,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
              valueSuffix: '°C'
            }
          },{
            //name: '温度',
            type: 'spline',
            data: [0, -6.9, -9.5, -14.5, -18.2, -21.5, -25.2, -26.5, -23.3, -18.3, -13.9, -9.6],
            tooltip: {
              valueSuffix: '°C'
            }
          },
            {
            name: 'Temperatures',
            borderWidth: 2,
            borderColor:'black',
            color: 'rgba(255, 255, 255, 0)',
            pointWidth:40,
            data: [
              jStat.tci( 1, 0.05, 1,5),
              jStat.tci( 1, 0.05, -8.6,8.5),
              [-10.2, 11.8],
              [-1.7, 12.2],
              [-0.6, 23.1],
              [3.7, 25.4],
              [6.0, 26.2],
              [6.7, 21.4],
              [3.5, 19.5],
              [-1.3, 16.0],
              [-8.7, 9.4],
              [-9.0, 8.6]
            ]
          },
            {
              name: 'Temperatures',
              borderWidth: 2,
              borderColor:'red',
              pointWidth:30,
              color: 'rgba(255, 255, 255, 0)',

              data: [
                [-9.0, 12.3],
                [-7.6, 9.5],
                [-10.2, 14.8],
                [-13.5, 17.2],
                [-0.6, 23.1],
                [3.7, 25.4],
                [6.0, 26.2],
                [6.7, 21.4],
                [3.5, 19.5],
                [-1.3, 16.0],
                [-8.7, 9.4],
                [-9.0, 8.6]
              ]
            }]
        }
      }
      jStat.tci()
    }
  }
</script>

<style>

</style>
