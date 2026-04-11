import Navbar from "../components/Navbar";
import GoalCard from "../components/Goalcard";
import FAB from "../components/Fab";
import BottomNav from "../components/Bottomnav";
import { useEffect,useState } from "react";
import useGoal from "../hooks/useGoal";
import Fullpageloader from "../../shared/Fullpageloader"
import  useAuth  from "../../auth/hooks/useAuth";
import CreateGoalModal  from "../components/CreateGoalModal";




export default function DashboardPage() {

   const [createGolaModal, setCreateGolaModal] = useState(false)
 
  const { HandlerGetGoalsAPI, goals, loading  } = useGoal();

  const {user} = useAuth();

  useEffect(() => {
    HandlerGetGoalsAPI();
  }, []);
 
  

  if(loading) {
    return (<Fullpageloader/>)
  }



  function openModalHandler() {
    setCreateGolaModal(true);
  }


  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">

      <Navbar />


      {/* Main Content — offset for sidebar on large screens */}
      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto lg:ml-64">

        {/* Dashboard Header */}
        <header className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.05em] text-[#00ff87] mb-2 font-['Space_Grotesk']">
            Architect Mode Active
          </p>
          <h1 className="text-5xl font-black text-white font-['Space_Grotesk'] leading-tight tracking-tight mb-4">
            Welcom Back  {user?.username.split(" ")[0]}!
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-[#00ff87] to-transparent opacity-50" />
        </header>

        {/* Goal Cards */}
        <div className="space-y-6">
          {goals.map((goal) => (
            <GoalCard key={goal._id} goal={goal} />
          ))}
        </div>
      </main>

      <FAB onClick={openModalHandler}/>
      {createGolaModal && <CreateGoalModal onClose={() => setCreateGolaModal(false)} />}
      <BottomNav />
    </div>
  );
}