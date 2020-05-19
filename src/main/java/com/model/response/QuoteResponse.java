package com.model.response;

import java.util.Objects;

public class QuoteResponse {

    private String quoteText;

    public QuoteResponse(String quoteText) {
        this.quoteText = quoteText;
    }

    public String getQuoteText() {
        return quoteText;
    }

    public void setQuoteText(String quoteText) {
        this.quoteText = quoteText;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        QuoteResponse that = (QuoteResponse) o;
        return Objects.equals(quoteText, that.quoteText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(quoteText);
    }
}
