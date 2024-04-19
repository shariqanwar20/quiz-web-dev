export const RecipieCard = ({ showModal, setShowModal, recipie }: any) => {
  return (
    <>
      {showModal ? (
        <div className="overflow-y-auto overflow-x-hidden mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-10 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <button
                  type="button"
                    onClick={() => setShowModal(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 text-center">
                <h3 className="text-4xl font-semibold text-center text-green-900 dark:text-white">
                  Meal
                </h3>
                <img
                  className="h-20 w-20 flex-shrink-0 rounded-md bg-gray-300 mx-auto"
                  src={recipie.image}
                  alt=""
                />

                <h3 className="truncate text-lg font-bold text-center text-gray-900">
                  {recipie.name}
                </h3>

                <p className="mt-1 truncate text-sm text-center text-gray-500">
                  {recipie.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
