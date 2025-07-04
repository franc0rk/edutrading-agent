import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <MainContent />
      <AppFooter />
    </div>
  );
}

export default App;
