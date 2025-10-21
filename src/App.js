import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./helpers/store";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Modern Components
import Layout from "./Components/Modern/Layout";
import Dashboard from "./Components/Modern/Dashboard";
import KanbanBoard from "./Components/Modern/KanbanBoard";
import SprintManagement from "./Components/Modern/SprintManagement";
import AgentsView from "./Components/Modern/AgentsView";

// Legacy Component (if needed)
import Home from "./Components/Home/Index";

function ModernApp() {
  const [currentView, setCurrentView] = React.useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'kanban':
        return <KanbanBoard />;
      case 'sprints':
        return <SprintManagement />;
      case 'agents':
        return <AgentsView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

function App() {
  AOS.init();
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<ModernApp />} />
            <Route path="/legacy" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
