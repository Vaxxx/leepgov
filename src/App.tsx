import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Home from "./pages/Home"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import LeepFooter from "./components/LeepFooter";
import SelfPacedLearning from "./pages/SelfPacedLearning";
import Login from "./pages/auth/Login";
import Vep from "./pages/Vep";
import Nelex from "./pages/Nelex";
import Learning from "./pages/learning"; 
import Faq from "./pages/Faq";
import Fairs from "./pages/Fairs";
import KnowledgeResources from "./pages/KnowledgeResources";
import Work from "./pages/Work";
import EmailVerification from "./pages/auth/EmailVerification";
import UserDashboard from "./pages/user/UserDashboard"; 
import Join from "./pages/auth/Join";
import ProfileRegistration from "./pages/auth/ProfileRegistration";
import { UserProtection } from "./services/UserProtection";
import { ProfileProtection } from "./services/ProfileProtection";
 
export const toastSuccess = (msg: string) => {
  toast.success(msg);
};

export const toastInfo = (msg: string) => {
  toast.info(msg);
};

export const toastError = (msg: string) => {
  toast.error(msg);
};
function App() {
 
  return (
    <div className="overflow-visible min-h-full">
       <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="vep" element={<Vep />} />
           <Route path="/nelex" element={<Nelex />} />
          <Route path="/self-paced-learning" element={<SelfPacedLearning />} />
          <Route path="/learning" element={<Learning />} />

          
            <Route path="/faq" element={<Faq />} />
               <Route path="/fairs" element={<Fairs />} /> 
          <Route path="/knowledge-resource" element={<KnowledgeResources />} />
          <Route path="/work" element={<Work />} /> 
          <Route path="*" element={<NotFound />} />

          {/* Auth Section */}
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/" element={<ProfileProtection/>}>
            <Route path="/profile" element={<ProfileRegistration />} /> 
          </Route>
          {/* user section */}
          <Route path="/user-dashboard" element={<UserProtection/>}>
               <Route path="/user-dashboard" element={<UserDashboard/>}/>
          </Route>
         
       </Routes>
       <LeepFooter/>
       <ToastContainer position="top-right" />
    </div>
  )
}

export default App
