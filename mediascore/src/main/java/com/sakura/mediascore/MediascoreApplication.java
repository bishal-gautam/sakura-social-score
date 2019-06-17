package com.sakura.mediascore;

import com.google.cloud.language.v1.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class MediascoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(MediascoreApplication.class, args);
		//String text = "Google is polluting water in Berlin";

	}
}
