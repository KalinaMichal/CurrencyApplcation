package com.currency.demo.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class CurrenciesQuery {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    private String name;

    private String currency;

    private Date date;

    private Double value;

    public CurrenciesQuery(String name, String currency, Double value){
        this.currency=currency;
        this.name=name;
        this.value=value;
        this.date = new java.sql.Timestamp(new Date().getTime());
    }
}
