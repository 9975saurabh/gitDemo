package com;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig 
{
@Bean
public Student s1()
	{
	
	Student s=new Student();
	s.setRollno(111);
	s.setName("Bhaskar");
		return s;
		
	}
	
}
