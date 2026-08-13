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

    fun createProject(project: Project): Project {
        return projectRepository.save(project)
    }

    fun deleteProject(id: Long) {
        projectRepository.deleteById(id)
    }

    fun updateProject(id: Long, updatedProject: Project): Project {
        val existingProject = projectRepository.findById(id)
            .orElseThrow {
                ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Project with id $id not found"
                )
            }

        existingProject.name = updatedProject.name
        existingProject.description = updatedProject.description
        existingProject.status = updatedProject.status
        existingProject.priority = updatedProject.priority
        existingProject.completedTasks = updatedProject.completedTasks
        existingProject.totalTasks = updatedProject.totalTasks
        existingProject.dueDate = updatedProject.dueDate
        existingProject.startDate = updatedProject.startDate

        return projectRepository.save(existingProject)
    }
}