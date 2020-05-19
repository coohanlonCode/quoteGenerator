package com.controller;

import com.model.response.QuoteResponse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.service.QuoteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class InitialController {

    @Autowired
    QuoteService quoteService;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @GetMapping("/random")
    public QuoteResponse getRandom() {
        return quoteService.generateRandomQuote();
    }
}
