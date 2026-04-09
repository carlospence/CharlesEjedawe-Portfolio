import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("projects");
  const [data, setData] = useState({
    projects: [],
    skills: [],
    experience: [],
    contacts: [],
  });
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [projects, skills, experience, contacts] = await Promise.all([
        axios.get("/api/projects"),
        axios.get("/api/skills"),
        axios.get("/api/experience"),
        axios.get("/api/contacts"),
      ]);

      setData({
        projects: projects.data,
        skills: skills.data,
        experience: experience.data,
        contacts: contacts.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({});
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setFormData(item);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`/api/${activeTab}/${id}`);
        fetchData();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  const handleSave = async () => {
    try {
      if (editingItem) {
        await axios.put(`/api/${activeTab}/${editingItem}`, formData);
      } else {
        await axios.post(`/api/${activeTab}`, formData);
      }
      setEditingItem(null);
      setFormData({});
      fetchData();
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-700">
          {["projects", "skills", "experience", "contacts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold transition ${
                activeTab === tab
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-blue-400"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <>
            <button
              onClick={handleAdd}
              className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              Add New {activeTab.slice(0, -1)}
            </button>

            {/* Data Table */}
            <div className="bg-slate-800 rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Details</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data[activeTab].map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-slate-700 hover:bg-slate-700"
                    >
                      <td className="px-6 py-3">{item.id}</td>
                      <td className="px-6 py-3">
                        {item.name || item.title || item.email}
                      </td>
                      <td className="px-6 py-3 truncate max-w-xs">
                        {item.description || item.message || "-"}
                      </td>
                      <td className="px-6 py-3 text-right">
                        <button
                          onClick={() => handleEdit(item)}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm mr-2 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Edit/Add Form */}
            {editingItem !== null && (
              <div className="mt-8 bg-slate-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  {editingItem ? "Edit" : "Add"} {activeTab}
                </h2>
                {/* Form fields would go here */}
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditingItem(null);
                      setFormData({});
                    }}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
