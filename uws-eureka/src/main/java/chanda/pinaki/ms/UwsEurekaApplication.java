package chanda.pinaki.ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class UwsEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(UwsEurekaApplication.class, args);
	}
}
