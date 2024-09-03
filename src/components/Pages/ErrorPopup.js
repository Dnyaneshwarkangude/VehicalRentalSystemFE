


const ErrorPopup = ({ isVisible, message, onClose }) =>{ 
    if (!isVisible) return null;
    // return (
    //     <div className="fixed inset-0 flex items-center justify-center">
            
    //         <div className="bg-indigo-30 bg-white dark:bg-black rounded-lg shadow-lg w-[500px] h-[350px]">
    //         <div class="flex justify-end p-2">
    //                 <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
    //                 onClick={setModalIsOpen(false)}
    //                 >
    //                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //                 </button>
    //             </div>
    //             <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg">
    //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    //                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    //             </svg>
    //             <p className="mt-6 text-center text-[24px] dark:text-white">{message}</p>
    //         </div>
    //     </div>
    // )
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-300 dark:bg-gray-700 dark:text-white rounded-lg p-8 shadow-lg">
            {/* <div class="flex justify-end p-2">
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div> */}
            <h2 className="text-xl font-bold mb-4">Error</h2>
            <p className="mb-4">{message}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      );
}

export default ErrorPopup;