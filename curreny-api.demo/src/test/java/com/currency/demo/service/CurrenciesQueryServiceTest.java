package com.currency.demo.service;

import com.currency.demo.entity.CurrenciesQuery;
import com.currency.demo.repository.CurrenciesQueryRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestPropertySource(locations="classpath:test.properties")
public class CurrenciesQueryServiceTest{

    @Autowired
    MockMvc mvc;

    @Autowired
    CurrenciesQueryRepository currenciesQueryRepository;

    @BeforeEach
    void init() {

        currenciesQueryRepository.deleteAll();
    }

    @Test
    void shouldGetCurrentCurrencyValueOnOkCode() throws Exception {

        //given
        String jsonRequest = "{\"name\":\"Adam\",\"currency\":\"USD\"}";

        //when
        ResultActions result = mvc.perform(post("api/currencies/get-current-currency-value-command")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonRequest));

        //then
        List<CurrenciesQuery> allQueries = currenciesQueryRepository.findAll();
        assertThat(allQueries.size()).isOne();
        assertThat(allQueries.get(0).getName()).isEqualTo("Adam");
        assertThat(allQueries.get(0).getCurrency()).isEqualTo("USD");
        result.andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    void ShouldGetCurrentCurrencyValueOnNotOkCode() throws Exception {

        //given
        String jsonRequest = "{\"name\":\"Leszek\",\"currency\":\"NOTOK\"}";

        //when
        ResultActions result = mvc.perform(post("api/currencies/get-current-currency-value-command")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonRequest));

        //then
        result.andExpect(status().isNotFound())
                .andDo(print());
    }

    @Test
    void shouldGetAll() throws Exception {

        //given
        CurrenciesQuery currenciesQuery = new CurrenciesQuery("Kaska","USD",4.444);
        currenciesQueryRepository.save(currenciesQuery);

        //when
        ResultActions getResult = mvc.perform(get("api/currencies/requests"));

        //then
        getResult.andExpect(status().isOk())
                .andDo(print());
        getResult.andExpect(content().string(containsString("name\":\"Kaska\",\"currency\":\"USD")));
    }
}

