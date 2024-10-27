import React, { useState } from "react";

export default function TaskModal({ click }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadlineDate: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg  bg-gray-100 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="flex justify-center items-center  bg-gray-100 p-4">
                <form
                  className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 space-y-4"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Add Task
                  </h2>

                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-2">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter title"
                      className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-2">Description</label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter description"
                      className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-2">Deadline Date</label>
                    <input
                      type="date"
                      name="deadlineDate"
                      value={formData.deadlineDate}
                      onChange={handleChange}
                      className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-600 mb-2">File Upload</label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleFileChange}
                      className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Save
                    </button>
                    <button
                      type="Submit"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => click()}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
