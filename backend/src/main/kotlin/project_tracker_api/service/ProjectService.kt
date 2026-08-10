package project_tracker_api.service

import org.springframework.stereotype.Service
import project_tracker_api.model.Project
import project_tracker_api.repository.ProjectRepository

@Service
class ProjectService(
    private val projectRepository: ProjectRepository
) {

    fun getProjects(): List<Project> {
        return projectRepository.findAll()
    }
}