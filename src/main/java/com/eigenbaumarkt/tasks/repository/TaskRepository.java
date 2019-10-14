package com.eigenbaumarkt.tasks.repository;

import com.eigenbaumarkt.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {


}
