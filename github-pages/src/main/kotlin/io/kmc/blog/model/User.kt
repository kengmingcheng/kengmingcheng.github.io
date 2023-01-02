package io.kmc.blog.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class User(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        val id : Long,
        var firstName : String = "",
        var lastName : String = "",
        var dispName : String = ""
) {
}