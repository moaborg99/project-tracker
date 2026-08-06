package project_tracker_api

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ProjectTrackerApiApplication

fun main(args: Array<String>) {
	runApplication<ProjectTrackerApiApplication>(*args)
}
