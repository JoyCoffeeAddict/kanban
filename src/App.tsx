import type { Component } from "solid-js";
import { MainLayout } from "./layouts /mainLayout";

const App: Component = () => {
  return (
    <div>
      {/* top menu */}
      <MainLayout>
        <div>im a child </div>
      </MainLayout>
    </div>
  );
};

export default App;
