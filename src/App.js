import logo from "./logo.svg";
import React, { useState, useMemo, useContext, useEffect, useRef, useLayoutEffect } from "react";
import "./App.css";
import ReactCodeInput from "react-verification-code-input";
import ReactModal from "react-modal";
import StarRatings from "react-star-ratings";

function App() {
	const [isShowReviewModal, setIsShowReviewModal] = useState(false);
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");

	const ratingCounter = rating === 0 ? "-" : rating;

	const isBtnAvailable = !!rating && !!review;

	useEffect(() => {
		document.body.classList.add("overflow-hidden");

		return () => document.body.classList.remove("overflow-hidden");
	}, []);

	const handleCloseModal = () => setIsShowReviewModal(false);

	return (
		<div className="App">
			<div className="App-header">
				<h1>HELLO ITS ME!#1</h1>
				<button onClick={() => setIsShowReviewModal(true)}>Show modal</button>
				<ReactModal
					className={"auth-modal-content"}
					isOpen={isShowReviewModal}
					onRequestClose={handleCloseModal}
					style={{
						content: {
							maxWidth: "600px",
							width: "100%",
							padding: "0",
							position: "relative",
							borderRadius: "24px",
						},
					}}
				>
					<div className="review-modal">
						<h2 className="title-sm font-extra-black">Оставить отзыв</h2>
						<div className="review-modal__product">
							<div className="review-modal__product-info">
								<div className="text-md font-bold">LaBEl</div>
								<div className="text-micro font-extra-black">2345 ₽</div>
							</div>
						</div>
						<div className="review-modal__review-wrapp">
							<div className="review-modal__rating-wrapp">
								<span>{`Ваша оценка: ${ratingCounter}`}</span>
								<StarRatings
									name="modalRating"
									rating={rating}
									changeRating={(rating) => setRating(rating)}
									numberOfStars={5}
									starRatedColor="#FF0500"
									starEmptyColor="#dbdadd"
									starDimension="24px"
									svgIconPath={
										"M12.8967 1.55713C12.7283 1.21583 12.3806 0.999756 12 0.999756C11.6194 0.999756 11.2718 1.21583 11.1033 1.55713L8.24577 7.34622L1.8554 8.28027C1.47884 8.33531 1.16616 8.59932 1.04878 8.96132C0.931405 9.32333 1.02968 9.72058 1.3023 9.98611L5.92551 14.4891L4.83442 20.8507C4.77007 21.2259 4.92432 21.6051 5.2323 21.8288C5.54027 22.0525 5.94856 22.082 6.28548 21.9048L12 18.8996L17.7146 21.9048C18.0515 22.082 18.4598 22.0525 18.7678 21.8288C19.0757 21.6051 19.23 21.2259 19.1656 20.8507L18.0746 14.4891L22.6978 9.98611C22.9704 9.72058 23.0687 9.32333 22.9513 8.96132C22.8339 8.59932 22.5212 8.33531 22.1447 8.28027L15.7543 7.34622L12.8967 1.55713Z"
									}
									svgIconViewBox="0 0 24 24"
								/>
							</div>
							<div className="review-modal__review">
								<textarea
									name="review"
									className="review-modal__review-area text-md font-medium"
									placeholder=""
									onChange={(e) => setReview(e.target.value)}
									maxLength={1000}
									onFocus={() => (document.body.style.touchAction = "pinch-zoom")}
									onBlur={() => (document.body.style.touchAction = "auto")}
                  
								/>
								<span className="review-modal__area-label text-md">Ваш отзыв</span>
							</div>
						</div>
						<div className="review-modal__buttons-wrapper text-md">
							<button className="btn font-bold" onClick={handleCloseModal}>
								Закрыть
							</button>
							<button className="btn btn--primary font-bold" disabled={!isBtnAvailable}>
								Отправить
							</button>
						</div>
					</div>
				</ReactModal>
			</div>
		</div>
	);
}

export default App;
