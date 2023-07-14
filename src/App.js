import './App.css';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import Layout from './common/layout';
import CommentBlock from './components/comment/CommentBlock';
import ContainerForm from './components/container/ContainerForm';

function App() {
  return (
    <Layout>
      <Header />
      <ContainerForm />
      <CommentBlock />
      <Footer />
    </Layout>
  );
}

export default App;
