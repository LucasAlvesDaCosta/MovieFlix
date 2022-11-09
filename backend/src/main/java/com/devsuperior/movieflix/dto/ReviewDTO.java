package com.devsuperior.movieflix.dto;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO {
	
	private Long id;
	
	@NotBlank(message = "Campo requirido")
	private String text;
	
	private Long movieId;
	private UserDTO user;
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text, Movie movie, UserDTO user) {
		super();
		this.id = id;
		this.text = text;
		movieId = movie.getId();
		this.user = user;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		user = new UserDTO(entity.getUser());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
	
}
