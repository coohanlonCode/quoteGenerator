package com.service;

import com.model.request.QuoteRequest;
import com.model.response.QuoteResponse;
import org.springframework.stereotype.Service;

@Service
public class QuoteService {

    public QuoteResponse generateRandomQuote() {
        return new QuoteResponse("I AM FROM THE JAVA!!");
    }

    public String provideDefault() {
        return "Greetings from Spring Boot! (but from the GETservice level)";
    }

    public QuoteResponse retrieveSpecificQuote(QuoteRequest requestPayload) {
        boolean isEvenNumber = requestPayload.getInputNumber() % 2 == 0;
        String myText = isEvenNumber ? "Thanks for the even number!" : " YOU GAVE ME AN ODD NUMBER???";
        myText+= " (provided with " + String.valueOf(requestPayload.getInputNumber())+  ")";
        return new QuoteResponse(myText);
    }
}
