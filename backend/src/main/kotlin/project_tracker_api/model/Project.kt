package project_tracker_api.model

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "projects")
data class Project(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    var name: String,

    var description: String,

    var status: String,

    var priority: String,

    var completedTasks: Int,

    var totalTasks: Int,

    var dueDate: LocalDate,

    var startDate: LocalDate,
)