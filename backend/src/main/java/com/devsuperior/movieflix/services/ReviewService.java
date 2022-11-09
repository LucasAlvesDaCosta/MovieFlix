package com.devsuperior.movieflix.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		User user = authService.authenticated();
		
	   try {
		Review entity = new Review();

		entity.setText(dto.getText());
		entity.setUser(user);
		entity.setMovie(movieRepository.getOne(dto.getMovieId()));
		
		reviewRepository.save(entity);
		return new ReviewDTO(entity);
	} catch (EntityNotFoundException e) {
		throw new ResourceNotFoundException("Id not found: "+dto.getMovieId());
	}
		
	}
	
}
