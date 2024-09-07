import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard"
import Login from "@/components/Login";

export const metadata = {
    title: "Broodl ⋅ Dashboard",
    description: "Track your daily mood every day",
  };

export default function DashboardPage (){
    const isAuthenticated = false

    let children = ( < Login /> )

    if(isAuthenticated){
        children = ( < Dashboard /> )
    }
    return (
        <Main>{ children }</Main>
    )
}