package com.currency.demo.repository;

import com.currency.demo.entity.CurrenciesQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrenciesQueryRepository extends JpaRepository<CurrenciesQuery, Integer> {

}
