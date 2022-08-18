import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Category from "./pages/Category";
import QnA from "./pages/QnA";
import Community from "./pages/Community";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ItemDetail from "./pages/ItemDetail";
import Search from "./pages/Search";
import CategoryItem from './components/CategoryItem';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />}>
          <Route path=":type" element={<Category />} />
        </Route>

        <Route path="/qna" element={<QnA />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<ItemDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
