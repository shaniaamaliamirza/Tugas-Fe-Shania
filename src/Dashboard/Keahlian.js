import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaBriefcase, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa'; // Importing Icons

const initialData = {
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  pengalaman: [
    { posisi: 'Frontend Developer', perusahaan: 'Nusantech' },
    { posisi: 'Magang Software Engineer', perusahaan: 'SMK Muhammadiyah 04' },
  ],
};

const Keahlian = () => {
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [editableData, setEditableData] = useState(data);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditMode(!editMode);
    if (editMode) {
      setData(editableData);
    }
  };

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...editableData.skills];
    updatedSkills[index] = e.target.value;
    setEditableData({ ...editableData, skills: updatedSkills });
  };

  const handleAddSkill = () => {
    setEditableData({
      ...editableData,
      skills: [...editableData.skills, newSkill],
    });
    setNewSkill('');
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = editableData.skills.filter((_, i) => i !== index);
    setEditableData({ ...editableData, skills: updatedSkills });
  };

  const handlePengalamanChange = (e, index, key) => {
    const updatedPengalaman = [...editableData.pengalaman];
    updatedPengalaman[index] = { ...updatedPengalaman[index], [key]: e.target.value };
    setEditableData({ ...editableData, pengalaman: updatedPengalaman });
  };

  const handleAddPengalaman = () => {
    setEditableData({
      ...editableData,
      pengalaman: [...editableData.pengalaman, { posisi: '', perusahaan: '' }],
    });
  };

  const handleDeletePengalaman = (index) => {
    const updatedPengalaman = editableData.pengalaman.filter((_, i) => i !== index);
    setEditableData({ ...editableData, pengalaman: updatedPengalaman });
  };

  // Function to return the appropriate icon for each skill
  const getSkillIcon = (skill) => {
    switch (skill.toLowerCase()) {
      case 'html':
        return <FaHtml5 className="text-orange-600" />;
      case 'css':
        return <FaCss3Alt className="text-blue-600" />;
      case 'javascript':
        return <FaJsSquare className="text-yellow-500" />;
      case 'react':
        return <FaReact className="text-blue-500" />;
      default:
        return <FaCode />;
    }
  };

  return (
    <div className="min-h-screen bg-pink-200 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-white w-full text-left">Keahlian dan Pengalaman</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {/* Skills Section */}
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          <FaCode className="inline-block mr-2 text-pink-500" /> Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {editableData.skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {getSkillIcon(skill)}
                {editMode ? (
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(e, index)}
                    className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-700 text-lg">{skill}</p>
                )}
              </div>
              {editMode && (
                <button
                  onClick={() => handleDeleteSkill(index)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              )}
            </div>
          ))}

          {editMode && (
            <div className="flex space-x-4 mt-4">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Tambahkan skill baru"
              />
              <button
                onClick={handleAddSkill}
                className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600"
              >
                Tambah
              </button>
            </div>
          )}
        </div>

        <hr className="my-8 border-pink-300" />

        {/* Pengalaman Section */}
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          <FaBriefcase className="inline-block mr-2 text-pink-500" /> Pengalaman
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editableData.pengalaman.map((pengalaman, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={pengalaman.posisi}
                    onChange={(e) => handlePengalamanChange(e, index, 'posisi')}
                    className="border rounded px-4 py-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Posisi"
                  />
                  <input
                    type="text"
                    value={pengalaman.perusahaan}
                    onChange={(e) => handlePengalamanChange(e, index, 'perusahaan')}
                    className="border rounded px-4 py-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Perusahaan"
                  />
                  <button
                    onClick={() => handleDeletePengalaman(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Hapus
                  </button>
                </>
              ) : (
                <p className="text-gray-700">{pengalaman.posisi} di {pengalaman.perusahaan}</p>
              )}
            </div>
          ))}

          {editMode && (
            <button
              onClick={handleAddPengalaman}
              className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 mt-4"
            >
              Tambah Pengalaman
            </button>
          )}
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={handleEditClick}
            className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            {editMode ? 'Simpan' : 'Edit'}
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keahlian;
