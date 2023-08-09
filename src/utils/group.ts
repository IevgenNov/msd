import moment from "moment";
import { ICovidData, ICovidDeathData } from "@/types/intervalChart";

const groupByMonth = (dataList: ICovidData[]): ICovidDeathData[] => {
  let groupedData: {[key: string]: { deaths: number } } = {};

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
  }).sort((a, b) => moment(a.month, "MMM").month() - moment(b.month, "MMM").month());
}

export default groupByMonth;