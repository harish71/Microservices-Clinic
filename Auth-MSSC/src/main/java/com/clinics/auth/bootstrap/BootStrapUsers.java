package com.clinics.auth.bootstrap;

import com.clinics.auth.models.User;
import com.clinics.auth.repositories.UserRepository;
import com.clinics.common.ConsoleColors;
import com.clinics.common.security.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class BootStrapUsers implements CommandLineRunner, Role {

	@Autowired
	UserRepository userRepository;

	@Lazy
	@Autowired
	public PasswordEncoder passwordEncoder;

	@Override
	public void run(String... args) throws Exception {
		User userPatient1 = User
				.builder()
				.email("jan@jan.pl")
				.password(passwordEncoder.encode("12345"))
				.role(Role.PATIENT)
				.firstName("Jan")
				.lastName("Janjanowski")
				.photoUrl("http://jan.pl")
				.build();
		User userPatient2 = User
				.builder()
				.email("adam@adam.pl")
				.password(passwordEncoder.encode("12345"))
				.role(Role.PATIENT)
				.firstName("Adam")
				.lastName("Adamowski")
				.photoUrl("http://adam.pl")
				.build();
		User userDoctor1 = User
				.builder()
				.email("ola@ola.pl")
				.password(passwordEncoder.encode("12345"))
				.role(Role.DOCTOR)
				.firstName("Ola")
				.lastName("Olkowska")
				.photoUrl("http://ola.pl")
				.build();
		User userDoctor2 = User
				.builder()
				.email("ala@ala.pl")
				.password(passwordEncoder.encode("12345"))
				.role(Role.DOCTOR)
				.firstName("Ala")
				.lastName("Alowska")
				.photoUrl("http://ala.pl")
				.build();
		User userAssistant1 = User
				.builder()
				.email("zeta@zeta.pl")
				.password(passwordEncoder.encode("12345"))
				.role(Role.ASSISTANT)
				.firstName("Zeta")
				.lastName("Zetowska")
				.photoUrl("http://zeta.pl")
				.build();
		User userAssistant2 = User
				.builder()
				.email("anna@anna.pl")
				.password(passwordEncoder.encode("12345"))
				.role(Role.ASSISTANT)
				.firstName("Anna")
				.lastName("Annowska")
				.photoUrl("http://anna.pl")
				.build();
		User creepy = User
				.builder()
				.email("creepy@creepy.pl")
				.password(passwordEncoder.encode("666"))
				.role(Role.SYSTEM_ADMIN)
				.firstName("Creepy")
				.lastName("Creepowski")
				.photoUrl("http://creepy.pl")
				.build();

		List<User> userList = Arrays.asList(
				userPatient1,
				userPatient2,
				userDoctor1,
				userDoctor2,
				userAssistant1,
				userAssistant2,
				creepy);

		userRepository.saveAll(userList);

		var user = userRepository.findById(1L).get();
		System.out.println(ConsoleColors.GREEN_BOLD);
		System.out.println(user.getFirstName());
		System.out.println(user.getLastName());
		System.out.println(user.getEmail());
		System.out.println(user.getPassword());
		System.out.println(ConsoleColors.RESET);

	}
}



