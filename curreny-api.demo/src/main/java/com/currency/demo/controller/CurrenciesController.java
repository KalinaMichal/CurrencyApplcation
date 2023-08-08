package com.currency.demo.controller;

import com.currency.demo.body.CurrentCurrencyRequest;
import com.currency.demo.body.CurrentCurrencyResponse;
import com.currency.demo.entity.CurrenciesQuery;
import com.currency.demo.service.CurrenciesQueryService;
import com.currency.demo.service.NbpService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/currencies")
@RequiredArgsConstructor
@Slf4j
public class CurrenciesController {

    private final CurrenciesQueryService currenciesQueryService;

    private final NbpService nbpService;

    @PostMapping("/get-current-currency-value-command")
    public CurrentCurrencyResponse getCurrentCurrencyValueCommand(@RequestBody CurrentCurrencyRequest currentCurrencyRequest){

        log.info("POST get-current-currency-value-command started");
        String currencyCode = currentCurrencyRequest.getCurrency();
        Double currencyValue = nbpService.getCurrencyValueByName(currencyCode);

        CurrenciesQuery currenciesQuery = new CurrenciesQuery(currentCurrencyRequest.getName(), currencyCode, currencyValue);
        this.currenciesQueryService.createCurrenciesQuery(currenciesQuery);
        log.info("currencyQuery successfully saved");

        return new CurrentCurrencyResponse(currencyValue);
    }

    @GetMapping( "/requests")
    public List<CurrenciesQuery> readStudents(){

        log.info("GET requests started");
        return currenciesQueryService.readCurrenciesQuery();
    }
}
