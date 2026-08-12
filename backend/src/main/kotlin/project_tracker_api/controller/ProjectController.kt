package project_tracker_api.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.DeleteMapping

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody

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

    @PostMapping
    fun createProject(@RequestBody project: Project): Project {
        return projectService.createProject(project)
    }

    @DeleteMapping("/{id}")
    fun deleteProject(@PathVariable id: Long) {
        projectService.deleteProject(id)
    }

}