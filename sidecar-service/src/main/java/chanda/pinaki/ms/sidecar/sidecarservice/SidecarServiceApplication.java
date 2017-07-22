package chanda.pinaki.ms.sidecar.sidecarservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.sidecar.EnableSidecar;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.Environment;

@SpringBootApplication
@EnableSidecar
public class SidecarServiceApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(SidecarServiceApplication.class, args);
		
		System.out.println(context.getBean(Environment.class).getProperty("sidecar.port"));
	}
}
