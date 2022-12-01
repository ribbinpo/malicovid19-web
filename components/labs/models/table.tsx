interface TableType {
  host: string;
  method: string;
  header?: string;
  parameter?: string;
}

const TableURL = ({ host, method, header, parameter }: TableType) => {
  return (
    <div className="w-full max-w-md overflow-x-auto relative sm:rounded-lg">
      <table className="text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="border border-slate-300 px-1 md:px-5 py-3 text-right w-1/4">
              HOST
            </td>
            <td className="border border-slate-300 px-1 md:px-5 py-3">
              {host}
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="border border-slate-300 px-1 md:px-5 py-3 text-right">
              METHOD
            </td>
            <td className="border border-slate-300 px-1 md:px-5 py-3">{method || 'GET'}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="border border-slate-300 px-1 md:px-5 py-3 text-right">
              HEADER
            </td>
            <td className="border border-slate-300 px-1 md:px-5 py-3">{header || '-'}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="border border-slate-300 px-1 md:px-5 py-3 text-right">
              PARAMETER
            </td>
            <td className="border border-slate-300 px-1 md:px-5 py-3">{parameter || '-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableURL;
