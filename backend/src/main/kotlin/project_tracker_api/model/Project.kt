package project_tracker_api.model

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "projects")
data class Project(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    val name: String,

    val description: String,

    val status: String,

    val priority: String,

    val completedTasks: Int,

    val totalTasks: Int,

    val dueDate: LocalDate,

    val startDate: LocalDate
)