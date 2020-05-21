package com.controller;

import com.model.request.QuoteRequest;
import com.model.response.QuoteResponse;
import org.springframework.web.bind.annotation.*;
import com.service.QuoteService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class InitialController {

    @Autowired
    QuoteService quoteService;

    @RequestMapping("/")
    public String index() {
        return quoteService.provideDefault();
    }

    @GetMapping("/random")
    public QuoteResponse getRandom() {
        return quoteService.generateRandomQuote();
    }

    @PostMapping("/specific")
    public QuoteResponse getSpecific(@RequestBody QuoteRequest requestPayload) {
        return quoteService.retrieveSpecificQuote(requestPayload);
    }
}
