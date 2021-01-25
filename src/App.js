import { Provider } from "react-redux";
import store from "./redux/store/store";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Routes from "./router/Routes";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Routes />
      <Footer />
    </Provider>
  );
}

export default App;
