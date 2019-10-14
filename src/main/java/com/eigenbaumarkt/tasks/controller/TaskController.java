package com.eigenbaumarkt.tasks.controller;

import com.eigenbaumarkt.tasks.domain.Task;
import com.eigenbaumarkt.tasks.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> list() {
        return this.taskService.list();

    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {

        return this.taskService.save(task);
    }

}
