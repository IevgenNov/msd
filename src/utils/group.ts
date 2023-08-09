import moment from "moment";

type InputType = {
  date: string;
  outcomes: {
    death: {
      total: {
        value: number;
      };
    };
  };
};

type OutPutType = {
  month: string;
  deaths: number;
};

const groupByMonth = (dataList: InputType[]): OutPutType[] => {
  let groupedData = {};

  dataList.forEach(data => {
    let date = moment(data.date);
    let monthYearKey = date.format('MMM');
    let year = date.year();

    if (year !== 2020) {
      return;
    }

    if (!groupedData[monthYearKey]) {
      groupedData[monthYearKey] = {
        deaths: 0
      };
    }

    groupedData[monthYearKey].deaths += data.outcomes.death.total.value;
  });

  return Object.keys(groupedData).map(key => {
    return {
      month: key,
      deaths: groupedData[key].deaths
    };
  }).sort((a, b) => moment().month(a.month).format("M") - moment().month(b.month).format("M"));
}

export default groupByMonth;