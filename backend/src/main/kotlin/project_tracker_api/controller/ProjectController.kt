package project_tracker_api.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.PathVariable
import project_tracker_api.model.Project
import project_tracker_api.service.ProjectService

@CrossOrigin(origins = ["http://localhost:5173"])
@RestController
@RequestMapping("/api/projects")
class ProjectController(
    private val projectService: ProjectService
) {

    @GetMapping
    fun getProjects(): List<Project> {
        return projectService.getProjects()
    }

    @GetMapping("/{id}")
    fun getProjectById(@PathVariable id: Long): Project {
        return projectService.getProjectById(id)
    }
}