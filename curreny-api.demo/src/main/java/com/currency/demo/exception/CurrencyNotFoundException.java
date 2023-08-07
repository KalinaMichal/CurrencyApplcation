package com.currency.demo.exception;

public class CurrencyNotFoundException extends RuntimeException{

    public CurrencyNotFoundException() {

        super("Provided currency is not supported or there are problems with NBP service");
    }
}
