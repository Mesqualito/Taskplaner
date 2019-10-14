package com.eigenbaumarkt.tasks;

import com.eigenbaumarkt.tasks.domain.Task;
import com.eigenbaumarkt.tasks.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TasksApplication {

    public static void main(String[] args) {
        SpringApplication.run(TasksApplication.class, args);
    }


    @Bean
    CommandLineRunner runner(TaskService taskService) {

        return args -> {
            taskService.save(new Task(1L, "Spring Boot Anwendung anlegen", LocalDate.now(), true) );
            taskService.save(new Task(2L, "Spring Boot Packages erzeugen", LocalDate.now(), true) );
            taskService.save(new Task(3L, "Domain-Klasse \"Task\" programmieren", LocalDate.now(), true) );
            taskService.save(new Task(4L, "Service- und Repository-Klassen dazu anlegen", LocalDate.now(), true) );
            taskService.save(new Task(5L, "Command line runner definieren, um Daten zu laden", LocalDate.now(), true) );
            taskService.save(new Task(6L, "Die benötigten Konfigurationseigenschaften festlegen", LocalDate.now().plus(1, ChronoUnit.DAYS), true) );
            taskService.save(new Task(7L, "Die Spring Boot Anwendung starten", LocalDate.now().plus(1, ChronoUnit.DAYS), true) );
            taskService.save(new Task(8L, "In der H2-Console überprüfen, ob die Anfangs-Testdaten angelegt wurden", LocalDate.now().plus(2, ChronoUnit.DAYS), true) );
        };
    }

}
