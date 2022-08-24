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
import Payment from "./pages/Payment";
import Upload from "./pages/Upload";
import MyPageBuyList from './pages/MyPageBuyList';
import MyPageSellList from './pages/MyPageSellList';

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
        <Route path="/mypage" element={<MyPageBuyList />} />
        <Route path='/mypage/buylist' element={<MyPageBuyList />} />
        <Route path='/mypage/selllist' element={<MyPageSellList />} />
        <Route path="/detail/:id" element={<ItemDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
