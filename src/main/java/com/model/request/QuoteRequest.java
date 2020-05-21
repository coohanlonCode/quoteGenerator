package com.model.request;

import java.util.Objects;

public class QuoteRequest {

    private int inputNumber;

    public QuoteRequest withInputNumber(int inputNumber) {
        this.setInputNumber(inputNumber);
        return this;
    }

    public QuoteRequest withInputNumber(String inputNumber) {
        this.setInputNumber(Integer.valueOf(inputNumber));
        return this;
    }

    public int getInputNumber() {
        return inputNumber;
    }

    public void setInputNumber(int inputNumber) {
        this.inputNumber = inputNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        QuoteRequest that = (QuoteRequest) o;
        return inputNumber == that.inputNumber;
    }

    @Override
    public int hashCode() {
        return Objects.hash(inputNumber);
    }
}
