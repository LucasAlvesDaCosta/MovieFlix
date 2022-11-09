package com.devsuperior.movieflix.services;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieAndReviewDTO;
import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, Pageable pageable) {
		genreId = (genreId == 0) ? null : genreId;
		Page<Movie> pagelist = repository.findMovieByGenre(genreId, pageable);
		return pagelist.map(x -> new MovieDTO(x,x.getGenre()));
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		try {
			Movie movie = repository.getOne(id);
		  return new MovieDTO(movie, movie.getGenre());
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found: "+id);
		}
		
	}
	
	@Transactional(readOnly = true)
	public List<MovieAndReviewDTO> findByIdMovieAndReview(Long movieId) {
		try {
			Movie movie = repository.getOne(movieId);
			//List<Review> reviews = reviewRepository.findMovieAndReview(movie);
			List<MovieAndReviewDTO> list = reviewRepository.findMovieAndReview(movie);
		  return list;
				  //reviews.stream().map(x -> new MovieAndReviewDTO(x)).collect(Collectors.toList());
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found: "+movieId);
		}
	}
	
}
