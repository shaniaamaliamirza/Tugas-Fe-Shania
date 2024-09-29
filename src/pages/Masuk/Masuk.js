import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Masuk = ({ onMasuk }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (email === "shaniaamaliamirza21@gmail.com" && password === "shania21") {
      onMasuk();
      navigate("/dashboard"); // Absolute path to /dashboard
    } else {
      alert("Email atau password salah!");
    }
  };
  

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-pink shadow-lg rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-500">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-pink-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full p-2 border border-pink-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-pink-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full p-2 border border-pink-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="flex justify-center">
          <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
            Login
          </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-pink-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Masuk;
