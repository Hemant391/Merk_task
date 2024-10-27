import React from "react";
import { FaDownload, FaEdit, FaTrash } from "react-icons/fa";

const TaskTable = ({ tasks }) => {
  return (
    <div className="container mx-auto my-8">
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-400 text-2xl">
            <th className="px-6 py-3 border-b text-left text-gray-700 font-medium uppercase ">Title</th>
            <th className="px-6 py-3 border-b text-left text-gray-700 font-medium uppercase">Description</th>
            <th className="px-6 py-3 border-b text-left text-gray-700 font-medium uppercase">Deadline</th>
            <th className="px-6 py-3 border-b text-left text-gray-700 font-medium uppercase">Status</th>
            <th className="px-6 py-3 border-b text-left text-gray-700 font-medium uppercase">Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-3 border-b text-left text-gray-700 font-normal ">{task.title}</td>
              <td className="px-6 py-4 border-b text-left">{task.description}</td>
              <td className="px-6 py-4 border-b text-left">{task.deadline}</td>
              <td className="px-6 py-4 border-b text-left">
                <span className={`px-3 py-1 text-white rounded-full ${task.statusClass}`}>
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4 border-b flex space-x-4">
                <FaDownload className="text-blue-500 cursor-pointer" />
                <FaEdit className="text-purple-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
