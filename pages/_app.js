
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <GlobalStyles/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
}

export default MyApp
