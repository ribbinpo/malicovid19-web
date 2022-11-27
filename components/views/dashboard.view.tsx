import { useEffect } from 'react';
import { governPerWeekAPI, governPerProvinceAPI  } from 'pages/api/govern';
import { PROVINCE_TH_TO_ENG } from 'constants/province';

const DashboardView = () => {
  useEffect(() => {
    const fetchAPI = async () => {
      const { data: covid19PerWeek } = await governPerWeekAPI();
      const { data: covid19PerWeeks } = await governPerProvinceAPI();
      console.log(covid19PerWeek);
      console.log(covid19PerWeeks);
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