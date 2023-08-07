package com.currency.demo.advice;

import com.currency.demo.exception.CurrencyNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class NotFoundAdvice {

    @ResponseBody
    @ExceptionHandler({CurrencyNotFoundException.class})
    public ResponseEntity<Object> handleNotFoundError(CurrencyNotFoundException ex) {
        log.warn("Returning Http 404 Not found " + ex);
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}