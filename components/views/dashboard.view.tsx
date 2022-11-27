import { useEffect } from 'react';
import { governPerWeekAPI, governPerProvinceAPI  } from 'api/govern';
import { PROVINCE_TH_TO_ENG } from 'constants/province';

const DashboardView = () => {
  useEffect(() => {
    const fetchAPI = async () => {
      const { data: covid19PerWeek } = await governPerWeekAPI();
      const { data: covid19PerWeeks } = await governPerProvinceAPI();
      console.log(covid19PerWeek);
      console.log(covid19PerWeeks);
      // console.log(PROVINCE_TH_TO_ENG[covid19PerWeeks[0]?.province || ""]);
    };
    fetchAPI();
  }, []);
  return (
    <div>
      Dashboard
    </div>
  );
};

export default DashboardView;