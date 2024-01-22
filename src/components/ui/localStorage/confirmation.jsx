import React from "react";

const Confirm = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md mx-auto my-3 sm:max-w-sm">
        <div className="relative flex flex-col w-full bg-slate-100 border-0 rounded-lg shadow-lg">
          <div className="flex items-start justify-between p-2 border-solid rounded-t">
            <h3 className="text-2xl font-semibold">Confirmation</h3>
            <button
              className="p-1 border-0 text-gray-600 float-right text-2xl font-bold hover:text-red-400"
              onClick={onCancel}
            >
              <span className="inline ">✕</span>
            </button>
          </div>
          <div className="relative p-2">
            <p className="my-4 text-gray-600 text-lg">
              Are you sure you want to delete this recipe?
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-end p-2 border-solid rounded-b">
            <button
              className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-6 py-3 mb-2 md:mb-0 md:mr-1"
              type="button"
              onClick={onCancel}
            >
              CANCEL
            </button>
            <button
              className="bg-red-500 text-white hover:bg-red-600 font-medium text-sm px-6 py-3 rounded-lg shadow-md mb-2 md:mb-0 md:mr-1 focus:ring-4 focus:ring-red-300"
              type="button"
              onClick={onConfirm}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
