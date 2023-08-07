package com.currency.demo.service;

import com.currency.demo.exception.CurrencyNotFoundException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;

@Service
public class NbpService {

    private final String NBP_API_URL = "http://api.nbp.pl/api/exchangerates/rates/";

    public Double getCurrencyValueByName(String currencyCode) {

        try{
            // URLEncoder is to prevent Url-injection attacks
            String url = NBP_API_URL + "A/" + URLEncoder.encode(currencyCode, "UTF-8") + "?format=json";

            String responseBody = new RestTemplate()
                    .getForEntity(url, String.class)
                    .getBody();

            return new JSONObject(responseBody)
                    .getJSONArray("rates")
                    .getJSONObject(0)
                    .getDouble("mid");

        } catch (HttpClientErrorException.NotFound e){
            throw new CurrencyNotFoundException();
        } catch (Exception e){
            e.printStackTrace();
            throw new RuntimeException("Unexpected error occurred in NbpService");
        }
    }
}
