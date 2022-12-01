import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ModelContent from 'components/labs/models/content';
import ExperimentContent from 'components/labs/experiments/content';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function LabView() {

  return (
    <>
      <Tab.Group>
        <div className='w-full flex flex-col items-center'>
          <div className="w-full max-w-md md:max-w-xl px-5 py-8 sm:px-0">
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-green-400 shadow'
                      : 'text-slate-500 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                Experiments
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-green-400 shadow'
                      : 'text-slate-500 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                Models
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="w-full">
            {/* Experiments */}
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
              )}
            >
              <ExperimentContent />
            </Tab.Panel>
            {/* Result */}
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
              )}
            >
              <ModelContent />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  )
}
