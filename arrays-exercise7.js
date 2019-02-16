const movies  = [
 {title: 'a', year: 2018, rating: 4.5},
 {title: 'b', year: 2018, rating: 4.7},
 {title: 'c', year: 2018, rating: 3},
 {title: 'd', year: 2017, rating: 4.5},
];

movieFilter(movies);

function movieFilter(movies){    
    // All the movies in 2018, with rating greater than 4.
    let results = movies.filter(function(value) {
       return value.year >= 2018 && value.rating >= 4
    });

    // Sort the list of movies in reverse order
    results.reverse();

    // Output the results on the console log.
    for (const movie of results) 
        console.log(movie.title);    
}