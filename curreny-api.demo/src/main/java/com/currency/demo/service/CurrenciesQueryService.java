package com.currency.demo.service;

import com.currency.demo.entity.CurrenciesQuery;
import com.currency.demo.repository.CurrenciesQueryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CurrenciesQueryService {

    private final CurrenciesQueryRepository currenciesQueryRepository;

    @Transactional
    public void createCurrenciesQuery(CurrenciesQuery currenciesQuery){

         currenciesQueryRepository.save(currenciesQuery);
    }

    public List<CurrenciesQuery> readCurrenciesQuery(){

        return currenciesQueryRepository.findAll();
    }
}
