package project_tracker_api.service

import org.springframework.stereotype.Service
import project_tracker_api.model.Project
import project_tracker_api.repository.ProjectRepository
import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException

@Service
class ProjectService(
    private val projectRepository: ProjectRepository
) {

    fun getProjects(): List<Project> {
        return projectRepository.findAll()
    }

    fun getProjectById(id: Long): Project {
        return projectRepository.findById(id)
            .orElseThrow {
                ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Project with id $id not found"
                )
            }
    }
}