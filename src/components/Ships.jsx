import React from 'react'
import { Gunboat } from './canvas'

const Ships = () => {
  return (
    <>
        <div className="mb-4 border-b bg-gray-100 border-gray-200 shadow-md">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Battleship
                    </button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                        Cruiser
                    </button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
                        Frigate
                    </button>
                </li>
                <li role="presentation">
                    <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">
                        Gunboat
                    </button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800 justify-center align-middle" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className='m-auto w-full border border-gray-300 mb-5'>                
                    <iframe src="./canvas/Donnager.jsx" frameborder="1"></iframe>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 justify-center align-middle">
                    The <strong className="font-medium text-gray-800 dark:text-white">Donnager-class</strong> is the premier battleship of the Martian Congressional Republic Navy, a hallmark of its technological advantage over the aging United Nations of Earth.
                </p>
            </div>
            <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <div className='m-auto w-full border border-gray-300 mb-5'>                
                    <iframe src="./canvas/Scirocco.jsx" frameborder="1"></iframe>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 justify-center align-middle">
                    The <strong className="font-medium text-gray-800 dark:text-white"> Scirocco-class </strong> is a jack-of-all-trades, master of none warship that ferries troops and supplies to the frontlines.
                </p>
            </div>
            <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <div className='m-auto w-full border border-gray-300 mb-5'>                
                    <iframe src="./canvas/Tachi.jsx" frameborder="1"></iframe>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 justify-center align-middle">
                    Assigned to the role of torpedo bomber, picketing, and long-range patrols, the <strong className="font-medium text-gray-800 dark:text-white"> Tachi-class </strong> is an adaptable and modular platform that is future-proofed for decades to come.
                </p>
            </div>
            <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800 justify-center align-middle" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                <div className='m-auto w-full border border-gray-300 mb-5'>                
                    <Gunboat />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Slated for mass-production, the <strong className="font-medium text-gray-800 dark:text-white"> Morrigan-class </strong> has been built in the hundreds, with dozens more on the way.
                </p>
            </div>
        </div>
    </>
  )
}

export default Ships