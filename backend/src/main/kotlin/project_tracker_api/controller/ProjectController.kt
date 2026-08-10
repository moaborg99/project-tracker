package project_tracker_api.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import project_tracker_api.model.Project
import project_tracker_api.service.ProjectService

@RestController
@RequestMapping("/api/projects")
class ProjectController(
    private val projectService: ProjectService
) {

    @GetMapping
    fun getProjects(): List<Project> {
        return projectService.getProjects()
    }
}