package project_tracker_api.repository

import org.springframework.data.jpa.repository.JpaRepository
import project_tracker_api.model.Project

interface ProjectRepository : JpaRepository<Project, Long>