package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Review;

public class MovieAndReviewDTO {

	private String reviewText;
	private String userName;
	
	public MovieAndReviewDTO() {
		
	}

	public MovieAndReviewDTO(String reviewText, String userName) {
		super();
		this.reviewText = reviewText;
		this.userName = userName;
	}

	public MovieAndReviewDTO(Review entity) {
		reviewText = entity.getText().toString();
		userName = entity.getUser().getName().toString();
	}

	
	public String getReviewText() {
		return reviewText;
	}

	public void setReviewText(String text) {
		this.reviewText = text;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	
}