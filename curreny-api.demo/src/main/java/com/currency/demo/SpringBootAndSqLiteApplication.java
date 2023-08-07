package com.currency.demo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@Slf4j
//@EnableJpaRepositories(basePackages = {"pl.hypeapp.episodie.dataproviders"})
//@EntityScan(basePackages = {"com.currency.demo.entity"})
public class SpringBootAndSqLiteApplication {

	public static void main(String[] args) {

		log.info("starting application");
		SpringApplication.run(SpringBootAndSqLiteApplication.class, args);
	}
}
