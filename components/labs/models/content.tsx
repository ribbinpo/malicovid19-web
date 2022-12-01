import React from "react";
import TableURL from "./table";

const URL = [
  {
    title: 'SEIRD',
    host: `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/seird/result`,
    method: 'GET',
    content: 'This API gives the number of covid-19 infected cases in the future using SEIRD model [Susceptible-Exposed-Infectious-Recovered-Death].',
    parameter:'wave (integer 1-4)'
  },
  {
    title: 'SEIRDS',
    host: `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/seirds/result`,
    method: 'GET',
    content: 'This API gives the number of covid-19 infected cases in the future using SEIRDS model [Susceptible-Exposed-Infectious-Recovered-Death-Susceptible].',
    parameter:'wave (integer 1-4)'
  },
  {
    title: 'LSTM',
    host: `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/lstm/result`,
    method: 'GET',
    content: 'This API gives the number of covid-19 infected cases in the future using LSTM model',
    parameter:'-'
  },
  {
    title: 'LSTM+SEIRD',
    host: `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/lstm_seird/result`,
    method: 'GET',
    content: 'This API gives the number of covid-19 infected cases in the future using LSTM+SEIRD model',
    parameter:'-'
  },
];

export default function ModelContent() {
  return (
    <div className="flex flex-col space-y-6">
      {/* seird */}
      {URL.map((item, key: React.Key) => {
        return (
          <>
            <div key={key} className="flex flex-col items-center justify-center space-y-3">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <div className="md:w-1/2">
              </div>
              <TableURL host={item.host} method={item.method} parameter={item?.parameter} />
              <p className="antialiased leading-relaxed text-justify indent-8">
                {item.content}
              </p>
            </div>
            <hr />
          </>
        )
      })}
    </div>
  );
}