package com.service;

import com.model.response.QuoteResponse;
import org.springframework.stereotype.Service;

@Service
public class QuoteService {

    public QuoteResponse generateRandomQuote() {
        return new QuoteResponse("I AM FROM THE JAVA!!");
    }

    public String provideDefault() {
        return "Greetings from Spring Boot! (but from the service level)";
    }
}
