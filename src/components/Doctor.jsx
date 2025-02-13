// import React, { useState } from 'react';
// import { 
//   Home, Calendar, FileText, MessageSquare, Activity,
//   Bell, Settings, Search, MapPin, Star, Clock, Filter,
//   Brain, Fingerprint, Pill, Stethoscope, Heart, ChevronRight
// } from 'lucide-react';
// //import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// // Enhanced mock data for doctors
// const doctors = [
//   {
//     id: 1,
//     name: "Dr. Sarah Johnson",
//     specialty: "Cardiologist",
//     rating: 4.8,
//     reviews: 127,
//     distance: "2.3 km",
//     fee: "$150",
//     availability: "Available Today",
//     image: "/api/placeholder/64/64",
//     experience: "15 years",
//     nextAvailable: "Today at 2:30 PM",
//     languages: ["English", "Spanish"],
//     insurance: ["Blue Cross", "Aetna", "UnitedHealth"]
//   },
//   {
//     id: 2,
//     name: "Dr. Michael Chen",
//     specialty: "Orthopedic",
//     rating: 4.9,
//     reviews: 89,
//     distance: "3.1 km",
//     fee: "$180",
//     availability: "Next Available: Tomorrow",
//     image: "/api/placeholder/64/64",
//     experience: "12 years",
//     nextAvailable: "Tomorrow at 10:00 AM",
//     languages: ["English", "Mandarin"],
//     insurance: ["Medicare", "Cigna"]
//   }
// ];

// // Health Records Component
// const HealthRecords = () => {
//   const records = [
//     {
//       date: "2024-02-10",
//       type: "Prescription",
//       doctor: "Dr. Sarah Johnson",
//       details: "Prescribed medication for blood pressure"
//     },
//     {
//       date: "2024-01-15",
//       type: "Lab Results",
//       doctor: "Dr. Michael Chen",
//       details: "Annual blood work results"
//     }
//   ];

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//       <h2 className="text-xl font-bold text-white mb-4">Recent Health Records</h2>
//       <div className="space-y-4">
//         {records.map((record, index) => (
//           <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
//             <div className="text-gray-300">{record.date}</div>
//             <div className="text-white font-medium">{record.type}</div>
//             <div className="text-gray-400">{record.doctor}</div>
//             <div className="text-gray-300 text-sm">{record.details}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // AI Health Insights Component
// const AIHealthInsights = () => {
//   const insights = [
//     {
//       icon: <Heart className="text-red-400" />,
//       title: "Cardiovascular Health",
//       message: "Your recent activity shows improved heart rate patterns"
//     },
//     {
//       icon: <Brain className="text-purple-400" />,
//       title: "Mental Wellness",
//       message: "Consider scheduling a follow-up with your therapist"
//     }
//   ];

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//       <h2 className="text-xl font-bold text-white mb-4">AI Health Insights</h2>
//       <div className="space-y-4">
//         {insights.map((insight, index) => (
//           <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
//             <div className="p-2 bg-gray-600 rounded-lg">{insight.icon}</div>
//             <div>
//               <h3 className="text-white font-medium">{insight.title}</h3>
//               <p className="text-gray-300">{insight.message}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Enhanced Sidebar Component
// const Sidebar = ({ activeMenu, setActiveMenu }) => {
//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
//     { id: 'appointments', label: 'My Appointments', icon: <Calendar size={20} /> },
//     { id: 'records', label: 'Health Records', icon: <FileText size={20} /> },
//     { id: 'chatbot', label: 'AI Health Assistant', icon: <MessageSquare size={20} /> },
//     { id: 'monitoring', label: 'Patient Monitoring', icon: <Activity size={20} /> },
//     { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
//     { id: 'settings', label: 'Settings', icon: <Settings size={20} /> }
//   ];

//   return (
//     <aside className="w-64 bg-gray-900 border-r border-gray-700 h-screen fixed left-0">
//       <div className="p-4">
//         <div className="flex items-center space-x-2 mb-8">
//           <Activity className="h-8 w-8 text-blue-400" />
//           <span className="text-xl font-bold text-white">VNA Health</span>
//         </div>
//         <nav className="space-y-2">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveMenu(item.id)}
//               className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
//                 activeMenu === item.id
//                   ? 'bg-gray-800 text-blue-400'
//                   : 'text-gray-400 hover:bg-gray-800'
//               }`}
//             >
//               {item.icon}
//               <span>{item.label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>
//     </aside>
//   );
// };

// // Enhanced Quick Stats Component
// const QuickStats = () => {
//   const stats = [
//     { 
//       label: 'Upcoming Appointments', 
//       value: '3', 
//       icon: <Calendar className="text-blue-400" />,
//       detail: 'Next: Today at 2:30 PM'
//     },
//     { 
//       label: 'Recent Consultations', 
//       value: '12', 
//       icon: <MessageSquare className="text-green-400" />,
//       detail: 'Last: Dr. Johnson (2 days ago)'
//     },
//     { 
//       label: 'Vitals Summary', 
//       value: '98%', 
//       icon: <Activity className="text-red-400" />,
//       detail: 'Blood Pressure: 120/80'
//     },
//     { 
//       label: 'AI Health Score', 
//       value: '92%', 
//       icon: <Brain className="text-purple-400" />,
//       detail: 'Improved from last week'
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {stats.map((stat, index) => (
//         <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-gray-300">{stat.label}</span>
//             {stat.icon}
//           </div>
//           <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//           <div className="text-sm text-gray-400">{stat.detail}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// Enhanced Doctor Search Component
// const DoctorSearch = () => {
//   const specialties = [
//     "All Specialties",
//     "Cardiologist",
//     "Orthopedic",
//     "Pediatrician",
//     "Dermatologist",
//     "Neurologist"
//   ];

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//       <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-300 mb-1">Specialty</label>
//           <select className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500">
//             {specialties.map((specialty) => (
//               <option key={specialty} value={specialty}>{specialty}</option>
//             ))}
//           </select>
//         </div>
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Enter location"
//               className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>
//         </div>
//         <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-6">
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// // Enhanced Doctor Card Component
// const DoctorCard = ({ doctor }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//       <div className="flex items-start space-x-4">
//         <img
//           src={doctor.image}
//           alt={doctor.name}
//           className="w-16 h-16 rounded-full object-cover"
//         />
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold text-white">{doctor.name}</h3>
//           <p className="text-gray-300">{doctor.specialty}</p>
//           <div className="flex items-center space-x-2 mt-1">
//             <Star className="h-4 w-4 text-yellow-400 fill-current" />
//             <span className="text-sm font-medium text-white">{doctor.rating}</span>
//             <span className="text-sm text-gray-400">({doctor.reviews} reviews)</span>
//           </div>
//           <div className="flex items-center space-x-4 mt-2 text-sm text-gray-300">
//             <div className="flex items-center">
//               <MapPin className="h-4 w-4 mr-1" />
//               {doctor.distance}
//             </div>
//             <div className="flex items-center">
//               <Clock className="h-4 w-4 mr-1" />
//               {doctor.experience}
//             </div>
//           </div>
//           <div className="mt-2 text-sm text-gray-400">
//             <p>Languages: {doctor.languages.join(", ")}</p>
//             <p>Insurance: {doctor.insurance.join(", ")}</p>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-lg font-semibold text-blue-400">{doctor.fee}</p>
//           <p className="text-sm text-gray-400 mb-2">{doctor.nextAvailable}</p>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Main Dashboard Component
// const Dashboard = () => {
//   const [activeMenu, setActiveMenu] = useState('dashboard');

//   return (
//     <div className="min-h-screen bg-gray-900">
//       <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
//       <main className="ml-64 p-8">
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold text-white">Find a Doctor</h1>
//           <p className="text-gray-400">Search for specialists near you</p>
//         </div>
        
//         <QuickStats />
//         <DoctorSearch />
//         <AIHealthInsights />
//         <HealthRecords />
        
//         <div className="space-y-4">
//           {doctors.map((doctor) => (
//             <DoctorCard key={doctor.id} doctor={doctor} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

//changed version down

// import React, { useState, useEffect } from 'react';
// import { 
//   Home, Calendar, FileText, MessageSquare, Activity,
//   Bell, Settings, Search, MapPin, Star, Clock, Filter,
//   Brain, Fingerprint, Pill, Stethoscope, Heart, ChevronRight
// } from 'lucide-react';
// import Header from './Header'; // Assuming Header is in a separate file
// import Footer from './Footer'; // Assuming Footer is in a separate file

// import { Routes, Route, useNavigate } from 'react-router-dom';
// import MyAppointments from './MyAppointments';
// import HealthRecords from './HealthRecords';
// import PatientMonitoring from './PatientMonitoring';
// import Notifications from './Notifications';
// import Settings from './Settings';

// // Enhanced mock data for doctors (can be replaced with API data)
// const initialDoctors = [
//   {
//     id: 1,
//     name: "Dr. Sarah Johnson",
//     specialty: "Cardiologist",
//     rating: 4.8,
//     reviews: 127,
//     distance: "2.3 km",
//     fee: "$150",
//     availability: "Available Today",
//     image: "/path/to/image1.jpg",
//     experience: "15 years",
//     nextAvailable: "Today at 2:30 PM",
//     languages: ["English", "Spanish"],
//     insurance: ["Blue Cross", "Aetna", "UnitedHealth"]
//   },
//   {
//     id: 2,
//     name: "Dr. Michael Chen",
//     specialty: "Orthopedic",
//     rating: 4.9,
//     reviews: 89,
//     distance: "3.1 km",
//     fee: "$180",
//     availability: "Next Available: Tomorrow",
//     image: "/path/to/image2.jpg",
//     experience: "12 years",
//     nextAvailable: "Tomorrow at 10:00 AM",
//     languages: ["English", "Mandarin"],
//     insurance: ["Medicare", "Cigna"]
//   }
// ];

// // Health Records Component
// const HealthRecords = ({ records }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//       <h2 className="text-xl font-bold text-white mb-4">Recent Health Records</h2>
//       <div className="space-y-4">
//         {records.map((record, index) => (
//           <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
//             <div className="text-gray-300">{record.date}</div>
//             <div className="text-white font-medium">{record.type}</div>
//             <div className="text-gray-400">{record.doctor}</div>
//             <div className="text-gray-300 text-sm">{record.details}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // AI Health Insights Component
// const AIHealthInsights = ({ insights }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//       <h2 className="text-xl font-bold text-white mb-4">AI Health Insights</h2>
//       <div className="space-y-4">
//         {insights.map((insight, index) => (
//           <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
//             <div className="p-2 bg-gray-600 rounded-lg">{insight.icon}</div>
//             <div>
//               <h3 className="text-white font-medium">{insight.title}</h3>
//               <p className="text-gray-300">{insight.message}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Enhanced Sidebar Component
// const Sidebar = ({ activeMenu, setActiveMenu }) => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, path: '/doctor' },
//     { id: 'appointments', label: 'My Appointments', icon: <Calendar size={20} />, path: '/doctor/appointments' },
//     { id: 'records', label: 'Health Records', icon: <FileText size={20} />, path: '/doctor/records' },
//     { id: 'monitoring', label: 'Patient Monitoring', icon: <Activity size={20} />, path: '/doctor/monitoring' },
//     { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, path: '/doctor/notifications' },
//     { id: 'settings', label: 'Settings', icon: <Settings size={20} />, path: '/doctor/settings' }
//   ];

//   const handleMenuClick = (path) => {
//     navigate(path);
//     setActiveMenu(path);
//   };

//   return (
//     <aside className="w-64 bg-gray-900 border-r border-gray-700 h-screen fixed left-0">
//       <div className="p-4">
//         <div className="flex items-center space-x-2 mb-8">
//           <Activity className="h-8 w-8 text-blue-400" />
//           <span className="text-xl font-bold text-white">VNA Health</span>
//         </div>
//         <nav className="space-y-2">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleMenuClick(item.path)}
//               className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
//                 activeMenu === item.path
//                   ? 'bg-gray-800 text-blue-400'
//                   : 'text-gray-400 hover:bg-gray-800'
//               }`}
//             >
//               {item.icon}
//               <span>{item.label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>
//     </aside>
//   );
// };

// // Enhanced Quick Stats Component
// const QuickStats = () => {
//   const stats = [
//     { 
//       label: 'Upcoming Appointments', 
//       value: '3', 
//       icon: <Calendar className="text-blue-400" />,
//       detail: 'Next: Today at 2:30 PM'
//     },
//     { 
//       label: 'Recent Consultations', 
//       value: '12', 
//       icon: <MessageSquare className="text-green-400" />,
//       detail: 'Last: Dr. Johnson (2 days ago)'
//     },
//     { 
//       label: 'Vitals Summary', 
//       value: '98%', 
//       icon: <Activity className="text-red-400" />,
//       detail: 'Blood Pressure: 120/80'
//     },
//     { 
//       label: 'AI Health Score', 
//       value: '92%', 
//       icon: <Brain className="text-purple-400" />,
//       detail: 'Improved from last week'
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       {stats.map((stat, index) => (
//         <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-gray-300">{stat.label}</span>
//             {stat.icon}
//           </div>
//           <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//           <div className="text-sm text-gray-400">{stat.detail}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Enhanced Doctor Search Component
// const DoctorSearch = ({ onSearch }) => {
//   const specialties = [
//     "All Specialties",
//     "Cardiologist",
//     "Orthopedic",
//     "Pediatrician",
//     "Dermatologist",
//     "Neurologist"
//   ];

//   const [specialty, setSpecialty] = useState('All Specialties');
//   const [location, setLocation] = useState('');

//   const handleSearch = () => {
//     onSearch({ specialty, location });
//   };

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//       <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-300 mb-1">Specialty</label>
//           <select
//             value={specialty}
//             onChange={(e) => setSpecialty(e.target.value)}
//             className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
//           >
//             {specialties.map((specialty) => (
//               <option key={specialty} value={specialty}>{specialty}</option>
//             ))}
//           </select>
//         </div>
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Enter location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>
//         </div>
//         <button
//           onClick={handleSearch}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-6"
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// // Enhanced Doctor Card Component
// const DoctorCard = ({ doctor }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//       <div className="flex items-start space-x-4">
//         <img
//           src={doctor.image || '/path/to/fallback/image.png'}
//           alt={doctor.name}
//           className="w-16 h-16 rounded-full object-cover"
//         />
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold text-white">{doctor.name}</h3>
//           <p className="text-gray-300">{doctor.specialty}</p>
//           <div className="flex items-center space-x-2 mt-1">
//             <Star className="h-4 w-4 text-yellow-400 fill-current" />
//             <span className="text-sm font-medium text-white">{doctor.rating}</span>
//             <span className="text-sm text-gray-400">({doctor.reviews} reviews)</span>
//           </div>
//           <div className="flex items-center space-x-4 mt-2 text-sm text-gray-300">
//             <div className="flex items-center">
//               <MapPin className="h-4 w-4 mr-1" />
//               {doctor.distance}
//             </div>
//             <div className="flex items-center">
//               <Clock className="h-4 w-4 mr-1" />
//               {doctor.experience}
//             </div>
//           </div>
//           <div className="mt-2 text-sm text-gray-400">
//             <p>Languages: {doctor.languages.join(", ")}</p>
//             <p>Insurance: {doctor.insurance.join(", ")}</p>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-lg font-semibold text-blue-400">{doctor.fee}</p>
//           <p className="text-sm text-gray-400 mb-2">{doctor.nextAvailable}</p>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Dashboard Component
// const Dashboard = () => {
//   const [activeMenu, setActiveMenu] = useState('dashboard');
//   const [doctors, setDoctors] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [healthRecords, setHealthRecords] = useState([]);
//   const [aiInsights, setAIInsights] = useState([]);

//   useEffect(() => {
//     // Fetch doctor data (replace with API call)
//     setDoctors(initialDoctors);
//     setFilteredDoctors(initialDoctors);

//     // Fetch health records (replace with API call)
//     setHealthRecords([
//       {
//         date: "2024-02-10",
//         type: "Prescription",
//         doctor: "Dr. Sarah Johnson",
//         details: "Prescribed medication for blood pressure"
//       },
//       {
//         date: "2024-01-15",
//         type: "Lab Results",
//         doctor: "Dr. Michael Chen",
//         details: "Annual blood work results"
//       }
//     ]);

//     // Fetch AI insights (replace with API call)
//     setAIInsights([
//       {
//         icon: <Heart className="text-red-400" />,
//         title: "Cardiovascular Health",
//         message: "Your recent activity shows improved heart rate patterns"
//       },
//       {
//         icon: <Brain className="text-purple-400" />,
//         title: "Mental Wellness",
//         message: "Consider scheduling a follow-up with your therapist"
//       }
//     ]);
//   }, []);

//   const handleSearch = ({ specialty, location }) => {
//     let filtered = doctors;

//     if (specialty !== 'All Specialties') {
//       filtered = filtered.filter((doctor) => doctor.specialty === specialty);
//     }

//     if (location) {
//       filtered = filtered.filter((doctor) => doctor.location.includes(location));
//     }

//     setFilteredDoctors(filtered);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900">
//       <Header />
//       <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
//       <main className="ml-64 p-8">
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold text-white">Find a Doctor</h1>
//           <p className="text-gray-400">Search for specialists near you</p>
//         </div>
        
//         <QuickStats />
//         <DoctorSearch onSearch={handleSearch} />
//         <AIHealthInsights insights={aiInsights} />
//         <HealthRecords records={healthRecords} />
        
//         <div className="space-y-4">
//           {filteredDoctors.map((doctor) => (
//             <DoctorCard key={doctor.id} doctor={doctor} />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { 
  Home, Calendar, FileText, MessageSquare, Activity,
  Bell, Settings as SettingsIcon, Search, MapPin, Star, Clock, Filter,
  Brain, Fingerprint, Pill, Stethoscope, Heart, ChevronRight
} from 'lucide-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header'; // Ensure Header.jsx exists in the same folder
import Footer from './Footer'; // Ensure Footer.jsx exists in the same folder

// Import new components
import MyAppointments from './MyAppointments';
import HealthRecordsPage from './HealthRecords';
import PatientMonitoring from './PatientMonitoring';
import Notifications from './Notifications';
import SettingsPage from './Settings';

// Enhanced mock data for doctors (can be replaced with API data)
const initialDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.8,
    reviews: 127,
    distance: "2.3 km",
    fee: "$150",
    availability: "Available Today",
    image: "/path/to/image1.jpg",
    experience: "15 years",
    nextAvailable: "Today at 2:30 PM",
    languages: ["English", "Spanish"],
    insurance: ["Blue Cross", "Aetna", "UnitedHealth"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Orthopedic",
    rating: 4.9,
    reviews: 89,
    distance: "3.1 km",
    fee: "$180",
    availability: "Next Available: Tomorrow",
    image: "/path/to/image2.jpg",
    experience: "12 years",
    nextAvailable: "Tomorrow at 10:00 AM",
    languages: ["English", "Mandarin"],
    insurance: ["Medicare", "Cigna"]
  }
];

// Health Records Component
const HealthRecords = ({ records }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Recent Health Records</h2>
      <div className="space-y-4">
        {records.map((record, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="text-gray-300">{record.date}</div>
            <div className="text-white font-medium">{record.type}</div>
            <div className="text-gray-400">{record.doctor}</div>
            <div className="text-gray-300 text-sm">{record.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// AI Health Insights Component
const AIHealthInsights = ({ insights }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-bold text-white mb-4">AI Health Insights</h2>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
            <div className="p-2 bg-gray-600 rounded-lg">{insight.icon}</div>
            <div>
              <h3 className="text-white font-medium">{insight.title}</h3>
              <p className="text-gray-300">{insight.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Enhanced Sidebar Component
const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, path: '/doctor' },
    { id: 'appointments', label: 'My Appointments', icon: <Calendar size={20} />, path: '/doctor/appointments' },
    { id: 'records', label: 'Health Records', icon: <FileText size={20} />, path: '/doctor/records' },
    { id: 'monitoring', label: 'Patient Monitoring', icon: <Activity size={20} />, path: '/doctor/monitoring' },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, path: '/doctor/notifications' },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon size={20} />, path: '/doctor/settings' }
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    setActiveMenu(path);
  };

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-700 h-screen fixed left-0">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Activity className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold text-white">VNA Health</span>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.path)}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                activeMenu === item.path
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

// Enhanced Quick Stats Component
const QuickStats = () => {
  const stats = [
    { 
      label: 'Upcoming Appointments', 
      value: '3', 
      icon: <Calendar className="text-blue-400" />,
      detail: 'Next: Today at 2:30 PM'
    },
    { 
      label: 'Recent Consultations', 
      value: '12', 
      icon: <MessageSquare className="text-green-400" />,
      detail: 'Last: Dr. Johnson (2 days ago)'
    },
    { 
      label: 'Vitals Summary', 
      value: '98%', 
      icon: <Activity className="text-red-400" />,
      detail: 'Blood Pressure: 120/80'
    },
    { 
      label: 'AI Health Score', 
      value: '92%', 
      icon: <Brain className="text-purple-400" />,
      detail: 'Improved from last week'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300">{stat.label}</span>
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.detail}</div>
        </div>
      ))}
    </div>
  );
};

// Enhanced Doctor Search Component
const DoctorSearch = ({ onSearch }) => {
  const specialties = [
    "All Specialties",
    "Cardiologist",
    "Orthopedic",
    "Pediatrician",
    "Dermatologist",
    "Neurologist"
  ];

  const [specialty, setSpecialty] = useState('All Specialties');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch({ specialty, location });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-300 mb-1">Specialty</label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-6"
        >
          Search
        </button>
      </div>
    </div>
  );
};

// Enhanced Doctor Card Component
const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-start space-x-4">
        <img
          src={doctor.image || '/path/to/fallback/image.png'}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{doctor.name}</h3>
          <p className="text-gray-300">{doctor.specialty}</p>
          <div className="flex items-center space-x-2 mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-white">{doctor.rating}</span>
            <span className="text-sm text-gray-400">({doctor.reviews} reviews)</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-300">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {doctor.distance}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {doctor.experience}
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-400">
            <p>Languages: {doctor.languages.join(", ")}</p>
            <p>Insurance: {doctor.insurance.join(", ")}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-blue-400">{doctor.fee}</p>
          <p className="text-sm text-gray-400 mb-2">{doctor.nextAvailable}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Doctor = () => {
  const [activeMenu, setActiveMenu] = useState('/doctor');
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [healthRecords, setHealthRecords] = useState([]);
  const [aiInsights, setAIInsights] = useState([]);

  useEffect(() => {
    // Fetch doctor data (replace with API call)
    setDoctors(initialDoctors);
    setFilteredDoctors(initialDoctors);

    // Fetch health records (replace with API call)
    setHealthRecords([
      {
        date: "2024-02-10",
        type: "Prescription",
        doctor: "Dr. Sarah Johnson",
        details: "Prescribed medication for blood pressure"
      },
      {
        date: "2024-01-15",
        type: "Lab Results",
        doctor: "Dr. Michael Chen",
        details: "Annual blood work results"
      }
    ]);

    // Fetch AI insights (replace with API call)
    setAIInsights([
      {
        icon: <Heart className="text-red-400" />,
        title: "Cardiovascular Health",
        message: "Your recent activity shows improved heart rate patterns"
      },
      {
        icon: <Brain className="text-purple-400" />,
        title: "Mental Wellness",
        message: "Consider scheduling a follow-up with your therapist"
      }
    ]);
  }, []);

  const handleSearch = ({ specialty, location }) => {
    let filtered = doctors;

    if (specialty !== 'All Specialties') {
      filtered = filtered.filter((doctor) => doctor.specialty === specialty);
    }

    if (location) {
      filtered = filtered.filter((doctor) => doctor.location.includes(location));
    }

    setFilteredDoctors(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="ml-64 p-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-white">Find a Doctor</h1>
                  <p className="text-gray-400">Search for specialists near you</p>
                </div>
                <QuickStats />
                <DoctorSearch onSearch={handleSearch} />
                <AIHealthInsights insights={aiInsights} />
                <HealthRecords records={healthRecords} />
                <div className="space-y-4">
                  {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
                </div>
              </>
            }
          />
          <Route path="/appointments" element={<MyAppointments />} />
          <Route path="/records" element={<HealthRecordsPage />} />
          <Route path="/monitoring" element={<PatientMonitoring />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Doctor;