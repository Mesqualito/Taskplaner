package com.eigenbaumarkt.tasks.service;

import com.eigenbaumarkt.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

}
