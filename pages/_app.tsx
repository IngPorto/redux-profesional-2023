import "@style/global.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { fecthPokemons } from "store/pokemonsSlice";
import store from "store/store";

store.dispatch(fecthPokemons());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
