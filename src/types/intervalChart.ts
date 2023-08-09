export interface IPublicAPIResponse {
  data: ICovidData[]
}

export interface ICovidData {
  date: string;
  outcomes: {
    death: {
      total: {
        value: number;
      };
    };
  };
  cases: {
    total: {
      calculated: {
        population_percent: number;
      }
    }
  }
}

export interface ICovidDeathData {
  month: string;
  deaths: number;
}

