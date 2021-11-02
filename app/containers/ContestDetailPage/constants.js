import { Colors, ColorAlpha, white, gray900, Rdom } from './data';

export const dataV = (a, b, c) => {
  const doughnutData = {
    labels: ['Good Meeting', 'Bad Meeting', 'No Response'],
    datasets: [
      {
        label: 'Doughnut',
        backgroundColor: ['#0D4EE0', '#F55B4F', '#AFC4D5'],
        borderColor: ColorAlpha(white, 0),
        borderWidth: 3,
        data: [a, b, c],
      },
    ],
  };
  return doughnutData;
};

export const data1 = answer => {
  const updateArray = answer.map(item => (item.count ? item.count : 0));
  const updateAns = answer.map(item => (item.answer ? item.answer : 0));
  const doughnutData = {
    labels: updateAns,

    datasets: [
      {
        label: 'Doughnut',
        backgroundColor: [
          '#dc3545',
          '#ff6c7b',
          '#baadc5',
          '#8b71ea',
          '#222cd6',
        ],
        borderColor: ColorAlpha(white, 0),
        borderWidth: 3,

        usePointStyle: true,
        data: updateArray,
      },
    ],
  };

  return doughnutData;
};

export const sliderValue = answer => {
  const values = answer.map(item => (item.count ? item.count : 0));
  const reduceValue = values.reduce((s, n) => s + n);
  return reduceValue;
};

export const doughnutOptions = {
  responsive: true,
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 10,
      usePointStyle: true,
    },
  },
  title: {
    display: false,
    text: '',
    // fontColor: '#fff'
  },
};

export const doughnutOptions1 = {
  responsive: true,

  legend: {
    display: true,
    position: 'left',
    labels: {
      boxWidth: 10,

      usePointStyle: true,
    },
  },
  title: {
    display: false,

    text: '',
    // fontColor: '#fff'
  },
};