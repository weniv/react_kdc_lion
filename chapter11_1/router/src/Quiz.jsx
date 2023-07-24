import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import ProductDetailPage from './components/ProductDetailPage';
import ProductDetailNoticePage from './components/ProductDetailNoticePage';
import CartPage from './components/CartPage';
import CouponPage from './components/CouponPage';
import QuestionPage from './components/QuestionPage';
import NoticePage from './components/NoticePage';
import UserPage from './components/UserPage';

function Quiz() {
    return (
        <Router>
            <Link to="/"> home </Link>
            <Link to="/products/2"> 상품정보 </Link>
            <Link to="/products/3/notice"> 상품공지사항 </Link>
            <Link to="/cart"> 카트 </Link>
            <Link to="/users/coupon"> 사용자쿠폰 </Link>
            <Link to="/users/question"> 질문 </Link>
            <Link to="/users/notice"> 공지사항 </Link>
            <Link to="/users"> 사용자 </Link>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/products/:id/notice" element={<ProductDetailNoticePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/users/coupon" element={<CouponPage />} />
                <Route path="/users/question" element={<QuestionPage />} />
                <Route path="/users/notice" element={<NoticePage />} />
                <Route path="/users" element={<UserPage />} />
            </Routes>
        </Router>
    );
}

export default Quiz;
