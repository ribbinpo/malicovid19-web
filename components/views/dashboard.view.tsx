import { governPerWeekAPI, governPerProvinceAPI } from "pages/api/govern";
import { useEffect, useState } from "react";
import { BsPersonPlus } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiHealthBookLine } from "react-icons/ri";
import { MdPersonOff } from "react-icons/md";

const DashboardView = () => {
  const [item, setItem] = useState({
    new_case: 0,
    new_death: 0,
    total_case: 0,
    case_walkin: 0,
    total_recovered: 0,
    total_death: 0,
    new_recovered: 0,
  });
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const { data: covid19PerWeek } = await governPerWeekAPI();
      const { data: covid19PerWeeks } = await governPerProvinceAPI();
      setItem(covid19PerWeek[0]);
      setItems(covid19PerWeeks);
    };
    fetchAPI();
  }, []);
  return (
    <div className="space-y-5">
      {/* Row1 */}
      <div className="flex flex-col md:flex-row justify-between pt-3 space-y-3">
        <div className="flex justify-center w-full px-1">
          <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
            <div className="flex p-6 justify-between">
              <h5 className="text-gray-700 text-xl font-medium mb-2">
                <BsPersonPlus /> Infected
              </h5>
              <p className=" text-red-600 text-2xl pl-8 mt-5">
                {item.new_case || 0}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full px-1">
          <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
            <div className="flex p-6 justify-between">
              <h5 className="text-gray-700 text-xl font-medium mb-2">
                <MdPersonOff /> Death
              </h5>
              <p className=" text-red-700 text-2xl pl-8 mt-5">
                {item.new_death || 0}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full px-1">
          <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
            <div className="flex p-6 justify-between">
              <h5 className="text-gray-700 text-xl font-medium mb-2">
                <MdPersonOff /> Recovered
              </h5>
              <p className=" text-red-700 text-2xl pl-8 mt-5">
                {item.new_recovered || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row2 */}
      <div className="overflow-y-scroll max-h-96 overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                province
              </th>
              <th scope="col" className="py-3 px-6">
                new_case
              </th>
              <th scope="col" className="py-3 px-6">
                total_case
              </th>
              <th scope="col" className="py-3 px-6">
                new_death
              </th>
              <th scope="col" className="py-3 px-6">
                total_death
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((prop: any, i: React.Key) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {prop.province}
                </th>
                <td className="py-4 px-6">{prop.new_case}</td>
                <td className="py-4 px-6">{prop.total_case}</td>
                <td className="py-4 px-6">{prop.new_death}</td>
                <td className="py-4 px-6">{prop.total_death}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Row3 */}
      <div className="flex flex-col md:flex-row space-y-3">
        <div className="flex justify-center w-full px-1">
          <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
            <div className="flex p-6 justify-between">
              <h5 className="text-gray-700 text-xl font-medium mb-2">
                <RiMentalHealthLine /> Total Infected
              </h5>
              <p className=" text-green-700 text-2xl pl-8 mt-5">
                {item.total_case || 0}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full px-1">
          <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
            <div className="flex p-6 justify-between">
              <h5 className="text-gray-700 text-xl font-medium mb-2">
                <MdOutlineHealthAndSafety /> Total Death
              </h5>
              <p className=" text-sky-600 text-2xl pl-8 mt-5">
                {item.total_death || 0}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full px-1">
          <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
            <div className="flex p-6 justify-between">
              <h5 className="text-gray-700 text-xl font-medium mb-2">
                <RiHealthBookLine /> Total Recovered
              </h5>
              <p className=" text-green-700 text-2xl pl-8 mt-5">
                {item.total_recovered || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
