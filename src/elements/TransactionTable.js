import React from 'react'

const TransactionTable = ({ transactions, darkMode }) => {
  return (
    <div className="overflow-x-auto">
    <table className={`w-full text-left text-sm divide-y ${darkMode ? 'text-gray-400 divide-gray-400' : 'text-gray-500 divide-gray-200'}`}>
      <thead className={`text-xs uppercase ${darkMode ? 'text-gray-400 bg-gray-700' : 'text-gray-700 bg-gray-50'}`}>
        <tr>
          <th className="px-4 py-3 sm:px-6">Transaction</th>
          <th className="px-4 py-3 sm:px-6">Date & Time</th>
          <th className="px-4 py-3 sm:px-6">Amount</th>
          <th className="px-4 py-3 sm:px-6">Status</th>
        </tr>
      </thead>
      <tbody className={`bg-white ${darkMode ? 'bg-gray-800' : ''}`}>
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <tr key={index} className={`${darkMode ? 'odd:bg-gray-800 even:bg-gray-700' : 'odd:bg-white even:bg-gray-50'}`}>
              <td className={`px-4 py-4 sm:px-6 whitespace-nowrap text-sm font-normal ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {transaction.transaction}
              </td>
              <td className={`px-4 py-4 sm:px-6 whitespace-nowrap text-sm font-normal ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {transaction.date}
              </td>
              <td className={`px-4 py-4 sm:px-6 whitespace-nowrap text-sm font-normal ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {transaction.amount}
              </td>
              <td className="px-4 py-4 sm:px-6 flex whitespace-nowrap">
                <span className={`flex h-fit items-center gap-1 font-semibold px-2 py-1 text-xs rounded-full ${transaction.status === 'Completed' ? (darkMode ? 'bg-green-100 text-green-800' : 'bg-green-200 text-green-900') : transaction.status === 'Cancelled' ? (darkMode ? 'bg-red-100 text-red-800' : 'bg-red-200 text-red-900') : (darkMode ? 'bg-purple-200 text-purple-800' : 'bg-purple-100 text-purple-800')}`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className={`px-4 py-4 sm:px-6 whitespace-nowrap text-sm font-normal ${darkMode ? 'text-white' : 'text-gray-900'} text-center`}>
              No transactions available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default TransactionTable