import React from 'react'
import CreditCard from '../../components/CreditCard'


const Dashboard = () => {

  return (
    <div className='text-center pb-20'>
      <div className="flex flex-col items-start md:flex-row gap-10 px-6 ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center pt-6">
            <h1>My Cards</h1>
             <p>See All</p>
          </div>
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto">
            <CreditCard balance={''} cardHolder={''} validThru={''} cardNumber={''} gradientFrom={''} gradientTo={''} chipImage={''} bottomBackground={''}/>
           
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className='pt-6 '>Recent Transactions</h1>
          {/* <TransactionCard /> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 py-14 h-[500px]">
        <div className="flex flex-col items-start justify-center col-span-7 space-y-8">
          <p className='font-bold'>Weekly Activity</p>
          {/* <BarChartComponent /> */}
        </div>
        <div className="flex flex-col items-start justify-center col-span-5 space-y-8">
          <p className='font-bold'>Expense Statistics</p>
          {/* <PieChartComponent/> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 h-[300px]">
        <div className=" col-span-5 my-auto space-y-4 py-6 flex flex-col items-start">
          <p className='font-bold'>Quick transfer</p>
          {/* <TransferComponent /> */}
        </div>
        <div className="flex flex-col items-start justify-center col-span-7 space-y-4  py-6 ">
          <p className='font-bold text-xl'>Balance History</p>
          {/* <AreaChartComponent /> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard