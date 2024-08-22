import CreditCard from "@/components/CreditCard";
import RecentTransaction from "@/components/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">My Cards</h2>
            <a href="#" className="text-blue-500">See All</a>
          </div>
          <div className="flex flex-row justify-start space-x-4 overflow-x-auto whitespace-nowrap">
            <div className="flex space-x-4">
              <CreditCard
                balance="$5,756"
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
                gradientFrom="[rgba(76,73,237,1)]"
                gradientTo="[rgba(10,6,244,1)]"
                chipImage="/Chip_Card_light.png"
                logoImage="/Group17.png"
                bottomBackground="bg-gradient-to-br from-[rgba(76,73,237,0.8)] to-[rgba(76,73,237,1)]"
              />
              <CreditCard
                balance="$7,500"
                cardHolder="Jane Smith"
                validThru="11/23"
                cardNumber="3778 **** **** 1234"
                gradientFrom="white"
                gradientTo="white"
                chipImage="/Chip_Card_dark.png"
                logoImage="/Group17.png"
                borderStyle="border-2 text-gray-600 rounded-3xl"
                bottomBackground="border-t-2"
                bottomPadding="4"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 w-[350px] h-[235px] ">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="space-y-4">
              <RecentTransaction
                title="Deposit from my Card"
                date="28 January 2021"
                amount="-$850"
                type="expense"
                imageSrc="/Group_313" 
              />
              <RecentTransaction
                title="Deposit Paypal"
                date="25 January 2021"
                amount="+$2,500"
                type="income"
                imageSrc="/Group_314" 
              />
              <RecentTransaction
                title="Jemi Wilson"
                date="21 January 2021"
                amount="+$5,400"
                type="income"
                imageSrc="/Group_315" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Activity and Expense Statistics Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Insert your weekly activity chart or graph here */}
            <p>Chart goes here</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Expense Statistics</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Insert your expense statistics chart or graph here */}
            <p>Pie chart goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;