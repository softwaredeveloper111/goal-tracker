import Navbar from "../components/Navbar";
import GoalDetailHeader from "../components/Goaldetailheader";
import GoalCalendar from "../components/Goalcalender";
import GoalHeatmap from "../components/Goalheatmap";
import { useParams } from "react-router-dom";
import useGoal from "../hooks/useGoal";
import Fullpageloader from "../../shared/Fullpageloader";
import { useEffect } from "react";
import { toast } from "react-toastify";
import GoalDetailSkeleton from "../../shared/Goaldetailskeleton";
import { useState } from "react";
import EditGoalModal from "../components/Editgoalmodal";






export default function GoalDetailPage() {
  const [showEditModal, setShowEditModal] = useState(false);

  const goalId = useParams().id;

  const {
    HandleGetGoalByIdAPI,
    singleGoal,
    loading,
    isSingleGoalLoading,
    HandleGetAllCheckinsAPI,
    HandleToggleCheckinAPI,
    checkins,
    setCheckins,
    HandlerUpdateGoalAPI
  } = useGoal();


  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          HandleGetGoalByIdAPI(goalId),
          HandleGetAllCheckinsAPI(goalId),
        ]);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);



  if (isSingleGoalLoading) {
    return <GoalDetailSkeleton />;
  }
 

  if(loading){
     return <GoalDetailSkeleton />;
  }


  async function toggleCreateCheckin(date) {
    const goalInfo = {
      goalId: singleGoal._id,
      date,
    };

    const alreadyExists = checkins.some((item) => item.date === date);

    if (alreadyExists) {
      setCheckins((prev) => prev.filter((item) => item.date !== date));
    } else {
      setCheckins((prev) => [
        ...prev,
        { date, _id: "temp", goalId: singleGoal._id },
      ]);
    }

    try {
      await HandleToggleCheckinAPI(goalInfo);
    } catch (error) {
      if (alreadyExists) {
        setCheckins((prev) => [
          ...prev,
          { date, _id: "temp", goalId: singleGoal._id },
        ]);
      } else {
        setCheckins((prev) => prev.filter((item) => item.date !== date));
      }
      toast.error(error.message);
    }
  }




  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
        {/* Header */}
        <GoalDetailHeader goal={singleGoal} />

        {/* Calendar */}
        <GoalCalendar
          targetDate={singleGoal?.targetDate}
          checkins={checkins}
          createdAt={singleGoal?.createdAt}
          onToggle={toggleCreateCheckin}
        />

        {/* Heatmap */}
        <GoalHeatmap
          createdAt={singleGoal?.createdAt}
          targetDate={singleGoal?.targetDate}
          checkins={checkins}
        />
      </main>


      {/**Edit goal modal */}
      {showEditModal && (
  <EditGoalModal
    goal={singleGoal}
    onClose={() => setShowEditModal(false)}
    onConfirm={async (updatedData) => {
     console.log(updatedData)
     const response =  await HandlerUpdateGoalAPI(singleGoal._id, updatedData);
     if(response.success){

       toast.success("Goal updated! ✅");
     }
     else{
       toast.error(response.message)
     }
    }}
  />
       )}


      {/* Edit FAB — bottom right */}
      {singleGoal.status!=="Completed" && (

        <button onClick={() => setShowEditModal(true)}  className="fixed cursor-pointer bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-[#00ff87] text-[#0a0a0a] shadow-[0_0_25px_rgba(0,255,135,0.4)] hover:shadow-[0_0_40px_rgba(0,255,135,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 z-50">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </button>


      ) }
 


    </div>
  );
}
