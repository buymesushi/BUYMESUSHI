import "./MyPage.css";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../ShoppingPage/ShopComponents/CartItem";

import { addToCart, removeFromCart } from "../../../actions/cartAction";
import axios from "axios";

import MyPageAuth from "./Sections/MyPageAuth";

const MyPage = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [Data, setData] = useState([{}]);
    const [PostStates, setPostStates] = useState({});
    const [lastIdx, setLastIdx] = useState(0);
    const [userData1, setUserData1] = useState({
        nickname: "",
        userImage: "",
        points: 0,
    });

    useEffect(() => {
        const fetchData = async (e) => {
            try {
                const res = await axios.get("/api/mypage");

                const _Data = await res.data.userPosts.map(
                    (rowData) => (
                        setLastIdx(lastIdx + 1),
                        {
                            nickname: rowData.postedBy.nickname,
                            photo: rowData.photo,
                            compliteAuth: rowData.compliteAuth,
                            wrongAuth: rowData.wrongAuth,
                            comments: rowData.comments,
                        }
                    )
                );

                setUserData1({
                    nickname: res.data.user.nickname,
                    userImage: res.data.user.profileImage,
                    points: res.data.user.points,
                });
                setPostStates(res.data.postsState);
                return setData(Data.concat(_Data));
            } catch (error) {}
        };
        fetchData();
    }, []);
    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotasl = () => {
        return cartItems.reduce(
            (price, item) => item.price * item.qty + price,
            0
        );
    };

    const myPoint = () => {
        return cartItems.reduce(
            (price, item) => item.price * item.qty + price,
            0
        );
    };

    const paymentBtn = (price) => {
        axios
            .put("/api/mypage/payment", { payPrice: price })

            .then(alert("결제가 완료되었습니다."))
            .catch((err) => {
                console.log(err);
            });
        localStorage.removeItem("cart");
        window.location.replace("/mypage");
    };

    const emptyProduct = () => {
        alert("카트가 비어있습니다!");
        window.location.replace("/product");
    };
    const exceedPoint = () => {
        alert("현재 포인트를 초과하였습니다!");
    };

    if (Data) {
        return (
            <div className="MyPage">
                <div className="AuthBoard">
                    <MyPageAuth
                        photoData={Data}
                        postState={PostStates}
                        userData={userData1}
                    />
                </div>
                <div className="cartscreen">
                    <div className="cartscreen_left">
                        <div className="cartscreen_right">
                            <div className="cartscreen_info">
                                <div>
                                    <div>
                                        <div
                                            className="MyPage-cartscreen-subtitle"
                                            style={{ borderBottomWidth: "0px" }}
                                        >
                                            현재 포인트{" "}
                                        </div>{" "}
                                        : <h2> {userData1.points}</h2>
                                    </div>
                                    <div>
                                        <div
                                            className="MyPage-cartscreen-subtitle"
                                            style={{ borderBottomWidth: "0px" }}
                                        >
                                            결제 예정 금액{" "}
                                        </div>{" "}
                                        : <h2>{getCartSubTotasl()}</h2>
                                    </div>
                                    <div>
                                        <div
                                            className="MyPage-cartscreen-subtitle"
                                            style={{ borderBottomWidth: "0px" }}
                                        >
                                            남은 포인트{" "}
                                        </div>{" "}
                                        :{" "}
                                        {getCartSubTotasl() >
                                        userData1.points ? (
                                            <h2>포인트 부족</h2>
                                        ) : (
                                            <h2>
                                                {userData1.points - myPoint()}
                                            </h2>
                                        )}
                                    </div>
                                </div>

                                <p>
                                    총 (
                                    <span className="MyPage-cartItemQty">
                                        {getCartCount()}
                                    </span>
                                    ) 상품
                                </p>
                            </div>
                            <div>
                                {getCartSubTotasl() <= userData1.points ? (
                                    cartItems.length === 0 ? (
                                        <button onClick={emptyProduct}>
                                            결제하기
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                paymentBtn(myPoint());
                                            }}
                                        >
                                            결제하기
                                        </button>
                                    )
                                ) : (
                                    <button onClick={exceedPoint}>
                                        결제하기
                                    </button>
                                )}
                            </div>
                        </div>
                        <h2 style={{ marginTop: "5vh" }}>장바구니</h2>
                        {cartItems.length === 0 ? (
                            <div>
                                장바구니가 비었습니다{" "}
                                <Link
                                    to="/product"
                                    className="GotoShop"
                                    style={{ fontWeight: "600" }}
                                >
                                    쇼핑하러 가기
                                </Link>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.product}
                                    item={item}
                                    qtyChangeHandler={qtyChangeHandler}
                                    removeHandler={removeHandler}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default MyPage;
